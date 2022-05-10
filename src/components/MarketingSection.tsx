// REACT + NEXT IMPORTS
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// ATELIER® DESIGN SYSTEM IMPORTS
import { Box } from '@/system/box';
import { Text } from '@/system/text';
import { Container } from '@/system/container';
import { Grid } from '@/system/grid';
import { Heading } from '@/system/heading';
import { Paragraph } from '@/system/paragraph';

// User Interface ..
import { AdobeAe } from '@/components/AdobeAe';
import { EightySection } from '@/components/EightySection';

import { styled } from 'stitches.config';

const Card = styled('div', {
  display: 'flex',
  backgroundColor: '$slate3',
  position: 'relative',
  borderRadius: '20px',
  marginTop: '18px',
  padding: '40px',
  alignItems: 'center',
  webkitScrollbar: 'none',
  height: '300px',
});

export const MarketingSection = () => {
  return (
    <EightySection>
      <Container size="2" css={{ paddingTop: '120px', px: '20px' }}>
        <Heading
          size="4"
          css={{
            color: '$slate2',
            fontSize: '40px',
            fontFamily: '$brynasWide',
            fontWeight: '600',
            textAlign: 'center',
            paddingBottom: '10px',
            '@sm': {
              fontSize: '26px',
              textAlign: 'left',
              paddingBottom: '10px',
            },
          }}
        >
          Plan your visit.
        </Heading>

        <Paragraph
          size="2"
          css={{
            margin: 'auto',
            maxWidth: '80%',
            textAlign: 'center',
            fontSize: '18px',
            fontWeight: '500',
            lineHeight: '1.4',
            color: '$slate2',
            mb: '40px',
            '@sm': {
              maxWidth: '100%',
              width: '100%',
              margin: '0',
              textAlign: 'left',
              fontSize: '16px',
            },
            '@md': {
              ta: 'left',
              mb: '60px',
              lineHeight: '1.3',
            },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Paragraph>
      </Container>

      {/* <!-- CARDS CONTAINER --> */}
      <Container
        size="3"
        css={{
          overflowY: 'visible',
          height: 'auto',
          paddingTop: '10px',
          paddingBottom: '80px',
          px: 'auto',
        }}
      >
        <Grid
          css={{
            height: 'auto',
            gap: '10px',
            gridTemplateColumns: '1fr 1fr',
            '@sm': {
              gap: '10px',
              gridTemplateColumns: '1fr',
            },
          }}
        >
          {/* <!-- BOX ONE --> */}
          <Box>
            <Card>
              <Box
                css={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  margin: '30px',
                }}
              >
                <Text size="2" css={{ fontWeight: '800', lineHeight: '1.2' }}>
                  SFX. 001
                </Text>
              </Box>
              <Image
                className="color__swirl"
                src="https://cdn.ady.systems/ady.images/one.png"
                layout="fill"
                objectFit="cover"
                alt="image"
                objectPosition="absolute"
              />
            </Card>
          </Box>

          {/* <!-- BOX TWO --> */}
          <Box>
            <Card>
              <Box
                css={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  margin: '30px',
                }}
              >
                <Text size="2" css={{ fontWeight: '800', lineHeight: '1.2' }}>
                  INTERVAL. v001
                </Text>
              </Box>
              <Image
                className="color__swirl"
                src="https://cdn.ady.systems/ady.images/four.png"
                layout="fill"
                objectFit="cover"
                alt="image"
                objectPosition="absolute"
              />
            </Card>
          </Box>
        </Grid>
      </Container>

      {/* <!-- ADOBE® AE SECTION --> */}
      <Container
        size="3"
        css={{
          overflowY: 'visible',
          height: 'auto',
          paddingTop: '10px',
          paddingBottom: '80px',
          px: 'auto',
        }}
      >
        <AdobeAe />
      </Container>

      {/* <!-- END CARDS CONTAINER --> */}
    </EightySection>
  );
};
