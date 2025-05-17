import Image from 'next/image'
import styled from 'styled-components'
import { siteTheme } from '../styles/theme.config'

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
  transition: 'color 0.15s ease, border 0.15s ease, text-shadow 0.15s ease, box-shadow 0.15s ease, padding 0.75s ease',
  height: '500px',
  width: '350px',
  maxWidth: '90vw',
  fontFamily: 'Lobster',
  ":active, :focus, :hover": {
    color: `${siteTheme.darkPink}`,
    textShadow: `1px 1px ${siteTheme.pink}`,
    border: `3px solid${siteTheme.darkPink}`,
    boxShadow: `1px 1px ${siteTheme.pink}`,
    padding: '0.5rem'
  },
  h3: {
    maxWidth: '300px'
  },
  img: {
    borderRadius: '25px',
    maxWidth: '100%',
    maxHeight: '100%'
  }
})
export const Episodes = ({
  episodes,
  onSelect
}) => {
  const episodeList = episodes && episodes.map(({
    id,
    title,
    artwork_url
  }) =>(
      <StyledEpisode key={id} onClick={() => onSelect(id)}>
        <h3>{title}</h3>
        <Image src={artwork_url} alt={`episode ${id} artwork`} width={350} height={350}/>
      </StyledEpisode>
  ))
  return (
    <StyledEpisodeContainer>
      {episodeList}
    </StyledEpisodeContainer>
  )
}
