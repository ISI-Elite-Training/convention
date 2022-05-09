import React from 'react';
import Link from 'next/link';

// ATELIER® DESIGN SYSTEM
import { Box } from '@/system/box';
import { Flex } from '@/system/flex';
import { Text } from '@/system/text';
import { NewLink } from '@/system/newlink';

// FUNCTIONS
import { ThemeSwitch } from '@/components/ThemeSwitch';
import { PopoverPanel } from '@/components/PopoverPanel';

export const Navbar = () => {
  return (
    <>
      <Flex
        as="header"
        css={{
          py: '0px',
          px: '5px',
          height: '48px',
          jc: 'space-between',
          position: 'fixed',
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
        <Link href="/" passHref>
          <Box
            as="a"
            css={{
              width: '100px',
              ml: '$2',
              display: 'inline-flex',
              textDecoration: 'none',
              '&:focus': {
                boxShadow: 'none',
              },
              '@bp2': { ml: '$5' },
            }}
          >
            <Text
              css={{
                zIndex: '999',
                fontFamily: '$inter',
                // fontWeight: '600',
                fontSize: '18px',
                color: '$superLogo',
                lineHeight: '48px',
                letterSpacing: '-0.03rem',
              }}
            >
              <strong>ISI</strong>® Elite
            </Text>
          </Box>
        </Link>

        {/* <!-- Nav Link #1 --> */}
        <Flex
          as="nav"
          css={{
            ai: 'center',
            px: '0px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            '@sm': {
              display: 'none',
            },
          }}
        >
          <Link href="/blog" passHref>
            <NewLink
              variant="subtle"
              css={{
                marginRight: '$3',
                color: '$sage11',
                '@sm': { marginRight: '$2' },
                '&:hover': {
                  textDecoration: 'none',
                  color: '$blue10',
                },
              }}
            >
              Tickets
            </NewLink>
          </Link>

          {/* <!-- Nav Link #2 --> */}
          <Link href="/showcase" passHref>
            <NewLink
              variant="subtle"
              css={{
                marginRight: '$3',
                color: '$sage11',

                '@sm': { marginRight: '$2' },
                '&:hover': {
                  textDecoration: 'none',
                  color: '$yellow9',
                },
              }}
            >
              Speakers
            </NewLink>
          </Link>

          {/* <!-- Nav Link #3 --> */}
          <Link href="/cover" passHref>
            <NewLink
              variant="subtle"
              css={{
                display: 'none',
                color: '$sage11',
                mr: '$3',
                '@bp2': { display: 'block', mr: '$3' },
                '&:hover': {
                  textDecoration: 'none',
                  color: '$red9',
                },
              }}
            >
              Purchase
            </NewLink>
          </Link>

          {/* <!-- Nav Link #4 --> */}
          <Link href="/cover" passHref>
            <NewLink
              variant="subtle"
              css={{
                display: 'none',
                color: '$sage11',
                mr: '$3',
                '@bp2': { display: 'block', mr: '$3' },
                '&:hover': {
                  textDecoration: 'none',
                  color: '$orange9',
                },
              }}
            >
              Other
            </NewLink>
          </Link>
        </Flex>

        {/* <!-- JSX ELEMENT --> */}

        <Flex css={{ alignItems: 'center', px: '0px' }}>
          <Box
            css={{
              justifyContent: 'right',
              width: '100px',
              mr: '$1',
              display: 'inline-flex',

              '@bp2': { mr: '$4' },
              '@xs': { marginRight: '-5px' },
            }}
          >
            {/* <!-- THEME SWITCH --> */}
            <ThemeSwitch />
          </Box>

          <PopoverPanel />
        </Flex>
      </Flex>
    </>
  );
};
