import React from 'react';
import NextLink from 'next/link';
import { Box, Grid, Text, Container, Flex, Heading, Section, Separator, Avatar, CardLight, CustomLink } from '@/system';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { MarketingButton } from '@/components/MarketingButton';
import { Caption } from '@/components/Caption';
import { CaseStudyLogo } from '@/components/CaseStudyLogo';
import { LogoLink } from '@/components/LogoLink';

import { styled } from 'stitches.config';

/*
const TestimonialText = styled(Text, {
  color: '$gray9',

  lineHeight: 'normal',
  letterSpacing: '-0.01em',
  textIndent: '-0.577em',
  // fontVariantNumeric: 'normal',
  // hyphens: 'auto',
  '&::before': { content: '“', mr: '0.07em' },
  '&::after': { content: '”', ml: '0.07em' },
});
*/
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
  fontSize: '14px',
  fontFamily: '$inter',
  fontWeight: '600 !important',
  color: '$gray11 !important',
});

export const CaseStudiesLight = () => {
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
          <CardLight variant="interactive">
            <Box css={{ p: '$5' }}>
              <Box css={{ mb: '$4' }}>
                {/*<CaseStudyLogo variant="Vercel" />*/}
                <Heading css={{ fontWeight: '700' }} size="2">
                  Adam Rice
                </Heading>
              </Box>

              <Flex align="center" gap="2">
                <Avatar size="5" alt="AR" src="/img/adam.jpg" aria-describedby="Adam Rice" />
                <Text variant="gray" size="3" id="person1" css={{ color: '$gray9', lineHeight: 1.5 }}>
                  Founder & CEO
                  <Strong>ISI® Elite Training</Strong>
                </Text>
              </Flex>
            </Box>
          </CardLight>
          {/* <!-- AMANDA HALL --> */}
          <CardLight variant="interactive">
            <Box css={{ p: '$5' }}>
              <Box css={{ mb: '$4' }}>
                {/*<CaseStudyLogo variant="Vercel" />*/}
                <Heading size="2">Amanda Hall</Heading>
              </Box>

              <Flex align="center" gap="2">
                <Avatar size="5" alt="AH" src="/img/amanda.jpg" aria-describedby="Amanda Hall" />
                <Text variant="gray" size="3" id="person2" css={{ color: '$gray9', lineHeight: 1.5 }}>
                  Chief Operating Officer
                  <Strong>ISI® Elite Training</Strong>
                </Text>
              </Flex>
            </Box>
          </CardLight>
          {/* <!-- GUEST --> */}
          <CardLight variant="interactive">
            <Box css={{ p: '$5' }}>
              <Box css={{ mb: '$4' }}>
                {/*<CaseStudyLogo variant="Vercel" />*/}
                <Heading size="2">Martin Rooney</Heading>
              </Box>

              <Flex align="center" gap="2">
                <Avatar size="5" alt="MR" src="/img/martin_rooney.jpg" aria-describedby="Martin Rooney" />
                <Text variant="gray" size="3" id="person2" css={{ color: '$gray9', lineHeight: 1.5 }}>
                  Founder
                  <Strong>Training for Warriors</Strong>
                </Text>
              </Flex>
            </Box>
          </CardLight>
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

          <NextLink href="https://www.adp.com" passHref>
            <LogoLink>
              <CaseStudyLogo variant="ADP" width="125" />
            </LogoLink>
          </NextLink>

          <NextLink href="https://www.concept2.com" passHref>
            <LogoLink>
              <CaseStudyLogo variant="Concept2" width="125" />
            </LogoLink>
          </NextLink>

          {/* Horizontal scroll spacer */}
          <Box css={{ width: 1, height: 1 }} />
        </Grid>
      </Container>
    </Section>
  );
};
