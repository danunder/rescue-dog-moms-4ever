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
    margin: 0,
    fontSize: '32px'
  },
  h3: {
    fontSize: '24px'
  },
  marginBottom: '1rem'
})

export const StyledMain = styled.main({
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})
