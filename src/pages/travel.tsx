import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// import { AlternateNavbar } from '@/components/AlternateNavbar';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { LowerHero } from '@/components/LowerHero';
import { SpeakersSection } from '@/components/SpeakersSection';
import { Caption } from '@/components/Caption';
import { CaseStudies } from '@/components/CaseStudies';
import { Box } from '@/system/box';
import { Section } from '@/system';
import { Heading, Paragraph, Flex } from '@/system';
import { Container } from '@/system/container';
import { ExternalLinkIcon, RocketIcon, CaretRightIcon } from '@radix-ui/react-icons';
import { AtelierButton } from '@/system/custom/AtelierButton';
import { ImageSlider } from '@/components/ImageSlider';

import canopyImage from '@/public/img/canopy.jpg';

import { styled } from 'stitches.config';

const BackDrop = styled('div', {
  position: 'relative',
  minHeight: 'calc(100vh - 50px)',
  // minHeight: '100vh',
  // minWidth: '100vw',
  backgroundColor: '$elite2',
  padding: '0',
  margin: '0',
  zIndex: '1',

  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(22px)',
  // saturate: '200%',
});

const CenterContainer = styled('div', {
  bc: '$translucent',
  padding: '0 0.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'auto',
  // minHeight: 'calc(100vh - 50px)',
});

export default function Travel() {
  return (
    <>
      <Box css={{ bc: '$elite2' }}>
        <Head>
          <title>Convention 2022 - ISI® Elite Training</title>
        </Head>
        <Navbar />

        <BackDrop>
          <CenterContainer>
            <Section
              size="3"
              css={{
                margin: 'auto',
                textAlign: 'center',
                paddingTop: '150px',
                paddingBottom: '80px',
                '@sm': {
                  paddingTop: '100px',
                  paddingBottom: '60px',
                },
              }}
            >
              <Heading
                size="4"
                css={{
                  color: '$elite4',
                  fontFamily: '$brynasBoldCond',
                  fontWeight: '600',
                  letterSpacing: 'normal',
                  lineHeight: '2',
                  paddingBottom: '10px',
                  fontSize: '100px',

                  '@sm': {
                    fontFamily: '$brynasBoldCond',
                    fontSize: '80px',
                    lineHeight: '1',
                  },
                  '@xs': {
                    fontFamily: '$brynasBoldCond',
                    fontSize: '60px',
                  },
                }}
              >
                BOOK YOUR STAY!
              </Heading>

              <Paragraph
                size="2"
                css={{
                  paddingLeft: '0px',
                  paddingRight: '0px',
                  paddingTop: '20px',
                  textAlign: 'center',
                  fontSize: '20px',
                  fontWeight: '700',
                  lineHeight: '1.2',
                  color: '$elite4',
                  mb: '30px',
                  '@sm': {
                    fontSize: '13px',
                    ta: 'center',
                    mb: '30px',
                    lineHeight: '1.2',
                    paddingLeft: '0px',
                    paddingRight: '0px',
                    paddingTop: '0',
                  },
                }}
              >
                Book your stay @ <u>Canopy</u> by Hilton Charlotte Southpark.
                <br />
                Use promo code <strong>“ISI”</strong> when checking out for a discounted rate of <strong>$139</strong> per night.
              </Paragraph>

              <Flex
                css={{
                  backgroundColor: '$transparent',
                  zIndex: '2',
                  justifyContent: 'center',
                  paddingBottom: '40px',
                  '@sm': {
                    paddingBottom: '30px',
                  },
                }}
              >
                <Link
                  href="https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=CLTPYPY&arrivalDate=2022-10-14&departureDate=2022-10-16&room1NumAdults=1&cid=OM%2CWW%2CHILTONLINK%2CEN%2CDirectLink"
                  passHref
                >
                  <AtelierButton color="lime">
                    BOOK NOW
                    <Box css={{ marginLeft: '2px' }}>
                      <CaretRightIcon />
                    </Box>
                  </AtelierButton>
                </Link>
              </Flex>
            </Section>
          </CenterContainer>

          <Container size="3" css={{ paddingBottom: '24px', paddingLeft: '24px', paddingRight: '24px' }}>
            <Caption>View the Gallery ➔</Caption>
            <Box>
              <Link
                href="https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=CLTPYPY&arrivalDate=2022-10-14&departureDate=2022-10-16&room1NumAdults=1&cid=OM%2CWW%2CHILTONLINK%2CEN%2CDirectLink"
                passHref
              >
                <Paragraph size="1" css={{ fontSize: '14px', lineHeight: 'normal', fontWeight: '500', textDecoration: 'underline' }}>
                  4905 Barclay Downs Drive Charlotte, North Carolina 28210 USA
                </Paragraph>
              </Link>
            </Box>
          </Container>
          <Container
            size="3"
            css={{
              position: 'relative',
              overflowX: 'scroll',
              overflowY: 'hidden',
              WebkitOverflowScrolling: 'touch',
              MsOverflowStyle: 'none',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none',
              },

              // Add some padding so that logos aren't clipped when focused.
              py: '$3',
              my: '-$3',
            }}
          >
            <ImageSlider />
          </Container>
        </BackDrop>
        <Box css={{ position: 'fixed', bottom: '0' }}>
          <Footer />
        </Box>
      </Box>
    </>
  );
}
