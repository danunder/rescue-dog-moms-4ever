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
  StyledIconsWrapper,
  StyledIconWrapper,
}
