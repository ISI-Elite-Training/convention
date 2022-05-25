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
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { AtelierButton } from '@/system/custom/AtelierButton';
import { GradientButton } from '@/system/custom/AtelierButton';
import { TimeCode } from '@/components/TimeCode';
import tflLogo from '@/public/logo/train.svg';
import tflLogo2 from '@/public/logo/train.svg';

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
              '@xs': {
                display: 'none !important',
              },
              '@sm': {
                display: 'none !important',
              },
            }}
          >
            <Image src={tflLogo} width="350px" height="100px" alt="Train for Life." />
          </Box>

          <Box
            css={{
              display: 'none',
              margin: 'auto',
              marginLeft: '-4px',
              textAlign: 'center',
              alignItems: 'center',
              padding: '0',
              marginBottom: '0px',
              '@xs': {
                display: 'block !important',
                textAlign: 'left',
                alignItems: 'left',
              },
              '@sm': {
                display: 'block !important',
                textAlign: 'left',
                alignItems: 'left',
              },
            }}
          >
            <Image src={tflLogo2} width="280px" height="80px" alt="Train for Life." />
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
            Join us for our ISI® Elite Training Annual Convention as we come together from coast to coast and recognize the incredible
            individuals within our brand, celebrate our accomplishments, learn from experts in the field, and cast our vision to the future.
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
              <AtelierButton color="lime">
                AGENDA {` `}
                {` `}
                <ExternalLinkIcon />
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
