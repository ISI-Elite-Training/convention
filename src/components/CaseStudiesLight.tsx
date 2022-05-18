import React from 'react';
import NextLink from 'next/link';
import { Box, Grid, Text, Container, Flex, Heading, Section, Separator, Avatar, CardLight, CustomLink } from '@/system';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { MarketingButton } from '@/components/MarketingButton';
import { Caption } from '@/components/Caption';
import { CaseStudyLogo } from '@/components/CaseStudyLogo';
import { LogoLink } from '@/components/LogoLink';

import { styled } from 'stitches.config';

const TestimonialText = styled(
  Text,
  {
    lineHeight: 1.6,
    letterSpacing: '-0.01em',
    textIndent: '-0.577em',
    fontVariantNumeric: 'normal',
    hyphens: 'auto',
    '&::before': { content: '“', mr: '0.07em' },
    '&::after': { content: '”', ml: '0.07em' },
  },
  {
    defaultVariants: {
      size: 4,
    },
  },
);

export const CaseStudiesLight = () => {
  return (
    <Section css={{ paddingBottom: '120px' }}>
      <Container size="3">
        <Box css={{ mb: '$5' }}>
          <Caption css={{ mb: '$1', color: '$gray12' }}>Case studies</Caption>
          <Heading as="h2" size="4" css={{ color: '$slate2', maxWidth: 700 }}>
            Meet Your Speakers.
          </Heading>
        </Box>

        <Grid columns={{ '@bp2': 3 }} gap="5" css={{ mb: '$6' }}>
          {/* <!-- ADAM RICE --> */}
          <CardLight variant="interactive" as="a" href="/case-studies/vercel">
            <Box css={{ p: '$5' }}>
              <Box css={{ mb: '$4' }}>
                {/*<CaseStudyLogo variant="Vercel" />*/}
                <Heading css={{ fontWeight: '700' }} size="2">
                  Adam Rice
                </Heading>
              </Box>

              <Flex align="center" gap="2">
                <Avatar size="3" src="/marketing/avatar-rauno-freiberg.jpg" aria-describedby="person1" />
                <Text variant="gray" size="3" id="person1" css={{ color: '$gray9', lineHeight: 1.5 }}>
                  Founder & CEO
                  <br />
                  <strong>ISI® Elite Training</strong>
                </Text>
              </Flex>
            </Box>
          </CardLight>
          {/* <!-- AMANDA HALL --> */}
          <CardLight variant="interactive" as="a" href="/case-studies/codesandbox">
            <Box css={{ p: '$5' }}>
              <Box css={{ mb: '$4' }}>
                {/*<CaseStudyLogo variant="Vercel" />*/}
                <Heading size="2">Amanda Hall</Heading>
              </Box>

              <Flex align="center" gap="2">
                <Avatar size="3" src="/marketing/avatar-scott-hutcheson.png" aria-describedby="person2" />
                <Text variant="gray" size="3" id="person2" css={{ color: '$gray9', lineHeight: 1.5 }}>
                  Chief Operations Officer
                  <br />
                  <strong>ISI® Elite Training</strong>
                </Text>
              </Flex>
            </Box>
          </CardLight>
          {/* <!-- GUEST --> */}
          <CardLight variant="interactive" as="a" href="/case-studies/codesandbox">
            <Box css={{ p: '$5' }}>
              <Box css={{ mb: '$4' }}>
                {/*<CaseStudyLogo variant="Vercel" />*/}
                <Heading size="2">Guest Speaker</Heading>
              </Box>

              <Flex align="center" gap="2">
                <Avatar size="3" src="/marketing/avatar-scott-hutcheson.png" aria-describedby="person2" />
                <Text variant="gray" size="3" id="person2" css={{ color: '$gray9', lineHeight: 1.5 }}>
                  Position Title
                  <br />
                  <strong>Current Company</strong>
                </Text>
              </Flex>
            </Box>
          </CardLight>
        </Grid>

        <Text variant="gray" css={{ mb: '$3' }}>
          <NextLink href="/case-studies" passHref>
            <CustomLink variant="subtle" css={{ color: '$slate2', display: 'inline-flex', alignItems: 'center' }}>
              And dozens more companies
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
          <NextLink href="/case-studies/atom-learning" passHref>
            <LogoLink>
              <CaseStudyLogo variant="Atom Learning" width="86" />
            </LogoLink>
          </NextLink>

          <NextLink href="/case-studies/basedash" passHref>
            <LogoLink>
              <CaseStudyLogo variant="Basedash" width="135" />
            </LogoLink>
          </NextLink>

          <NextLink href="/case-studies/basement-studio" passHref>
            <LogoLink css={{ mb: -6 }}>
              <CaseStudyLogo variant="basement.studio" width="120" />
            </LogoLink>
          </NextLink>

          <NextLink href="/case-studies/linear" passHref>
            <LogoLink>
              <CaseStudyLogo variant="Linear" width="105" />
            </LogoLink>
          </NextLink>

          <NextLink href="/case-studies/liveblocks" passHref>
            <LogoLink css={{ mb: -3 }}>
              <CaseStudyLogo variant="Liveblocks" width="135" />
            </LogoLink>
          </NextLink>

          <NextLink href="/case-studies/supabase" passHref>
            <LogoLink css={{ mb: -2 }}>
              <CaseStudyLogo variant="Supabase" width="140" />
            </LogoLink>
          </NextLink>

          <NextLink href="/case-studies/university-of-amsterdam" passHref>
            <LogoLink css={{ mt: 2 }}>
              <CaseStudyLogo variant="University of Amsterdam" width="152" />
            </LogoLink>
          </NextLink>

          {/* Horizontal scroll spacer */}
          <Box css={{ width: 1, height: 1 }} />
        </Grid>
      </Container>
    </Section>
  );
};
