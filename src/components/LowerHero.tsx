import React from 'react';
import NextLink from 'next/link';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/system/section';
import { Container } from '@/system/container';
import { Box } from '@/system/box';
import { Heading } from '@/system/heading';
import { Flex } from '@/system/flex';
import { Paragraph } from '@/system/paragraph';

import { ExternalLinkIcon, RocketIcon } from '@radix-ui/react-icons';
import { AtelierButton } from '@/system/custom/AtelierButton';
import { GradientButton } from '@/system/custom/AtelierButton';
import { TimeCode } from '@/components/TimeCode';
// import tflLogo from '@/public/logo/train.svg';

// STITCHES STYLED
import { styled } from 'stitches.config';

const TimeDisplay = styled('div', {
  position: 'relative',
  alignItems: 'center',
  textAlign: 'center',
  margin: 'auto',
  paddingBottom: '20px',
  fontFamily: '$jetbrain',
  fontSize: '13px',
  fontWeight: '700',
  color: '$gray12',
  zIndex: '200',
  lineHeight: '1',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  '@sm': {
    alignItems: 'left',
    textAlign: 'left',
  },
  '&:hover': {
    cursor: 'auto',
  },
});

export const LowerHero = () => {
  return (
    <>
      <Section
        size="2"
        css={{
          backgroundColor: '$transparent',
        }}
      >
        <Container
          size="3"
          css={{
            backgroundColor: '$transparent',
            paddingTop: '50px',
            paddingBottom: '50px',
            paddingLeft: '150px',
            paddingRight: '150px',
            '@sm': {
              paddingTop: '20px',
              paddingBottom: '30px',
              paddingLeft: '0px',
              paddingRight: '0px',
            },
          }}
        >
          <Box
            css={{
              margin: 'auto',
              marginLeft: '-4px',
              textAlign: 'center',
              alignItems: 'center',
              padding: '0',
              marginBottom: '0px',
              display: 'block',
            }}
          >
            <Heading size="4" css={{ fontFamily: '$brynas', fontWeight: '900', letterSpacing: 'normal' }}>
              ARE YOU READY?
            </Heading>
          </Box>

          <Paragraph
            size="2"
            css={{
              padding: '0',
              textAlign: 'center',
              fontSize: '18px',
              fontWeight: '500',
              lineHeight: '1.4',
              color: '$gray9',
              mb: '30px',
              '@bp2': {
                // mx: 250,
                ta: 'center',
                mb: '30px',
                lineHeight: '1.3',
              },
              '@bp3': {
                //  mx: 300,
                ta: 'center',
                mb: '30px',
                lineHeight: '1.3',
              },
            }}
          >
            Join us.
          </Paragraph>

          <Box
            css={{
              margin: 'auto',
              marginLeft: '-4px',
              textAlign: 'center',
              alignItems: 'center',
              padding: '0',
              marginBottom: '0px',
              display: 'block',
            }}
          >
            <Link href="/shop" passHref>
              <AtelierButton color="lime">
                <span>Buy tickets now</span>
                {` `}
              </AtelierButton>
            </Link>
            {/* <!--
            <Link href="https://github.com/AtelierDesign/atelier" passHref>
              <AtelierButton color="ghost">
                <span>Learn more →</span>
              </AtelierButton>
            </Link>
            --> */}
          </Box>
        </Container>
      </Section>
    </>
  );
};
