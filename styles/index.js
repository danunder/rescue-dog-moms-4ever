import styled from 'styled-components'
import { siteTheme } from '../styles/theme.config'

export const StyledPageContainer = styled.div({
  padding: '12px',
  background: `${siteTheme.green}`,
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center'
})

export const StyledPageHeader = styled.header({
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
  }
})

export const StyledImageWrapper = styled.div({
  margin: '1.5rem 0',
  position: 'relative',
  img: {
    borderRadius: '10px',
    maxWidth: '400px',
    maxHeight: '480px',
  },
  '@media (max-width: 600px)': {
    img: {
      borderRadius: '10px',
      maxWidth: '300px',
      maxHeight: '360px'
    }
  }
})
export const StyledMain = styled.main({
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

export const StyledLink = styled.a({
  margin: '0.5rem 1rem',
  borderRadius: '10px',
  boxShadow: `0 0 15px ${siteTheme.darkGreen}`,
  h3: {
    margin: '1rem 1rem',
    fontSize: '1.5rem'
  },
  ":active, :focus, :hover": {
    color: `${siteTheme.darkPink}`,
    textShadow: `1px 1px ${siteTheme.pink}`,
    boxShadow: `0px 0px 25px ${siteTheme.pink}`,
  },
  transition: 'color 0.15s ease, box-shadow 0.15s ease, border 0.15s ease, text-shadow 0.15s ease'
})
