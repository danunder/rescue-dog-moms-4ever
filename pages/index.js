import Head from 'next/head'
import Image from 'next/image'
import { getEpisodeData, formatEpisodeData } from '../lib/episodes'
import { socials } from '../lib/links'
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

const StyledEpisode = styled.div({
  margin: '1rem',
  padding: '1.5rem',
  textAlign: 'center',
  color: 'inherit',
  border: `2px solid ${siteTheme.darkGreen}`,
  borderRadius: '25px',
  transition: 'color 0.15s ease, border-color 0.15s ease, text-shadow 0.15s ease, box-shadow 0.15s ease',
  width: '650px',
  maxWidth: '90vw',
  fontFamily: 'Lobster',
  ":active, :focus, :hover": {
    color: `${siteTheme.darkPink}`,
    textShadow: `1px 1px ${siteTheme.pink}`,
    borderColor: `${siteTheme.darkPink}`,
    boxShadow: `1px 1px ${siteTheme.pink}`,
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

export default function Home({ episodes }) {
  const episodeList = episodes.map(({
    id,
    title,
    description,
    published_at,
    artwork_url
  }) =>(
      <StyledEpisode key={id} >
        <h2>{title}</h2>
        <Image src={artwork_url} alt={`episode ${id} artwork`} width={300} height={300}/>
      </StyledEpisode>
  ))
  const socialIcons = socials
    .filter(({ makeIconLink }) => makeIconLink)
    .map(({ service, icon, link }, i) => {
      return (
        <StyledIconWrapper
          href={link}
          rel="noopener noreferrer"
          target="_blank"
          key={i}
        >
          <Image
            src={icon}
            alt={`${service} logo`}
            width={50}
            height={50}
          />
        </StyledIconWrapper>
      )
    })

  return (
    <StyledPageContainer>
      <Head>
        <title>Rescue Dog Moms</title>
        <meta name="description" content="A parenting podcast" />
        <link rel="icon" href="/RDM_LOGO_2.png" />
      </Head>
      <StyledPageHeader>
        <Image src="/RDM_LOGO_2.png" alt="Rescue Dog Moms" width={476} height={600} />
        <h1>Rescue Dog Moms</h1>
        <h3>A parenting podcast</h3>
      </StyledPageHeader>
      <StyledMain>
        <StyledIconsWrapper>
          {socialIcons}
        </StyledIconsWrapper>
        {episodeList}
      </StyledMain>
    </StyledPageContainer>
  )
}

export async function getStaticProps() {
  const episodes = await getEpisodeData()
    return {
      props: {
        episodes: formatEpisodeData(episodes)
      }
    }
}
