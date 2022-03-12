import React, { useState, useEffect } from 'react'
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
  transition: 'color 0.15s ease, border 0.15s ease, text-shadow 0.15s ease, box-shadow 0.15s ease, height 0.15s ease, width 0.15s ease',
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
  zIndex: '1',
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100vh',
  width: '100vw',
  background: 'rgba(0,0,0,0.5)'
})

const StyledModal = styled.div({
  zIndex: '2',
  position: 'fixed',
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
  padding: '1rem'
})
const StyledButton = styled.button({

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

  const [ show, setShow ] = useState(true)
  useEffect(() => setShow(false), [])

  const latest = episodes[0]
  const [ selected, setSelected ] = useState(latest.id)
  const selectedEpisode = episodes.find((ep) => ep.id === selected)
  const {
    title: selectedEpisodeTitle,
    description: selectedEpisodeDescription,
    published_at: selectedEpisodePublishedDate
  } = selectedEpisode

  const handleEpisodeSelect = (id) => {
    setSelected(id)
    setShow(true)
  }
  const episodeList = episodes.map(({
    id,
    title,
    artwork_url
  }) =>(
      <StyledEpisode key={id} onClick={() => handleEpisodeSelect(id)}>
        <h2>{title}</h2>
        <Image src={artwork_url} alt={`episode ${id} artwork`} width={350} height={350}/>
      </StyledEpisode>
  ))
  const socialIcons = socials
    .filter(({ makeIconLink }) => makeIconLink)
    .map(({ service, icon, url }, i) => {
      return (
        <StyledIconWrapper
          href={url}
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
      { show &&
        <StyledModalWrapper onClick={() => setShow(false)}>
          <StyledModal >
            <h2>{selectedEpisodeTitle}</h2>
            <h3>{selectedEpisodePublishedDate}</h3>
            <div dangerouslySetInnerHTML={selectedEpisodeDescription} />
          </StyledModal>
        </StyledModalWrapper>
      }
        <StyledIconsWrapper>
          {socialIcons}
        </StyledIconsWrapper>
        <StyledEpisodeContainer>
          {episodeList}
        </StyledEpisodeContainer>
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
