import styled from 'styled-components'
import { siteTheme } from '../styles/theme.config'

const StyledModalWrapper = styled.div({
  zIndex: '2',
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100vh',
  width: '100vw',
  background: 'rgba(0,0,0,0.5)'
})

const StyledModal = styled.div({
  zIndex: '3',
  position: 'fixed',
  overflow: 'auto',
  backgroundColor: `${siteTheme.pink}`,
  top: '7vh',
  left: '3vw',
  height: '88vh',
  width: '94vw',
  border: `3px solid ${siteTheme.lightPink}`,
  borderBottom: 'none',
  borderRight: 'none',
  borderRadius: '30px',
  boxShadow: `4px 4px 4px ${siteTheme.darkPink}`,
  padding: '1.5rem',
  div: {
    a: {
      textDecoration: 'underline',
      color: `${siteTheme.darkPink}`
    }
  }
})
const StyledCloseButton = styled.button({
  zIndex: '4',
  position: 'fixed',
  top: '8vh',
  right: '4vw',
  backgroundColor: `${siteTheme.pink}`,
  color: `${siteTheme.darkPink}`,
  border: `1px solid ${siteTheme.lightPink}`,
  borderBottom: 'none',
  borderRight: 'none',
  boxShadow: `1px 1px ${siteTheme.darkPink}`,
  fontSize: '2rem',
  width: '2.5rem',
  height: '2.5rem',
  borderRadius: '25px',
  transition: 'opacity 0.15s ease border-width 0.15s ease box-shadow 0.15s ease',
  opacity: '0.5',
  ":active, :focus, :hover": {
    opacity: '0.85',
    borderWidth: '2px',
    boxShadow: `2px 2px ${siteTheme.darkPink}`

  }
})

const StyledPlayEpisodeButton = styled.button`
`

export const Modal = ({
  episode,
  onClose,
  onPlayerEpisodeSelect
 }) => {
  const {
    title: selectedEpisodeTitle,
    description: selectedEpisodeDescription,
    published_at: selectedEpisodePublishedDate
  } = episode

  return (
    <StyledModalWrapper onClick={onClose}>
      <StyledModal onClick={e => e.stopPropagation()}>
        {selectedEpisodeTitle && <h2>{selectedEpisodeTitle}</h2>}
        <StyledPlayEpisodeButton onClick={onPlayerEpisodeSelect()}>Listen to this episode</StyledPlayEpisodeButton>
        {selectedEpisodePublishedDate && <h3>{selectedEpisodePublishedDate}</h3>}
        {selectedEpisodeDescription && <div dangerouslySetInnerHTML={selectedEpisodeDescription} />}
        <StyledCloseButton onClick={onClose}>X</StyledCloseButton>
      </StyledModal>
    </StyledModalWrapper>)

}

