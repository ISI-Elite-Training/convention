import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// ATELIER® DESIGN SYSTEM
import { Box } from '@/system/box';
import { Flex } from '@/system/flex';
import { Text } from '@/system/text';
import { NewLink } from '@/system/newlink';
import { HeaderNav } from '@/components/HeaderNav';
import brandLogo from '@/public/logo/brand_logo.svg';

// FUNCTIONS
import { PopoverPanel } from '@/components/PopoverPanel';

export const Navbar = () => {
  return (
    <>
      <Flex
        as="header"
        css={{
          paddingTop: '0px',
          paddingBottom: '0px',
          paddingLeft: '10px',
          paddingRight: '10px',
          height: '50px',
          jc: 'space-between',
          position: 'fixed',
          margin: '0',
          width: '100vw',
          zIndex: '9999',
          // backgroundColor: '$gray12',

          backgroundColor: '$light50',
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
              zIndex: '999',
              width: 'auto',
              ml: '$2',
              display: 'inline-flex',
              position: 'fixed',
              top: '0',
              left: '0',
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
              '@xs': {
                display: 'none',
                minWidth: '100px',
                ml: '$2',
              },
            }}
          >
            <Image src={brandLogo} width="200px" height="50px" alt="ISI® Elite Training" />
          </Box>
        </Link>
        <Box
          as="a"
          css={{
            alignItems: 'left',
            textAlign: 'left',
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
              width: '60%',
              // maxWidth: '60%',
              ml: '0',
              //  display: 'inline-flex',
              textDecoration: 'none',
            },
            '@xs': {
              display: 'block',
              width: '60%',
              // maxWidth: '60%',
              ml: '0',
              //  display: 'inline-flex',
              textDecoration: 'none',
            },
          }}
        >
          <Image src={brandLogo} width="160px" height="50px" alt="ISI® Elite Training" />
        </Box>

        {/* <!-- Nav Link #1 --> */}
        <Flex
          css={{
            width: '100%',
            justifyContent: 'center',
            ai: 'center',
            px: '0px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            '@sm': {
              display: 'none',
            },
            '@xs': {
              display: 'none',
            },
          }}
        >
          <HeaderNav />
        </Flex>

        {/* <!-- JSX ELEMENT --> */}

        <Box
          css={{
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
              display: 'inline-flex',
              margin: '0',
              alignItems: 'right',
              justifyContent: 'end',
              textAlign: 'right',
              width: 'auto',
              mr: '0',
              textDecoration: 'none',
            },
            '@xs': {
              display: 'inline-flex',
              margin: '0',
              alignItems: 'right',
              justifyContent: 'end',
              textAlign: 'right',
              width: 'auto',
              mr: '0',
              textDecoration: 'none',
            },
          }}
        >
          <PopoverPanel />
        </Box>
      </Flex>
    </>
  );
};
