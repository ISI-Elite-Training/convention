import React from 'react';
import Link from 'next/link';
import { Grid, Box, Container, Paragraph } from '@/system';
import Image from 'next/image';
import { styled } from 'stitches.config';
import { Caption } from '@/components/Caption';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import canopyImage1 from '@/public/img/canopy.jpg';
import canopyImage2 from '@/public/img/canopy2.jpg';
import canopyImage3 from '@/public/img/canopy3.jpg';
import canopyImage4 from '@/public/img/canopy4.jpg';
import canopyImage5 from '@/public/img/canopy5.jpg';

const ImageCard = styled('div', {
  zIndex: '4',
  appearance: 'none',
  border: '2px solid $gray11',
  borderRadius: '10px',
  boxSizing: 'border-box',
  font: 'inherit',
  lineHeight: '1',
  outline: 'none',
  padding: 0,
  textAlign: 'inherit',
  verticalAlign: 'middle',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

  backgroundColor: '$gray6',
  display: 'block',
  textDecoration: 'none',
  color: 'inherit',
  flexShrink: 0,
  position: 'relative',

  minHeight: '250px',
  minWidth: '350px',
});

export const ImageSlider = () => {
  return (
    <>
      <Grid flow="column" align="center" justify="start" gap="3">
        <ImageCard>
          <Image className="card-image" src={canopyImage1} alt="Canopy 1" objectFit="cover" layout="fill" />
        </ImageCard>

        <ImageCard>
          <Image className="card-image" src={canopyImage2} alt="Canopy 1" objectFit="cover" layout="fill" />
        </ImageCard>

        <ImageCard>
          <Image className="card-image" src={canopyImage3} alt="Canopy 1" objectFit="cover" layout="fill" />
        </ImageCard>

        <ImageCard>
          <Image className="card-image" src={canopyImage4} alt="Canopy 1" objectFit="cover" layout="fill" />
        </ImageCard>

        <ImageCard>
          <Image className="card-image" src={canopyImage5} alt="Canopy 1" objectFit="cover" layout="fill" />
        </ImageCard>

        {/* Horizontal scroll spacer */}
        <Box css={{ width: 1, height: 1 }} />
      </Grid>
    </>
  );
};
