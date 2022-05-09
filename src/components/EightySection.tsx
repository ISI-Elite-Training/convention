import React from 'react';
import Image from 'next/image';
import { styled } from '@stitches/react';

type EightySectionProps = React.PropsWithChildren<{}>;

const Eighty = styled('div', {
  zIndex: '10',
  width: '100vw',
  minWidth: '100vw',
  height: 'auto',
  backgroundColor: '$slate5',

  // backgroundImage: 'url("/img/four.png")',
  backgroundPosition: 'center',
  backdropFilter: 'blur(10px)',
  // boxShadow: '$colors$shadowLight 0px 10px 38px -10px, $colors$shadowDark 0px 10px 20px -15px',

  display: 'block',
  position: 'relative',
  margin: '0',
  padding: '0',

  borderBottomWidth: '1px solid #FFF',

  borderBottomLeftRadius: '30px',
  borderBottomRightRadius: '30px',

  overflowY: 'visible',
  overflowX: 'hidden',
});

const ImageHolder = styled('div', {
  zIndex: '1',
  position: 'relative',
  margin: '0',
  padding: '0',
});

export const EightySection = ({ children, ...other }: EightySectionProps) => {
  return (
    <div>
      <Eighty {...other}>{children}</Eighty>
      <ImageHolder>
        <Image
          src="/img/four.png"
          layout="fill"
          objectFit="cover"
          alt="gradient"
        />
      </ImageHolder>
    </div>
  );
};
