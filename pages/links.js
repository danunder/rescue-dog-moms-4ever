import Head from 'next/head'
import { socials } from '../lib/links'
import Image from 'next/image'
import {
  StyledPageContainer,
  StyledPageHeader,
  StyledMain,
  StyledLinkWrapper,
  StyledLink,
  StyledIconWrapper
} from '../styles/links'

export default function Links () {
  const linkList = socials.map((link) => {
    const { service, icon, url, linkText } = link
    return (
      <StyledLinkWrapper href={url} rel="noopener noreferrer" target="_blank" key={service}>
        <StyledLink>
        {icon && (
            <StyledIconWrapper>
              <Image
                layout={'fixed'}
                src={icon}
                alt={`${service} logo`}
                height={15}
                width={15}
            />
          </StyledIconWrapper>
          )}
          <h2>{linkText}</h2>
          {icon && (
            <StyledIconWrapper>
              <Image
                layout={'fixed'}
                src={icon}
                alt={`${service} logo`}
                height={15}
                width={15}
              />
          </StyledIconWrapper>
          )}
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
