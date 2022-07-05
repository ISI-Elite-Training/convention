import React from 'react';
import { styled } from '@stitches/react';

type SponsorLogoBoxProps = {
  title?: string;
  children?: JSX.Element;
  href?: string;
};

const SponsorBox = styled('a', {
  minHeight: '200px',
  width: '100%',
  padding: '5px',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '12px',
  backgroundColor: '$elite2',
  // border: '1px solid $sage5',
  boxShadow: '0 0 0 1px $colors$elite3',
  '&:hover': {
    backgroundColor: '$elite4',
    cursor: 'pointer',
  },
  '&:focus': {
    boxShadow: '0 0 0 2px $colors$elite1',
  },
  '&:focus:not(:focus-visible)': {
    boxShadow: 'none',
  },
});

export const SponsorLogoBox = ({ title, href, children, ...props }: SponsorLogoBoxProps) => {
  return (
    <>
      <SponsorBox href={href} target="_blank" rel="noopener noreferrer" title={`${title}`}>
        {children}
      </SponsorBox>
    </>
  );
};

export default SponsorLogoBox;
