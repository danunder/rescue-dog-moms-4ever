import styled from 'styled-components'
const StyledAudioWrapper = styled.div({

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
    audio_url
  } = episode

  return (
    <StyledAudioWrapper>
      <h2>{title} mooooo</h2>
      <StyledAudioPlayer controls >
        <source src={audio_url} type="audio/mpeg" />
      </StyledAudioPlayer>
    </StyledAudioWrapper>
  )
}
