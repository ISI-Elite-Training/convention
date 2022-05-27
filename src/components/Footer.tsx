import React from 'react';
import Link from 'next/link';

// ATELIER® DESIGN SYSTEM
import { Box } from '@/system/box';
import { Flex } from '@/system/flex';
import { Text } from '@/system/text';
import { NewLink } from '@/system/newlink';

// Logos..
//import { TwitterLogo } from '@/components/TwitterLogo';
//import { ArenaLogoIcon } from '@/components/ArenaLogo';
//import { GitHubIcon } from '@/components/GitHubIcon';

export const Footer = () => {
  return (
    <>
      <Flex
        as="footer"
        css={{
          py: '0px',
          px: '5px',
          height: '58px',
          jc: 'space-between',
          position: 'relative',
          border: 'solid 1px $gray10',
          borderBottomWidth: '0',
          borderLeftWidth: '0',
          borderRightWidth: '0',
          borderTopWidth: '1px',
          // bottom: '0',
          margin: '0',
          backgroundColor: '$translucent',
          width: '100vw',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          saturate: '200%',
          zIndex: '9999',
        }}
      >
        {/* <!-- LOGO SECTION --> */}

        <Box
          as="a"
          css={{
            ml: '$2',
            display: 'inline-flex',
            textDecoration: 'none',
            '&:focus': {
              boxShadow: 'none',
            },
            '@bp2': { ml: '$2' },
          }}
        >
          <Text
            css={{
              zIndex: '999',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '500',
              fontSize: '12px',
              color: '$superLogo',
              opacity: '0.4',
              lineHeight: '58px',
              letterSpacing: '-0.03rem',
            }}
          >
            Copyright © 2022.
          </Text>
        </Box>

        {/* NAVIGATION SECTION */}

        <Flex
          as="nav"
          css={{
            ai: 'center',
            px: '0px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            '@sm': {
              ai: 'right',
            },
          }}
        >
          <Link href="https://www.instagram.com/isielitetraining_/" passHref>
            <NewLink
              target="_blank"
              rel="norefferer"
              variant="subtle"
              css={{
                marginRight: '20px',
                color: '$gray12',

                '@sm': { marginRight: '20px' },
                '&:hover': {
                  textDecoration: 'none',
                  color: '$yellow9',
                },
              }}
            >
              Instagram
            </NewLink>
          </Link>

          <Link href="https://twitter.com/ISIeliteHQ" passHref>
            <NewLink
              target="_blank"
              rel="norefferer"
              variant="subtle"
              css={{
                marginRight: '$2',
                color: '$gray12',

                '@sm': { marginRight: '$2' },
                '&:hover': {
                  textDecoration: 'none',
                  color: '$yellow9',
                },
              }}
            >
              Facebook
            </NewLink>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};
