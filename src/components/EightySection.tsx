import React from 'react';
import Image from 'next/image';
import { styled } from '@stitches/react';

type EightySectionProps = React.PropsWithChildren<unknown>;

const Eighty = styled('div', {
  zIndex: '10',
  width: '100vw',
  minWidth: '100vw',
  height: 'auto',
  backgroundColor: '$elite4',
  // backgroundImage:
  //  'linear-gradient(to left, #BDBBBE 0%, #9D9EA3 100%), radial-gradient(88% 271%, rgba(255, 255, 255, 0.25) 0%, rgba(254, 254, 254, 0.25) 1%, rgba(0, 0, 0, 0.25) 100%), radial-gradient(50% 100%, rgba(255, 255, 255, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%)',
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

export const EightySection = ({ children, ...other }: EightySectionProps) => {
  return (
    <div>
      <Eighty {...other}>{children}</Eighty>
    </div>
  );
};
