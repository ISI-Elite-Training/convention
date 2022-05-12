import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
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
import conventionVideo from '@/public/img/WebVideo.gif';

const BackDrop = styled('div', {
  position: 'relative',
  minHeight: '100vh',
  minWidth: '100vw',
  backgroundColor: '$sage3',
  // background: `url('https://spaces.isielite.space/IMAGES/ConventionBranding.jpg') no-repeat center center fixed`,
  padding: '0',
  margin: '0',
  zIndex: '1',
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
  zIndex: '20',
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

          <CenterContainer>
            <Container size="3" css={{ zIndex: '9999', alignItems: 'center', textAlign: 'center' }}>
              <Image src={conventionLogo} width="450" height="170" alt="CONVENTION" />
              <Heading size="3" css={{ color: '$gray12', paddingTop: '10px', paddingBottom: '0px' }}>
                AUGUST 08, 2022
              </Heading>
              <Heading
                size="1"
                css={{
                  //fontSize: '14px',
                  fontWeight: '700',
                  color: '$gray12',
                  paddingTop: '8px',
                  paddingBottom: '30px',
                  lineHeight: 'normal',
                  textTransform: 'uppercase',
                }}
              >
                Charlotte, NC
              </Heading>
            </Container>
            <Container size="3">
              <Link href="https://eventbrite.com" passHref target="_blank" rel="no refferrer">
                <AtelierButton color="darkGray">Register Now →</AtelierButton>
              </Link>
            </Container>
          </CenterContainer>
        </BackDrop>

        <Hero />
        <SpeakersSection />
        <Section size="3"></Section>
        <Footer />
      </Box>
    </>
  );
}
