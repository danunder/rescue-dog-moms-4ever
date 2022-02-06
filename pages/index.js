import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getEpisodeData, formatEpisodeData } from '../lib/episodes'
import { socials } from '../lib/links'


export default function Home({ episodes }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rescue Dog Moms</title>
        <meta name="description" content="A 'pawrenting' podcast" />
        <link rel="icon" href="/RDM-logo.png" />
      </Head>

      <main className={styles.main}>
        {/* HEADER */}
        <Image src="/RDM-logo.png" alt="Rescue Dog Moms" width={800} height={800} />
        {/* SOCIAL ICON LINKS */}
        <span className={styles.icons}>
          {socials.map(({ service, icon, link }, i) => (
              <a className={styles.icon} href={link} rel="noopener noreferrer" target="_blank" key={i}>
                <Image src={icon} alt={`${service} logo`} width={50} height={50} />
              </a>
          ))}
        </span>
        {/* EPISODES */}
        {episodes.map(({
          id,
          title,
          description,
          published_at,
          artwork_url,
          audio_url
        }) =>(
            <div key={id} className={styles.card}>
              {/* <Image src={artwork_url} alt="Episode Artwork" width={400} height={400}/> */}
              <div>
                <h2>{title}</h2>
                <h3>{published_at}</h3>
                <audio controls>
                  <source src={audio_url} type="audio/mpeg" />
                </audio>
              </div>
            </div>
        ))}
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
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
