import React from 'react';
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
import { Heading, Paragraph, Flex, Text } from '@/system';
import { Container } from '@/system/container';
import { ExternalLinkIcon, RocketIcon, CaretRightIcon, CopyIcon, CheckIcon } from '@radix-ui/react-icons';
import { AtelierButton } from '@/system/custom/AtelierButton';
import { ImageSlider } from '@/components/ImageSlider';
import { IconButton } from '@/system/custom/IconButton';

import copy from 'copy-to-clipboard';

import canopyImage from '@/public/img/canopy.jpg';

import { styled } from 'stitches.config';

const BackDrop = styled('div', {
  position: 'relative',
  //minHeight: 'calc(100vh - 50px)',
  minHeight: '100vh',
  // minWidth: '100vw',
  backgroundColor: '$elite2',
  padding: '0',
  margin: '0',
  zIndex: '1',
  paddingBottom: '100px',

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
  const [hasCopied, setHasCopied] = React.useState(false);
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
                  '@md': {
                    fontFamily: '$brynasBoldCond',
                    fontSize: '80px',
                    lineHeight: '1',
                  },
                  '@sm': {
                    fontFamily: '$brynasBoldCond',
                    fontSize: '80px',
                    lineHeight: '1',
                  },
                  '@xs': {
                    fontFamily: '$brynasBoldCond',
                    fontSize: '56px',
                  },
                }}
              >
                BOOK YOUR STAY!
              </Heading>

              <Paragraph
                size="2"
                css={{
                  paddingTop: '20px',
                  textAlign: 'center',
                  fontSize: '20px',
                  fontWeight: '700',
                  lineHeight: '1.2',
                  color: '$elite4',
                  mb: '30px',
                  '@xl': {
                    paddingLeft: '600px',
                    paddingRight: '600px',
                  },
                  '@lg': {
                    paddingLeft: '350px',
                    paddingRight: '350px',
                  },
                  '@md': {
                    lineHeight: '1.2',
                    paddingLeft: '120px',
                    paddingRight: '120px',
                  },
                  '@sm': {
                    fontSize: '15px',
                    fontWeight: '600',
                    ta: 'center',
                    mb: '30px',
                    lineHeight: '1.2',
                    paddingLeft: '0px',
                    paddingRight: '0px',
                    paddingTop: '0',
                  },
                  '@xs': {
                    fontSize: '15px',
                    fontWeight: '600',
                    ta: 'center',
                    mb: '30px',
                    lineHeight: '1.2',
                    paddingLeft: '0px',
                    paddingRight: '0px',
                    paddingTop: '0',
                  },
                }}
              >
                Book your stay @ <u>Canopy</u> by Hilton Charlotte Southpark. Use promo code <strong>“ISI”</strong> when checking out for a
                discounted rate of <strong>$139</strong> per night.
              </Paragraph>

              <Flex
                css={{
                  backgroundColor: '$transparent',
                  zIndex: '2',
                  justifyContent: 'center',
                  paddingBottom: '0px',
                  '@sm': {
                    paddingBottom: '0px',
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

              <Container
                size="1"
                css={{
                  paddingTop: '0',
                  alignItems: 'center',
                  margin: 'auto',
                  my: '$6',
                  position: 'relative',
                  zIndex: '1',
                  '@bp2': { my: '$8' },
                }}
              >
                <Flex
                  css={{
                    maxWidth: '100%',
                    boxShadow: 'inset 0 0 0 2px $colors$gray8',
                    borderRadius: '14px',
                    fontFamily: '$inter',
                    fontWeight: '600',
                    fontSize: '14px',
                    lineHeight: 1,
                    ai: 'center',
                    height: '$7',
                    color: '$elite4',
                    backgroundColor: 'rgba(0,0,0,.01)',
                    px: '$4',
                    jc: 'space-between',
                  }}
                >
                  <Box>ISI</Box>

                  <IconButton
                    size="1"
                    css={{ color: '$slate11', mr: '-$1' }}
                    aria-label="Copy the install snippet to Clipboard"
                    onClick={() => {
                      copy('npm install @stitches/react');
                      setHasCopied(true);
                    }}
                  >
                    {hasCopied ? <CheckIcon /> : <CopyIcon />}
                  </IconButton>
                </Flex>
              </Container>

              <Heading size="1" css={{ fontSize: '16px', fontWeight: 'bold', color: '$elite4' }}>
                *PROMO CODE “ISI”
              </Heading>
              <Text size="1" css={{ color: '$gray9' }}>
                Required at checkout
              </Text>
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
              paddingBottom: '80px',
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

          <Container size="3" css={{ paddingTop: '44px', paddingLeft: '24px', paddingRight: '24px' }}>
            <Box>
              <Link
                href="https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=CLTPYPY&arrivalDate=2022-10-14&departureDate=2022-10-16&room1NumAdults=1&cid=OM%2CWW%2CHILTONLINK%2CEN%2CDirectLink"
                passHref
              >
                <Paragraph size="1" css={{ fontSize: '18px', lineHeight: 'normal', fontWeight: '700', textDecoration: 'underline' }}>
                  Book Now ➔
                </Paragraph>
              </Link>
            </Box>
          </Container>
        </BackDrop>

        <Footer />
      </Box>
    </>
  );
}
