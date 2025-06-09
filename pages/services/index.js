import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import Image from 'next/image'

import { About } from '../../components/about'
import {
  StyledPageContainer,
  StyledPageHeader,
  StyledMain,
} from '../../styles/index'

export default function Services() {

  const StyledLogoWrapper = styled.div({
    position: 'relative',
    img: {
      borderRadius: '10px',
      maxWidth: '500px',
      maxHeight: '250px',
    },
    '@media (max-width: 600px)': {
      img: {
        maxWidth: '300px',
        maxHeight: '150px'
      }
    }
  })


  return (
    <StyledPageContainer>
      <Head>
        <title>Rescue Dog Love Walking & Boarding</title>
        <meta name="description" content="A Rescue Community Podcast and Canine professional services" />
      </Head>
      <StyledPageHeader>
        <StyledLogoWrapper>
          <Image src="/services.png" alt="Rescue Dog Love Walking and Boarding logo" width={1080} height={531} style={{ objectFit: 'contain' }} />
        </StyledLogoWrapper>        
      </StyledPageHeader>
      
      <StyledMain>
      <About />
      </StyledMain>
    </StyledPageContainer>
  )
}


