import styled from 'styled-components'
import { siteTheme } from '../styles/theme.config'

export const StyledPageContainer = styled.div({
  padding: 0,
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
    margin: 0
  },
  marginBottom: '1rem'
})
export const StyledMain = styled.main({
  width: '90%',
  maxWidth: '800px'
})
export const StyledLinkWrapper = styled.a({
  margin: '0.5rem',
})
export const StyledLink = styled.div({
  width: '100%',
  border: `2px solid ${siteTheme.pink}`,
  borderRadius: '40px',
  transition: 'color 0.15s ease, border-color 0.15s ease, font-size 0.15s ease',
  margin: 0,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  color: `${siteTheme.darkGreen}`,
  fontFamily: 'Lobster',
  padding: '0.5rem',
  ":active, :focus, :hover": {
    color: `${siteTheme.darkPink}`,
    borderColor: `${siteTheme.darkPink}`,
    fontSize: '18px'
  }
})
export const StyledIconWrapper = styled.div({
  margin: '1rem',
  filter: 'opacity(0.5)'
})
