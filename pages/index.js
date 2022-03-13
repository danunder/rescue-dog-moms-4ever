import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { getEpisodeData, formatEpisodeData } from '../lib/episodes'
import { socials } from '../lib/links'
import {
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
} from '../styles/index'

export default function Home({ episodes }) {

  const [ show, setShow ] = useState(true)
  useEffect(() => setShow(false), [])
  useEffect(() => {
    const body = document.querySelector("body")
    body.style.overflow = show ? "hidden" : "auto"
  }, [show])

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
          <StyledModal onClick={e => e.stopPropagation()}>
            <h2>{selectedEpisodeTitle}</h2>
            <h3>{selectedEpisodePublishedDate}</h3>
            <div dangerouslySetInnerHTML={selectedEpisodeDescription} />
            <StyledCloseButton onClick={() => setShow(false)}>X</StyledCloseButton>
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
