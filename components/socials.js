import Image from 'next/image'
import styled from 'styled-components'
import { socials } from '../lib/links'

const StyledIconsWrapper = styled.span({
  height: '1rem',
  marginTop: '0.75rem',
  marginBottom: '4rem'
})
const StyledIconWrapper = styled.a({
  margin: '1rem'
})

export const SocialLinks = () => {
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
    <StyledIconsWrapper>
     {socialIcons}
    </StyledIconsWrapper>
  )
}

