import React from 'react';
import NextLink from 'next/link';
import { Box, Grid, Text, Container, Flex, Heading, Section, Separator, Avatar, Card, CustomLink } from '@/system';
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

export const CaseStudies = () => {
  return (
    <Section>
      <Container size="3">
        <Box css={{ mb: '$5' }}>
          <Caption css={{ mb: '$1' }}>Case studies</Caption>
          <Heading as="h2" size="3" css={{ maxWidth: 500 }}>
            World-class teams use Radix to power their products
          </Heading>
        </Box>

        <Grid columns={{ '@bp2': 2 }} gap="5" css={{ mb: '$6' }}>
          <Card variant="interactive" as="a" href="/case-studies/vercel">
            <Box css={{ p: '$5' }}>
              <Box css={{ mb: '$4' }}>
                <CaseStudyLogo variant="Vercel" />
              </Box>
              <TestimonialText css={{ mb: '$4' }}>
                We’ve been able to focus on building solid user experiences on top of Radix Primitives. With UI components, there are just
                too many angles and rabbit holes to cover for product teams that wish to move quickly.
              </TestimonialText>
              <Flex align="center" gap="2">
                <Avatar size="3" src="/marketing/avatar-rauno-freiberg.jpg" aria-describedby="person1" />
                <Text variant="gray" size="3" id="person1" css={{ lineHeight: 1.5 }}>
                  Rauno Freiberg, UI Engineer at Vercel
                </Text>
              </Flex>
            </Box>
          </Card>
          <Card variant="interactive" as="a" href="/case-studies/codesandbox">
            <Box css={{ p: '$5' }}>
              <Box css={{ mb: '$4' }}>
                <CaseStudyLogo variant="CodeSandbox" />
              </Box>
              <TestimonialText css={{ mb: '$4' }}>
                Radix has significantly improved the accessibility standard in our components. We spend far less time discussing and
                implementing keyboard navigation, focus traps, and researching appropriate ARIA techniques for our components.
              </TestimonialText>
              <Flex align="center" gap="2">
                <Avatar size="3" src="/marketing/avatar-scott-hutcheson.png" aria-describedby="person2" />
                <Text variant="gray" size="3" id="person2" css={{ lineHeight: 1.5 }}>
                  Scott Hutcheson, Product Engineer at CodeSandbox
                </Text>
              </Flex>
            </Box>
          </Card>
        </Grid>

        <Text variant="gray" css={{ mb: '$3' }}>
          <NextLink href="/case-studies" passHref>
            <CustomLink variant="subtle" css={{ display: 'inline-flex', alignItems: 'center' }}>
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
