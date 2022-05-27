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

import { ExternalLinkIcon, RocketIcon, CaretRightIcon } from '@radix-ui/react-icons';
import { AtelierButton } from '@/system/custom/AtelierButton';
import { GradientButton } from '@/system/custom/AtelierButton';
import { TimeCode } from '@/components/TimeCode';
// import tflLogo from '@/public/logo/train.svg';

// STITCHES STYLED
import { styled } from 'stitches.config';

export const LowerHero = () => {
  return (
    <>
      <Box css={{ backgroundColor: '$elite1' }}>
        <Section
          size="2"
          css={{
            backgroundColor: '$elite1',
          }}
        >
          <Container
            size="3"
            css={{
              backgroundColor: '$elite1',
              paddingTop: '50px',
              paddingBottom: '10px',
              paddingLeft: '0px',
              paddingRight: '0px',
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
                textAlign: 'center',
                alignItems: 'center',
                padding: '0',
                marginBottom: '0px',
                display: 'block',
              }}
            >
              <Heading
                size="4"
                css={{
                  color: '$elite4',
                  fontFamily: '$brynas',
                  fontWeight: '600',
                  letterSpacing: 'normal',
                  lineHeight: '1.5',
                  paddingBottom: '10px',

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
                TEAM ON THREE!
              </Heading>
            </Box>

            <Paragraph
              size="2"
              css={{
                padding: '0',
                textAlign: 'center',
                fontSize: '20px',
                fontWeight: '700',
                lineHeight: '1.2',
                color: '$white',
                mb: '30px',
                '@bp2': {
                  // mx: 250,
                  ta: 'center',
                  mb: '30px',
                  lineHeight: '1.2',
                },
                '@sm': {
                  fontSize: '16px',
                  ta: 'center',
                  mb: '30px',
                  lineHeight: '1.2',
                  paddingLeft: '20px',
                  paddingRight: '20px',
                },
              }}
            >
              Get ready to <em>Train for Life</em>©, see you in the Queen City!
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
              <Link href="https://www.eventbrite.com/e/342275965627" passHref>
                <AtelierButton color="white">
                  REGISTER NOW
                  <Box css={{ marginLeft: '4px' }}>
                    <CaretRightIcon />
                  </Box>
                </AtelierButton>
              </Link>
            </Flex>
          </Container>
        </Section>
      </Box>
    </>
  );
};
