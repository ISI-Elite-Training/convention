import { styled } from 'stitches.config';
import { Text } from '@/system/text';

export const Caption = styled(Text, {
  display: 'inline-block',
  fontWeight: 500,
  lineHeight: '20px',

  '&[href]': {
    textDecoration: 'none',
  },

  defaultVariants: {
    size: 3,
    variant: 'teal',
    color: '$gray12',
  },
});
