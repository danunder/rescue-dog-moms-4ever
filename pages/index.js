import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { getEpisodeData, formatEpisodeData } from '../lib/episodes'
import { Episodes } from '../components/episodes'
import { Modal } from '../components/modal'
import { SocialLinks } from '../components/socials'
import { Player } from '../components/player'
import { About } from '../components/about'
import {
  StyledPageContainer,
  StyledPageHeader,
  StyledMain,
  StyledLink,
  StyledImageWrapper
} from '../styles/index'

export default function Home({ episodes }) {

  const [ selected, setSelected ] = useState(episodes[0].id)
  const [ selectedEpisode, setSelectedEpisode ] = useState(null)
  const [ show, setShow ] = useState(true)
  const [ playerEpisode, setPlayerEpisode ] = useState(episodes[0])
  const episodeLoaded = useRef(false)
  const player = useRef()

  useEffect(() => {
    setShow(false)
  }, [episodes])
  useEffect(() => {
    const body = document.querySelector("body")
    body.style.overflow = show ? "hidden" : "auto"
  }, [show])
  useEffect(() => {
    setSelectedEpisode(episodes.find((ep) => ep.id === selected))
  }, [episodes, selected])

  const handleEpisodeSelect = (id) => {
    setSelected(id)
    setShow(true)
  }
  const handlePlayerEpisodeSelect = () => {
    setShow(false)
    setPlayerEpisode(selectedEpisode)
  }

  let hasUsedPlayer = false

  useEffect(() => {
    if (episodeLoaded.current && !hasUsedPlayer) {
      setTimeout(() => player?.current?.scrollIntoView({ behavior: "smooth" }), 1)
    }
    hasUsedPlayer = true
    episodeLoaded.current = true
  }, [playerEpisode])


  return (
    <StyledPageContainer>
      <Head>
        <title>Rescue Dog Love</title>
        <meta name="description" content="A Rescue Community Podcast and Canine professional services" />
      </Head>
      <StyledPageHeader>
        <StyledImageWrapper>
          <Image src="/RDL_LOGO.png" alt="Rescue Dog Love logo" width={1080} height={1177} style={{ objectFit: 'contain'}} />
        </StyledImageWrapper>
        <h1 style={{ padding: '16px' }}>Rescue Dog Love</h1>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', justifyItems: 'center', alignItems: 'center' }}>
        <StyledLink
          href="/services"
          target="_blank"
          >
            <h3>Services</h3>
          </StyledLink><StyledLink
          href="#episodes"
          >
            <h3>Episodes</h3>
          </StyledLink>
          <StyledLink
          href="https://www.buymeacoffee.com/rescuedoglove"
          rel="noopener noreferrer"
          target="_blank"
          >
            <h3>Support the podcast</h3>
          </StyledLink>
          </div>
      </StyledPageHeader>
      <StyledMain>
        <SocialLinks/>
        <div ref={player}>
        <Player
          episode={playerEpisode}
        />
        </div>
        { selectedEpisode && show &&
          <Modal
            episode={selectedEpisode}
            onClose={() => setShow(false)}
            onPlayerEpisodeSelect={() => handlePlayerEpisodeSelect}
          />
        }
        <div id="episodes">
        <Episodes
          episodes={episodes}
          onSelect={handleEpisodeSelect}
        />
        </div>
      </StyledMain>
    </StyledPageContainer>
  )
}

export async function getStaticProps() {
  const episodes = await getEpisodeData()
    return {
      props: {
        episodes: formatEpisodeData(episodes)
      },
      revalidate: 600
    }
}
