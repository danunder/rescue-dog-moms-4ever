import { useEffect, useState, useRef } from 'react'
import { FaPlay, FaPause } from 'react-icons/fa'
import { siteTheme } from '../styles/theme.config'
import styled from 'styled-components'
const StyledAudioWrapper = styled.div({
  position: 'relative',
  width: '90%',
  height: '300px',
  margin: '1rem',
  padding: '1rem',
  boxShadow: '0 0 30px rgba(0,0,0,0.8)',
  borderRadius: '10px',
  background: siteTheme.darkGreen,
  overflow: 'hidden',
  zIndex: 0
})
const StyledPlayButton = styled.button({
  background: siteTheme.lightPink,
  border: 'none',
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  fontSize: '24px',
  color: siteTheme.darkPink,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '.play': {
    position: 'relative',
    left: '2px'
  }
})

const StyledProgressBar = styled.input`
--bar-bg: ${siteTheme.lightPink};
--seek-before-width: 0;
--seek-before-color: ${siteTheme.darkPink};
--knobby: ${siteTheme.pink};
--selectedKnobby: ${siteTheme.lightPink};

appearance: none;
background: var(--bar-bg);;
border-radius: 10px;
position: relative;
width: 100%;
height: 11px;
outline: none;
::before {
  content: '';
  height: 11px;
  width: var(--seek-before-width);
  background-color: var(--seek-before-color);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  cursor: pointer;
}
`


export const Player = ({ episode }) => {
  const {
    id,
    title,
    description,
    published_at,
    artwork_url,
    audio_url,
    episode_number
  } = episode

  const [ isPlaying, setIsPlaying ] = useState(false)
  const [ duration, setDuration ] = useState(0)
  const [ currentTime, setCurrentTime ] = useState(0)

  const audioPlayer = useRef()
  const progressBar = useRef()

  useEffect(() => {
    audioPlayer.current.setAttribute('src', audio_url);
  }, [audio_url])

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration)
    setDuration(seconds)
    progressBar.current.max = seconds
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  }

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    setCurrentTime(progressBar.current.value);
  }

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      // animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      audioPlayer.current.pause();
      // cancelAnimationFrame(animationRef.current);
    }
  }

  return (
    <StyledAudioWrapper>
      <h3>Episode {episode_number} - {title}</h3>
      <StyledPlayButton onClick={togglePlayPause}>{isPlaying? <FaPause/> : <FaPlay className='play'/>}</StyledPlayButton>
      <StyledProgressBar type="range" ref={progressBar} onChange={changeRange} defaultValue="0"/>
      <audio ref={audioPlayer} preload="metadata" />

    </StyledAudioWrapper>
  )
}
