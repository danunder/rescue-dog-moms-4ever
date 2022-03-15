import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { getEpisodeData, formatEpisodeData } from '../lib/episodes'
import { Episodes } from '../components/episodes'
import { Modal } from '../components/modal'
import { SocialLinks } from '../components/socials'
import { Player } from '../components/player'
import {
  StyledPageContainer,
  StyledPageHeader,
  StyledMain
} from '../styles/index'

export default function Home({ episodes }) {

  const [ selected, setSelected ] = useState(episodes[0].id)
  const [ selectedEpisode, setSelectedEpisode ] = useState(episodes[0])
  const [ show, setShow ] = useState(true)

  useEffect(() => {
    setShow(false)
  }, [])
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

  return (
    <StyledPageContainer>
      <Head>
        <title>Rescue Dog Moms</title>
        <meta name="description" content="A parenting podcast" />
      </Head>
      <StyledPageHeader>
        <Image src="/RDM_LOGO_2.png" alt="Rescue Dog Moms" width={476} height={600} />
        <h1>Rescue Dog Moms</h1>
        <h3>A parenting podcast</h3>
      </StyledPageHeader>
      <StyledMain>
        <SocialLinks/>
        { selectedEpisode &&
          <Player episode={selectedEpisode} />
        }
        { show &&
          <Modal
            episode={selectedEpisode}
            onClose={() => setShow(false)}
          />
        }
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
