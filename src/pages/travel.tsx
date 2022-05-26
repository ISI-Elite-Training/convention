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
  backgroundColor: '$sage3',
  padding: '0',
  margin: '0',
  zIndex: '1',

  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(22px)',
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

export default function Travel() {
  return (
    <>
      <Box css={{ bc: '$elite2' }}>
        <Head>
          <title>Convention 2022 - ISI® Elite Training</title>
        </Head>
        <Navbar />

        <CenterContainer>
          <Hero />
        </CenterContainer>

        <Footer />
      </Box>
    </>
  );
}
