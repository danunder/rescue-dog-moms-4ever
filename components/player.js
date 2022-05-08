import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { FaPlay, FaPause } from 'react-icons/fa'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { siteTheme } from '../styles/theme.config'
import styled from 'styled-components'
const StyledAudioWrapper = styled.div({
  position: 'relative',
  margin: '1rem',
  padding: '1rem',
  boxShadow: `0 0 15px ${siteTheme.darkGreen}`,
  borderRadius: '10px',
  background: siteTheme.darkGreen,
  overflow: 'hidden',
  zIndex: 0
})
const StyledWrapper = styled.div({
  maxWidth: '450px',
  '.backgroundImage': {
    opacity: '35%',
    zIndex: '-1',
    borderRadius: '10px'
  },
  zIndex: '-1',
  h3: {
    margin: '1.5rem',
    position: 'absolute',
    top: '16px',
    left: '0px',
    fontSize: '24px',
    textAlign: 'center',
    color: siteTheme.lightPink,
    textShadow: `2px 2px 1px ${siteTheme.darkPink}`
  }

})
const StyledPlayButton = styled.button({
  background: siteTheme.lightPink,
  border: 'none',
  borderRadius: '50%',
  width: '75px',
  height: '75px',
  fontSize: '24px',
  color: siteTheme.darkPink,
  boxShadow: `1px 1px 1px ${siteTheme.darkPink}`,
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
margin-top: 3px;
box-shadow: 1px 1px 2px ${siteTheme.darkPink};
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
::-webkit-slider-runnable-track {
  background: var(--bar-bg);;
  border-radius: 10px;
  position: relative;
  width: 100%;
  height: 11px;
  outline: none;
}
::-moz-range-track {
  background: var(--bar-bg);;
  border-radius: 10px;
  position: relative;
  width: 100%;
  height: 11px;
  outline: none;
}
::-moz-focus-outer {
  border: 0;
}
::-moz-range-progress {
  background-color: var(--seek-before-color);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  height: 11px;
}
::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: none;
  background-color: var(--knobby);
  cursor: pointer;
  position: relative;
  margin: -2px 0 0 0;
  z-index: 3;
  box-sizing: border-box;
  :active {
    transform: scale(1.2);
    background: var(--selectedKnobby);
    border: 1px solid ${siteTheme.darkPink}
  }
}
::-moz-range-thumb {
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: transparent;
  background-color: var(--knobby);
  cursor: pointer;
  position: relative;
  z-index: 3;
  box-sizing: border-box;
  :active {
    transform: scale(1.2);
    background: var(--selectedKnobby);
    border: 1px solid ${siteTheme.darkPink}
  }
}
`

const StyledForwardBack = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  font-size: 24px;
  color: ${siteTheme.lightPink};
  text-shadow: 1px 1px 1px ${siteTheme.darkPink};
  cursor: pointer;
  margin: 1rem;
`
const StyledTime = styled.div`
  margin: 0 0.5rem;
`
const StyledControlBox = styled.div`
  position: absolute;
  bottom: 50px;
  width: 90%;
  max-width: 400px;
  margin: 0;
  padding: 0;
  color: ${siteTheme.lightPink};
  text-shadow: 1px 1px 1px ${siteTheme.darkPink};
`

const StyledControlsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 0.5rem;
`

export const Player = ({ episode }) => {
  const {
    id,
    title,
    description,
    published_at,
    artwork_url,
    audio_url,
    episode_number,
    duration: epDuration
  } = episode


  const [ isPlaying, setIsPlaying ] = useState(false)
  const [ duration, setDuration ] = useState(0)
  const [ currentTime, setCurrentTime ] = useState(0)

  const audioPlayer = useRef()
  const progressBar = useRef()
  const animationRef = useRef()

  useEffect(() => {
    audioPlayer.current.setAttribute('src', audio_url)
    setDuration(epDuration)
    progressBar.current.max = epDuration
    isPlaying && audioPlayer.current.play()
  }, [audio_url, epDuration])

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60)
    const returnedMinutes = minutes < 10? `0${minutes}` : `${minutes}`
    const seconds = Math.floor(secs % 60)
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
    return `${returnedMinutes}:${returnedSeconds}`
  }

  const togglePlayPause = () => {
    const prevValue = isPlaying
    setIsPlaying(!prevValue)
    if (!prevValue) {
      audioPlayer.current.play()
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      audioPlayer.current.pause()
      cancelAnimationFrame(animationRef.current)
    }
  }

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime
    changePlayerCurrentTime()
    animationRef.current = requestAnimationFrame(whilePlaying)
  }

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  }

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    setCurrentTime(progressBar.current.value)
  }

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value) - 30;
    changeRange();
  }

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value) + 30;
    changeRange();
  }


  return (
    <StyledAudioWrapper>
      <StyledWrapper >
        <h3>Episode {episode_number} - {title}</h3>
        <Image src={artwork_url} height={400} width={400} alt={`Episode ${episode_number} artwork`} className='backgroundImage'/>
        <StyledControlBox>
          <StyledControlsWrapper>
            <StyledForwardBack onClick={backThirty}><BsArrowLeftShort className='arrow'/>30</StyledForwardBack>
            <StyledPlayButton onClick={togglePlayPause}>{isPlaying? <FaPause/> : <FaPlay className='play'/>}</StyledPlayButton>
            <StyledForwardBack onClick={forwardThirty}>30<BsArrowRightShort className='arrow'/></StyledForwardBack>
          </StyledControlsWrapper>
          <StyledControlsWrapper>
            <StyledTime>{calculateTime(currentTime)}</StyledTime>
            <StyledProgressBar type="range" ref={progressBar} onChange={changeRange} defaultValue="0"/>
            <StyledTime>{(duration && !isNaN(duration)) && calculateTime(duration)}</StyledTime>
          </StyledControlsWrapper>
        </StyledControlBox>
      </StyledWrapper>

      <audio src='' ref={audioPlayer}  />

    </StyledAudioWrapper>
  )
}
