import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// ATELIER® DESIGN SYSTEM
import { Box } from '@/system/box';
import { Flex } from '@/system/flex';
import { Text } from '@/system/text';
import { NewLink } from '@/system/newlink';
import brandLogo from '@/public/logo/logo.svg';

// FUNCTIONS
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
          width: '100vw',
          zIndex: '9999',
          // backgroundColor: '$gray12',

          backgroundColor: '$translucent',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          saturate: '200%',
        }}
      >
        {/* <!-- LOGO SECTION --> */}
        <Link href="/" passHref>
          <Box
            as="a"
            css={{
              width: 'auto',
              ml: '$2',
              display: 'inline-flex',
              textDecoration: 'none',
              // mixBlendMode: 'difference',
              '&:focus': {
                boxShadow: 'none',
              },
              '@sm': {
                display: 'none',
                minWidth: '100px',
                ml: '$2',
              },
            }}
          >
            <Image src={brandLogo} width="200px" height="46px" alt="ISI® Elite Training" />
          </Box>
        </Link>
        <Link href="/" passHref>
          <Box
            as="a"
            css={{
              // display: 'none',
              // mixBlendMode: 'difference',
              '&:focus': {
                boxShadow: 'none',
              },
              '@xl': {
                display: 'none',
              },
              '@lg': {
                display: 'none',
              },
              '@md': {
                display: 'none',
              },
              '@sm': {
                display: 'block',
                minWidth: '100px',
                ml: '$2',
                //  display: 'inline-flex',
                textDecoration: 'none',
              },
              '@xs': {
                display: 'block',
                minWidth: '100px',
                ml: '$2',
                //  display: 'inline-flex',
                textDecoration: 'none',
              },
            }}
          >
            <Text css={{ color: '$gray12', fontSize: '14px', fontWeight: '700', lineHeight: '45px' }}>ISI® ELITE</Text>
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
                color: '$gray12',
                '@sm': { marginRight: '$2' },
                '&:hover': {
                  textDecoration: 'none',
                  color: '$lime9',
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
                color: '$gray12',

                '@sm': { marginRight: '$2' },
                '&:hover': {
                  textDecoration: 'none',
                  color: '$lime9',
                },
              }}
            >
              Agenda
            </NewLink>
          </Link>

          {/* <!-- Nav Link #4 --> */}
          <Link href="/cover" passHref>
            <NewLink
              variant="subtle"
              css={{
                display: 'none',
                color: '$gray12',
                mr: '$3',
                '@bp2': { display: 'block', mr: '$3' },
                '&:hover': {
                  textDecoration: 'none',
                  color: '$lime9',
                },
              }}
            >
              Travel
            </NewLink>
          </Link>
        </Flex>

        {/* <!-- JSX ELEMENT --> */}

        <Flex css={{ alignItems: 'center', px: '0px' }}>
          <Box
            css={{
              justifyContent: 'right',
              width: 'auto',
              mr: '$1',
              display: 'inline-flex',

              '@bp2': { mr: '$2', width: '200px' },
              '@xs': { marginRight: '-5px', width: '100px' },
            }}
          >
            {/* <!-- Nav Link #3 --> */}
            <Link href="/cover" passHref>
              <NewLink
                variant="subtle"
                css={{
                  backgroundColor: '$elite1',
                  display: 'none',
                  color: '$slate2',
                  borderRadius: '6px',
                  paddingTop: '6px',
                  paddingBottom: '6px',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  mr: '$3',
                  '@bp2': { display: 'block', mr: '$3' },
                  '&:hover': {
                    textDecoration: 'none',
                    // backgroundColor: '$lime8',
                    opacity: '0.9',
                  },
                }}
              >
                Register Now
              </NewLink>
            </Link>
          </Box>

          <PopoverPanel />
        </Flex>
      </Flex>
    </>
  );
};
