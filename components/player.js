import { useEffect } from 'react'
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
  background: `${siteTheme.darkGreen}`,
  overflow: 'hidden',
  zIndex: 0
})
const StyledAudioPlayer = styled.audio({

})


export const Player = ({episode}) => {
  const {
    id,
    title,
    description,
    published_at,
    artwork_url,
    audio_url,
    episode_number
  } = episode

  useEffect(() => {
    document
      .getElementById("audio-player")
      .setAttribute('src', audio_url);
  }, [audio_url])

  return (
    <StyledAudioWrapper>
      <h3>Episode {episode_number} - {title}</h3>
      <StyledAudioPlayer id="audio-player" controls >
        <source src={audio_url} type="audio/mpeg" />
      </StyledAudioPlayer>
    </StyledAudioWrapper>
  )
}
