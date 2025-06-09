import Image from 'next/image'
import styled from 'styled-components'
import { StyledLink, StyledImageWrapper } from '../styles/index'

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',

  maxWidth: '600px',
  alignItems: 'center',
  
})

const ImageContainer = styled.div({
  margin: '1.5rem 0',
  position: 'relative',
  width: '100%',
  maxWidth: '800px'
})

const Heading = styled.h2({
  marginTop: '1.5rem',
  marginBottom: '0.5rem',
  fontWeight: 'bold'
})

const Paragraph = styled.p({
  marginBottom: '0.5rem',
  lineHeight: '1.6'
})

const ItalicParagraph = styled(Paragraph)({
  fontStyle: 'italic'
})

const Link = styled.a({
  color: '#0070f3',
  textDecoration: 'underline',
  '&:hover': {
    textDecoration: 'none'
  }
})

const ServiceSection = styled.div({
  marginBottom: '2rem'
})

const ServiceHeading = styled.h3({
  marginTop: '1rem',
  marginBottom: '0.5rem',
  fontWeight: 'bold'
})

const ServiceLocation = styled.p({
  fontStyle: 'italic',
  marginBottom: '0.5rem'
})

const PriceTable = styled.table({
  width: '100%',
  maxWidth: '500px',
  borderCollapse: 'collapse',
  marginBottom: '1rem'
})

const TableRow = styled.tr({
  '&:nth-child(odd)': {
    backgroundColor: '#f8f8f8'
  }
})

const TableCell = styled.td({
  padding: '0.5rem',
  borderBottom: '1px solid #eaeaea'
})


export const About = () => {
  return (
    <Container>
      <ItalicParagraph>
        If you&apos;re looking for dog services, you&apos;ve come to the right place! Whether your dog LOOOOOVES a good walkie, or needs a pal to take care of them when you&apos;re on holiday, Yamini can do it all.
      </ItalicParagraph>
      <StyledLink
    
                href='https://docs.google.com/forms/d/e/1FAIpQLSe2IhobMJevstO-nye1XTTkhj-KeLyUgK8KwnyvCzCjQphlBQ/viewform'
      
      
                
                rel="noopener noreferrer"
                target="_blank"
                >
                  <h3>BOOK A COMPLIMENTARY MEET AND GREET</h3>
                </StyledLink>
      <StyledImageWrapper>
        <Image 
          src="/YaminiAndQueenie.png" 
          alt="Yamini and Queenie" 
          style={{objectFit: 'contain'}}
          priority
        />
      </StyledImageWrapper>
      
      <Heading>ABOUT YAMINI</Heading>
      <Paragraph>
        Yamini has been working with dogs since 2019. Starting off dog sitting on Rover, they volunteered at many Toronto dog rescues as a foster and volunteer, climbing up to Foster Manager in 2022 at Fetch + Releash. She has fostered 10 dogs and cared for many more.
      </Paragraph>
      <Paragraph>
        She has been working as a dog professional since 2023. She is now taking clients in the Annex/Yorkville area for dog walking and continuing to sit dogs all across the GTA.
      </Paragraph>
      
      <Heading>ABOUT QUEENIE</Heading>
      <Paragraph>
        Queenie is a wonderful rescue dog from China who is a great companion for your pet on a guided walk or during a sit. Her favourite activities are napping and looking at squirrels.
      </Paragraph>
      <Paragraph>
        Please note that if your dog is not dog-friendly, she is happy to be left behind, whether napping at home or at her Dad&apos;s house!
      </Paragraph>
      
      <Heading>SERVICES + PRICES</Heading>
      <Paragraph>
        Insured via <Link href="https://profur.ca" target="_blank" rel="noopener noreferrer">ProFur</Link>. All prices below don&apos;t include HST
      </Paragraph>
      
      <ServiceSection>
        <ServiceHeading>DOG WALKING</ServiceHeading>
        <ServiceLocation>Annex/Yorkville</ServiceLocation>
        <PriceTable>
          <tbody>
            <TableRow>
              <TableCell>30m Walk</TableCell>
              <TableCell>25</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>45m Walk</TableCell>
              <TableCell>45</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2nd Dog (30m)</TableCell>
              <TableCell>20</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2nd Dog (45m)</TableCell>
              <TableCell>30</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Puppy rate</TableCell>
              <TableCell>10</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Weekends</TableCell>
              <TableCell>15</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Evenings</TableCell>
              <TableCell>10</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Holidays</TableCell>
              <TableCell>20</TableCell>
            </TableRow>
          </tbody>
        </PriceTable>
      </ServiceSection>
      
      <ServiceSection>
        <ServiceHeading>DOG BOARDING</ServiceHeading>
        <ServiceLocation>Annex/Yorkville</ServiceLocation>
        <PriceTable>
          <tbody>
            <TableRow>
              <TableCell>Base Rate</TableCell>
              <TableCell>70</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Late Pickup Fee</TableCell>
              <TableCell>45</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Additional Dog</TableCell>
              <TableCell>40</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Puppy Rate</TableCell>
              <TableCell>20</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>National Holidays</TableCell>
              <TableCell>30</TableCell>
            </TableRow>
          </tbody>
        </PriceTable>
      </ServiceSection>
      
      <ServiceSection>
        <ServiceHeading>HOUSESIT</ServiceHeading>
        <ServiceLocation>GTA</ServiceLocation>
        <PriceTable>
          <tbody>
            <TableRow>
              <TableCell>Base Rate</TableCell>
              <TableCell>90</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Late Pickup Fee</TableCell>
              <TableCell>65</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Additional Dog</TableCell>
              <TableCell>60</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Puppy Rate</TableCell>
              <TableCell>30</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>National Holidays</TableCell>
              <TableCell>40</TableCell>
            </TableRow>
          </tbody>
        </PriceTable>
      </ServiceSection>
      
      <ServiceSection>
        <ServiceHeading>DAYCARE</ServiceHeading>
        <ServiceLocation>GTA</ServiceLocation>
        <PriceTable>
          <tbody>
            <TableRow>
              <TableCell>4 hrs</TableCell>
              <TableCell>45</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>8 hrs</TableCell>
              <TableCell>55</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Puppy Rate</TableCell>
              <TableCell>10</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Evenings</TableCell>
              <TableCell>10</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Weekends</TableCell>
              <TableCell>15</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>National Holidays</TableCell>
              <TableCell>20</TableCell>
            </TableRow>
          </tbody>
        </PriceTable>
      </ServiceSection>
      
      <Heading>SERVICE AREA</Heading>
      <ImageContainer>
        <Image 
          src="/servicearea.png" 
          alt="Service Area Map" 
          layout="responsive"
          width={730} 
          height={652}
        />
      </ImageContainer>
      
      
    </Container>
  )
}