// REACT + NEXT IMPORTS
import React from 'react';
import Link from 'next/link';
import NextLink from 'next/link';

// ATELIER DESIGN SYSTEM IMPORTS
import { Caption } from '@/components/Caption';
import { Box } from '@/system/box';
import { Text } from '@/system/text';
import { Heading } from '@/system/heading';
import { Paragraph } from '@/system/paragraph';
import { Container } from '@/system/container';
import { AtelierButton } from '@/system/custom/AtelierButton';
import { CaretRightIcon } from '@radix-ui/react-icons';

// RADIX ICONS
import { ArrowRightIcon } from '@radix-ui/react-icons';

// BEGIN APP
export const AdobeAe = () => {
  return (
    <>
      <Box css={{ paddingLeft: '0', paddingRight: '0', paddingBottom: '120px' }}>
        <Container
          size="3"
          css={{
            paddingLeft: '10px',
            paddingRight: '10px',
            margin: '0',
            backgroundColor: 'none',

            '@sm': {
              paddingLeft: '0px',
              paddingRight: '0px',
            },
          }}
        >
          <Caption css={{ mb: '$1' }}>Are you ready..</Caption>
          <Heading as="h2" size="3" css={{ fontFamily: '$inter', color: '$slate1', maxWidth: 500 }}>
            Train for life.
          </Heading>

          <Paragraph
            size="1"
            css={{
              fontFamily: '$inter',
              fontWeight: '500',
              color: '$slate2',
              lineHeight: '1.3',
              px: '5px',
              py: '5px',
              fontSize: '16px',
              width: '80%',
              paddingBottom: '30px',

              '@sm': {
                fontSize: '14px',
                width: '100%',
              },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>

          <Link href="/welcome" passHref>
            <a>
              <AtelierButton color="lime">Learn More ➔</AtelierButton>
            </a>
          </Link>
        </Container>
      </Box>
    </>
  );
};
