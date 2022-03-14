import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { getEpisodeData, formatEpisodeData } from '../lib/episodes'
import { socials } from '../lib/links'
import { Episodes } from '../components/episodes'
import { Modal } from '../components/modal'
import {
  StyledPageContainer,
  StyledPageHeader,
  StyledMain,
  StyledIconsWrapper,
  StyledIconWrapper,
} from '../styles/index'

export default function Home({ episodes }) {
  const latest = episodes[0]
  const [ selected, setSelected ] = useState(latest.id)
  const selectedEpisode = episodes.find((ep) => ep.id === selected)

  const [ show, setShow ] = useState(true)
  useEffect(() => setShow(false), [])
  useEffect(() => {
    const body = document.querySelector("body")
    body.style.overflow = show ? "hidden" : "auto"
  }, [show])

  const handleEpisodeSelect = (id) => {
    setSelected(id)
    setShow(true)
  }

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
        <Modal
          episode={selectedEpisode}
          onClose={() => setShow(false)}
        />
      }
        <StyledIconsWrapper>
          {socialIcons}
        </StyledIconsWrapper>
        <Episodes
          episodes={episodes}
          onSelect={handleEpisodeSelect}
        />
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
