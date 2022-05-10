import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { MarketingSection } from '@/components/MarketingSection';
import { Box } from '@/system/box';
import { Heading } from '@/system/heading';
import { Container } from '@/system/container';
import { AtelierButton } from '@/system/custom/AtelierButton';

import { styled } from 'stitches.config';
import conventionLogo from '@/public/logo/convention.svg';
import conventionBackdrop from '@/public/img/ConventionBackdrop.jpg';

const BackDrop = styled('div', {
  position: 'relative',
  minHeight: '100vh',
  minWidth: '100vw',
  // bc: '$translucent',
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
        <Navbar />
        <BackDrop>
          <Image src={conventionBackdrop} objectFit="cover" layout="fill" />
          <CenterContainer>
            <Container size="3" css={{ zIndex: '9999', alignItems: 'center', textAlign: 'center' }}>
              <Image src={conventionLogo} width="400" height="150" alt="CONVENTION" />
              <Heading size="2" css={{ color: '$slate2', paddingTop: '10px', paddingBottom: '20px' }}>
                AUGUST 08 | Charlotte, NC
              </Heading>
            </Container>
            <Container size="3">
              <Link href="https://eventbrite.com" passHref target="_blank" rel="no refferrer">
                <AtelierButton color="lime">Register Now</AtelierButton>
              </Link>
            </Container>
          </CenterContainer>
        </BackDrop>

        <Hero />
        <MarketingSection />
        <Footer />
      </Box>
    </>
  );
}
