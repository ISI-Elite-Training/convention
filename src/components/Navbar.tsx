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
          backgroundColor: '$translucent',
          width: '100vw',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          saturate: '200%',
          zIndex: '9999',
        }}>
        {/* <!-- LOGO SECTION --> */}
        <Link href="/" passHref>
          <Box
            as="a"
            css={{
              width: 'auto',
              ml: '$2',
              display: 'inline-flex',
              textDecoration: 'none',
              mixBlendMode: 'difference',
              '&:focus': {
                boxShadow: 'none',
              },
              '@bp2': { ml: '$5' },
            }}>
            <Image src={brandLogo} width="200px" height="46px" alt="ISI® Elite Training" />
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
          }}>
          <Link href="/blog" passHref>
            <NewLink
              variant="subtle"
              css={{
                marginRight: '$3',
                color: '$gray10',
                '@sm': { marginRight: '$2' },
                '&:hover': {
                  textDecoration: 'none',
                  color: '$lime9',
                },
              }}>
              Tickets
            </NewLink>
          </Link>

          {/* <!-- Nav Link #2 --> */}
          <Link href="/showcase" passHref>
            <NewLink
              variant="subtle"
              css={{
                marginRight: '$3',
                color: '$gray10',

                '@sm': { marginRight: '$2' },
                '&:hover': {
                  textDecoration: 'none',
                  color: '$lime9',
                },
              }}>
              Speakers
            </NewLink>
          </Link>

          {/* <!-- Nav Link #3 --> */}
          <Link href="/cover" passHref>
            <NewLink
              variant="subtle"
              css={{
                display: 'none',
                color: '$gray10',
                mr: '$3',
                '@bp2': { display: 'block', mr: '$3' },
                '&:hover': {
                  textDecoration: 'none',
                  color: '$lime9',
                },
              }}>
              Purchase
            </NewLink>
          </Link>

          {/* <!-- Nav Link #4 --> */}
          <Link href="/cover" passHref>
            <NewLink
              variant="subtle"
              css={{
                display: 'none',
                color: '$gray10',
                mr: '$3',
                '@bp2': { display: 'block', mr: '$3' },
                '&:hover': {
                  textDecoration: 'none',
                  color: '$lime9',
                },
              }}>
              Other
            </NewLink>
          </Link>
        </Flex>

        {/* <!-- JSX ELEMENT --> */}

        <Flex css={{ alignItems: 'center', px: '0px' }}>
          <Box
            css={{
              justifyContent: 'right',
              width: '200px',
              mr: '$1',
              display: 'inline-flex',

              '@bp2': { mr: '$4' },
              '@xs': { marginRight: '-5px' },
            }}></Box>

          <PopoverPanel />
        </Flex>
      </Flex>
    </>
  );
};
