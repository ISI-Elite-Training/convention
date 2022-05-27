import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { Box, Grid, Text, Container, Flex, Heading, Section, Separator, Avatar, CardLight, CustomLink } from '@/system';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { MarketingButton } from '@/components/MarketingButton';
import { Caption } from '@/components/Caption';
import { CaseStudyLogo } from '@/components/CaseStudyLogo';
import { LogoLink } from '@/components/LogoLink';

import { styled } from 'stitches.config';

const SpeakerName = styled('div', {
  position: 'relative',
  paddingLeft: '35px',
  paddingRight: '20px',
  paddingTop: '15px',
  textAlign: 'left',
  zIndex: '700',
  fontSize: '28px',
  fontWeight: '600',
  fontFamily: '$inter',
  color: '$elite1',
  lineHeight: 'normal',
  letterSpacing: '-0.03em',
  textIndent: '-0.577em',
});

const SpeakerDescription = styled('div', {
  position: 'relative',
  paddingLeft: '27px',
  paddingRight: '20px',
  paddingTop: '10px',
  textAlign: 'left',
  zIndex: '500',
  fontSize: '12px',
  fontWeight: '600',
  fontFamily: '$inter',
  color: '$elite4',
  lineHeight: 'normal',
  letterSpacing: '-0.01em',
  textIndent: '-0.577em',
});

const SpeakerCard = styled('div', {
  zIndex: '4',
  appearance: 'none',
  border: '2px solid $gray11',
  borderRadius: '10px',
  boxSizing: 'border-box',
  font: 'inherit',
  lineHeight: '1',
  outline: 'none',
  padding: 0,
  textAlign: 'inherit',
  verticalAlign: 'middle',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

  backgroundColor: '$gray6',
  display: 'block',
  textDecoration: 'none',
  color: 'inherit',
  flexShrink: 0,
  position: 'relative',

  minHeight: '190px',
});

const TestimonialText = styled('p', {
  fontSize: '14px',
  fontWeight: '400',
  fontFamily: '$inter',
  color: '$gray10',
  lineHeight: 'normal',
  letterSpacing: '-0.01em',
  textIndent: '-0.577em',
  // fontVariantNumeric: 'normal',
  // hyphens: 'auto',
  '&::before': { content: '“', mr: '0.07em' },
  '&::after': { content: '”', ml: '0.07em' },
});

const Strong = styled(Text, {
  fontFamily: '$inter',
  fontWeight: '600 !important',
  color: '$white !important',
});

export const SpeakerCardFull = () => {
  return (
    <Section size="2" css={{ paddingBottom: '120px' }}>
      <Container size="3">
        <Box css={{ mb: '$5' }}>
          <Caption css={{ mb: '$2', color: '$gray7', fontWeight: '600' }}>Speaker Spotlight</Caption>
          <Heading as="h2" size="4" css={{ color: '$slate2', maxWidth: 700 }}>
            Meet Your Speakers.
          </Heading>
        </Box>

        <Grid columns={{ '@bp2': 3 }} gap="5" css={{ mb: '$6' }}>
          {/* <!-- ADAM RICE --> */}
          <SpeakerCard>
            <Box
              css={{
                padding: '0',
                margin: '0',
                backgroundColor: '$translucent',
                width: 'auto',
                height: 'auto',
                zIndex: '9999',
              }}
            >
              <SpeakerName>Adam Rice</SpeakerName>
              <SpeakerDescription>
                <Text id="person1" css={{ color: '$gray9', lineHeight: 1.5 }}>
                  Founder & CEO
                  <Strong>ISI® Elite Training</Strong>
                </Text>
              </SpeakerDescription>
            </Box>
            <Box
              css={{
                padding: '0',
                margin: '0',
                backgroundColor: '$translucent',
                width: 'auto',
                height: 'auto',
                zIndex: '1',
              }}
            >
              <Image className="speaker_card_image" src="/img/adam_rice.jpg" alt="AdamFull" objectFit="cover" layout="fill" />
            </Box>
          </SpeakerCard>
          {/* <!-- AMANDA HALL --> */}
          <SpeakerCard>
            <Box
              css={{
                padding: '0',
                margin: '0',
                backgroundColor: '$translucent',
                width: 'auto',
                height: 'auto',
                zIndex: '9999',
              }}
            >
              <SpeakerName>Amanda Hall</SpeakerName>
              <SpeakerDescription>
                <Text id="person2" css={{ color: '$gray9', lineHeight: 1.5 }}>
                  Chief Operating Officer
                  <Strong>ISI® Elite Training</Strong>
                </Text>
              </SpeakerDescription>
            </Box>
            <Box
              css={{
                padding: '0',
                margin: '0',
                backgroundColor: '$translucent',
                width: 'auto',
                height: 'auto',
                zIndex: '1',
              }}
            >
              <Image className="speaker_card_image" src="/img/amanda_hall.jpg" alt="AmandaFull" objectFit="cover" layout="fill" />
            </Box>
          </SpeakerCard>
          {/* <!-- GUEST --> */}
          <SpeakerCard>
            <Box
              css={{
                padding: '0',
                margin: '0',
                backgroundColor: '$translucent',
                width: 'auto',
                height: 'auto',
                zIndex: '9999',
              }}
            >
              <SpeakerName>Martin Rooney</SpeakerName>
              <SpeakerDescription>
                <Text id="person3" css={{ color: '$gray9', lineHeight: 1.5 }}>
                  Founder
                  <Strong>Training for Warriors</Strong>
                </Text>
              </SpeakerDescription>
            </Box>
            <Box
              css={{
                padding: '0',
                margin: '0',
                backgroundColor: '$translucent',
                width: 'auto',
                height: 'auto',
                zIndex: '1',
              }}
            >
              <Image className="speaker_card_image" src="/img/martin_full.png" alt="AdamFull" objectFit="cover" layout="fill" />
            </Box>
          </SpeakerCard>
        </Grid>

        <Text variant="gray" css={{ mb: '$3' }}>
          <NextLink href="/case-studies" passHref>
            <CustomLink variant="subtle" css={{ display: 'inline-flex', alignItems: 'center', color: '$gray7', fontWeight: '600' }}>
              Sponsors
              <ArrowRightIcon />
            </CustomLink>
          </NextLink>
        </Text>
      </Container>

      <Container
        size="3"
        css={{
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
        <Grid flow="column" align="center" justify="start" gap="6">
          <NextLink href="https://inbodyusa.com" passHref>
            <LogoLink>
              <CaseStudyLogo variant="InBody" width="125" />
            </LogoLink>
          </NextLink>

          {/* Horizontal scroll spacer */}
          <Box css={{ width: 1, height: 1 }} />
        </Grid>
      </Container>
    </Section>
  );
};
