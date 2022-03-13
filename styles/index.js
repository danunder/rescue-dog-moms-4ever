import styled from 'styled-components'
import { siteTheme } from '../styles/theme.config'

const StyledPageContainer = styled.div({
  padding: 0,
  background: `${siteTheme.green}`,
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center'
})

const StyledPageHeader = styled.header({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  h1: {
    margin: 0,
    fontSize: '32px'
  },
  h3: {
    fontSize: '24px'
  },
  marginBottom: '1rem'
})

const StyledMain = styled.main({
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

const StyledEpisodeContainer = styled.div({
  padding: 0,
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '1200px'
})

const StyledEpisode = styled.div({
  margin: '1rem',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  color: 'inherit',
  border: `2px solid ${siteTheme.darkGreen}`,
  borderRadius: '25px',
  boxShadow: `1px 1px ${siteTheme.darkPink}`,
  transition: 'color 0.15s ease, border 0.15s ease, text-shadow 0.15s ease, box-shadow 0.15s ease, height 0.75s ease, width 0.75s ease',
  height: '500px',
  width: '350px',
  maxWidth: '90vw',
  fontFamily: 'Lobster',
  ":active, :focus, :hover": {
    color: `${siteTheme.darkPink}`,
    textShadow: `1px 1px ${siteTheme.pink}`,
    border: `3px solid${siteTheme.darkPink}`,
    boxShadow: `1px 1px ${siteTheme.pink}`,
    height: '510px',
    width: '360px'
  },
  h2: {
    maxWidth: '300px'
  }
})

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
  padding: '1rem',
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
  border: `2px solid ${siteTheme.lightPink}`,
  borderBottom: 'none',
  borderRight: 'none',
  boxShadow: `2px 2px ${siteTheme.darkPink}`,
  fontSize: '2rem',
  width: '2.5rem',
  height: '2.5rem',
  borderRadius: '25px',
  transition: 'opacity 0.15s ease',
  opacity: '0.5',
  ":active, :focus, :hover": {
    opacity: '1'
  }
})
const StyledIconsWrapper = styled.span({
  height: '1rem',
  marginTop: '0.75rem',
  marginBottom: '4rem'
})
const StyledIconWrapper = styled.a({
  margin: '1rem'
})

module.exports = {
  StyledPageContainer,
  StyledPageHeader,
  StyledMain,
  StyledEpisodeContainer,
  StyledEpisode,
  StyledModalWrapper,
  StyledModal,
  StyledCloseButton,
  StyledIconsWrapper,
  StyledIconWrapper,
}
