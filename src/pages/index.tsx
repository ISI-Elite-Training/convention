import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// import { AlternateNavbar } from '@/components/AlternateNavbar';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { LowerHero } from '@/components/LowerHero';
import { SpeakersSection } from '@/components/SpeakersSection';

import { CaseStudies } from '@/components/CaseStudies';
import { Box } from '@/system/box';
import { Section } from '@/system';
import { Heading } from '@/system/heading';
import { Container } from '@/system/container';
import { AtelierButton } from '@/system/custom/AtelierButton';
import { VideoComponent } from '@/components/VideoComponent';

import { styled } from 'stitches.config';
import conventionLogo from '@/public/logo/convention.svg';
import conventionVideo from '@/public/img/charlotte_skyline.gif';

const BackDrop = styled('div', {
  position: 'relative',
  minHeight: '100vh',
  minWidth: '100vw',
  backgroundColor: '$light50',
  background: '$light50',
  padding: '0',
  margin: '0',
  zIndex: '1',

  backdropFilter: 'saturate(180%) blur(22px)',
  WebkitBackdropFilter: 'saturate(180%) blur(22px)',
  // saturate: '200%',
});

const CenterContainer = styled('div', {
  minHeight: '100vh',
  bc: '$translucent',
  padding: '0 0.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  // zIndex: '20',
});

export default function Home() {
  return (
    <>
      <Box>
        <Head>
          <title>Convention 2022 - ISI® Elite Training</title>
        </Head>
        <Navbar />
        <BackDrop>
          <Image className="web_video" src={conventionVideo} objectFit="cover" layout="fill" alt="backgroundImage" />
          {/* <!-- <VideoComponent /> --> */}

          <CenterContainer>
            <Container size="3" css={{ zIndex: '9999', alignItems: 'center', textAlign: 'center' }}>
              <Image src={conventionLogo} width="450" height="170" alt="CONVENTION" />
              <Heading
                size="3"
                css={{ fontFamily: '$brynas', color: '$elite4', paddingTop: '0px', paddingBottom: '0px', '@sm': { fontSize: '22px' } }}
              >
                OCTOBER 14 - 16, 2022
              </Heading>
              <Heading
                size="1"
                css={{
                  color: '$elite4',
                  fontFamily: '$brynas',
                  fontWeight: '600',
                  paddingTop: '8px',
                  paddingBottom: '30px',
                  lineHeight: 'normal',

                  '@sm': {
                    paddingTop: '0',
                    fontSize: '14px',
                  },
                }}
              >
                CHARLOTTE, NC
              </Heading>
            </Container>
            <Container size="3">
              <Link href="https://www.eventbrite.com/e/342275965627" passHref target="_blank" rel="no refferrer">
                <AtelierButton color="elite">REGISTER NOW →</AtelierButton>
              </Link>
            </Container>
          </CenterContainer>
        </BackDrop>

        <Hero />
        <SpeakersSection />
        <LowerHero />

        <Footer />
      </Box>
    </>
  );
}
