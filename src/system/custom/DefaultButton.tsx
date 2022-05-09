import { styled } from 'stitches.config';

export const DefaultButton = styled('button', {
  backgroundColor: '$gold7',
  color: '$white',
  paddingLeft: '25px',
  paddingRight: '25px',
  py: '8px',
  height: '34px',
  borderRadius: '7px',
  // border: '1.5px solid',
  border: 'none',
  borderColor: '$gray12',
  lineHeight: '5',
  width: 'auto',

  fontFamily: '$inter',
  fontWeight: '600',
  fontSize: '13px',

  '&:hover': {
    color: '$white',
    cursor: 'pointer',
  },
});
