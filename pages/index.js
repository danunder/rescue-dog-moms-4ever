import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
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

export default function Home({ episodes }) {

  const [ selected, setSelected ] = useState(episodes[0].id)

  const selectedEpisode = episodes.find(ep => ep.id === selected)
  const socialIcons = socials
    .filter(({ makeIconLink }) => makeIconLink)
    .map(({ service, icon, link }, i) => {
      return (
        <a
          className={styles.icon}
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
        </a>
      )
    })

  return (
    <StyledPageContainer>
      <Head>
        <title>Rescue Dog Moms</title>
        <meta name="description" content="A parenting podcast" />
        <link rel="icon" href="/RDM-logo.png" />
      </Head>

        {/* HEADER */}
      <StyledPageHeader>
        <Image src="/RDM_LOGO_2.png" alt="Rescue Dog Moms" width={714} height={900} />
        <h1>Rescue Dog Moms</h1>
        <h3>A parenting podcast</h3>
      </StyledPageHeader>
      <main className={styles.main}>

        {/* SOCIAL ICON LINKS */}
        <span className={styles.icons}>
          {socialIcons}
        </span>
        {/*HTML5 AUDIO PLAYER*/}

        {/* EPISODES */}
        {episodes.map(({
          id,
          title,
          description,
          published_at,
          artwork_url
        }) =>(
            <div key={id} className={styles.card}>
              <div>
                <h2>{title}</h2>
                <Image src={artwork_url} alt={`episode ${id} artwork`} width={500} height={500}/>
                <button onClick={() => setSelected(id)}>Listen to this episode</button>
              </div>
            </div>
        ))}
      </main>

      <footer className={styles.footer}>

      </footer>
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
