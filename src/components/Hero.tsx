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
import { FancyBackground } from '@/components/FancyBackground';

import { ExternalLinkIcon, RocketIcon } from '@radix-ui/react-icons';
import { AtelierButton } from '@/system/custom/AtelierButton';
import { GradientButton } from '@/system/custom/AtelierButton';
import { TimeCode } from '@/components/TimeCode';

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

export const Hero = () => {
  return (
    <FancyBackground>
      <Section
        size="3"
        css={{
          backgroundColor: '$transparent',
        }}
      >
        <Container
          size="3"
          css={{
            backgroundColor: '$transparent',
            paddingTop: '140px',
            paddingBottom: '60px',
            paddingLeft: '150px',
            paddingRight: '150px',
            '@sm': {
              paddingTop: '140px',
              paddingBottom: '100px',
              paddingLeft: '0px',
              paddingRight: '40px',
            },
          }}
        >
          {/* <!-- Header or Logo (Large) --> */}
          <Heading
            size="4"
            css={{
              fontFamily: '$inter',
              fontWeight: '900',
              fontSize: '70px',
              mb: '$3',
              textAlign: 'center',
              '@sm': {
                textAlign: 'left',
                fontSize: '44px',
              },
            }}
          >
            Train for Life.
          </Heading>

          <Paragraph
            size="2"
            css={{
              padding: '0',
              textAlign: 'center',
              fontSize: '18px',
              fontWeight: '500',
              lineHeight: '1.4',
              color: '$gray11',
              mb: '30px',
              '@sm': {
                textAlign: 'left',
                fontSize: '16px',
              },
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
            Join us for our inaugural ISI® Elite Training Annual Convention as we come together from coast to coast and recognize the
            incredible individuals within our brand, celebrate our accomplishments, learn from experts in the field, and cast our vision to
            the future.
          </Paragraph>

          <Flex
            css={{
              backgroundColor: '$transparent',
              zIndex: '2',
              '@bp2': {
                jc: 'center',
                my: '$6',
              },
            }}
          >
            <Link href="/shop" passHref>
              <AtelierButton color="darkGray">
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
          </Flex>
        </Container>
      </Section>
    </FancyBackground>
  );
};
