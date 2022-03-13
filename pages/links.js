import Head from 'next/head'
import { socials } from '../lib/links'
import Image from 'next/image'
import {
  StyledPageContainer,
  StyledPageHeader,
  StyledMain,
  StyledLinkWrapper,
  StyledLink
} from '../styles/links'

export default function Links () {
  const linkList = socials.map((link) => {
    const { service, url, linkText } = link
    return (
      <StyledLinkWrapper href={url} rel="noopener noreferrer" target="_blank" key={service}>
        <StyledLink>
          <h2>{linkText}</h2>
        </StyledLink>
      </StyledLinkWrapper>
    )
  })

  return (
    <StyledPageContainer>
      <Head>
        <title>Rescue Dog Moms Links</title>
        <meta name="description" content="Links to our content" />
        <link rel="icon" href="/RDM_LOGO_2.png" />
      </Head>
      <StyledPageHeader>
        <Image src="/RDM_LOGO_2.png" alt="Rescue Dog Moms" width={179} height={225} />
        <h1>Rescue Dog Moms Podcast</h1>
        <h3>Listen to our latest episode!</h3>
      </StyledPageHeader>
      <StyledMain>
        {linkList}
      </StyledMain>
    </StyledPageContainer>

  )
}
