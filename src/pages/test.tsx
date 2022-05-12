import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { MarketingSection } from '@/components/MarketingSection';
import { CaseStudies } from '@/components/CaseStudies';
import { Box } from '@/system/box';
import { Heading } from '@/system/heading';
import { Container } from '@/system/container';
import { AtelierButton } from '@/system/custom/AtelierButton';
import { VideoComponent } from '@/components/VideoComponent';
import { SpeakersSection } from '@/components/SpeakersSection';

import { styled } from 'stitches.config';
import conventionLogo from '@/public/logo/convention.svg';
import conventionVideo from '@/public/img/WebVideo.gif';

const BackDrop = styled('div', {
  position: 'relative',
  minHeight: '100vh',
  minWidth: '100vw',
  backgroundColor: '$gray12',
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

export default function Test() {
  return (
    <>
      <Box>
        <Navbar />
        <BackDrop>
          <Image className="web_video" src={conventionVideo} objectFit="cover" layout="fill" alt="backgroundImage" />

          <CenterContainer>
            <Container size="3" css={{ zIndex: '9999', alignItems: 'center', textAlign: 'center' }}>
              <Image src={conventionLogo} width="400" height="150" alt="CONVENTION" />
              <Heading size="3" css={{ color: '$slate2', paddingTop: '10px', paddingBottom: '0px' }}>
                AUGUST 08, 2022
              </Heading>
              <Heading
                size="1"
                css={{
                  //fontSize: '14px',
                  fontWeight: '700',
                  color: '$slate2',
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
                <AtelierButton color="lime">Register Now →</AtelierButton>
              </Link>
            </Container>
          </CenterContainer>
        </BackDrop>

        <Hero />
        <SpeakersSection />
        <Footer />
      </Box>
    </>
  );
}
