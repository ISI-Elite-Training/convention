import { css } from '@stitches/react';
import { styled } from 'stitches.config';

export const DEFAULT_TAG = 'button';

export const button = css({
  // RESET
  inclue: ['box'],
  all: 'unset',
  alignItems: 'center',
  userSelect: 'none',
  fontFamily: '$brynas',

  // BASE STYLE
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  paddingLeft: '18px',
  paddingRight: '18px',
  paddingTop: '10px',
  paddingBottom: '10px',
  height: 'auto',
  borderRadius: '6px',
  border: 'none',
  borderColor: '$gray12',
  lineHeight: 'normal',
  width: 'auto',

  // MARGINS
  marginRight: '6px',
  marginLeft: '1px',
  marginTop: '0px',
  marginBottom: '0px',

  // BUTTON TEXT
  fontSize: '14px',
  fontWeight: '600',
  color: '$white',

  '&[data-custom-attribute]': {
    // boxShadow: '0 0 0 3px $gray12',
    boxShadow: 'inset 0 0 0 3px $colors$gray12',
  },

  '&[href]': {
    cursor: 'pointer',
  },

  '&:disabled': {
    backgroundColor: '$slate2',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    color: '$slate8',
    pointerEvents: 'none',
  },

  '&:hover': {
    color: '$white',
    cursor: 'pointer',
  },

  variants: {
    color: {
      elite: {
        backgroundColor: '$elite4',
        color: '$white',
        fontFamily: '$brynas',
        fontSize: '13px',

        '&:hover': {
          backgroundColor: '$elite4',
          opacity: '0.9',
          color: '$white',
        },
      },
      white: {
        backgroundColor: '$elite2',
        color: '$elite4',
        fontFamily: '$brynas',
        fontSize: '13px',

        '&:hover': {
          backgroundColor: '$elite2',
          color: '$elite4',
        },
      },
      lime: {
        backgroundColor: '$elite1',
        color: '$white',
        fontFamily: '$brynas',

        '&:hover': {
          backgroundColor: '$elite1',
          color: '$white',
        },
      },
      gray: {
        backgroundColor: '$gray11',
        color: '$white',
        fontFamily: '$brynas',
        fontSize: '13px',

        '&:hover': {
          backgroundColor: '$gray10',
          color: '$white',
        },
      },
      darkGray: {
        borderRadius: '8px',
        backgroundColor: '$gray12',
        border: '2px solid $colors$gray12',
        color: '#94E522',

        '&:hover': {
          backgroundColor: '$gray9',
          color: '$white',
          border: '2px solid $colors$gray10',
        },
      },
      ghost: {
        backgroundColor: '$translucent',
        color: '$gray11',
        fontWeight: '600',

        '&:hover': {
          backgroundColor: '$slate5',
          color: '$gray11',
        },
      },
    },
  },
});

export const styledButton = css({
  // RESET
  inclue: ['box'],
  all: 'unset',
  alignItems: 'center',
  userSelect: 'none',

  '&:disabled': {
    backgroundColor: '$slate2',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    color: '$slate8',
    pointerEvents: 'none',
  },

  // BASE STYLE
  position: 'relative',
  paddingLeft: '14px',
  paddingRight: '14px',
  paddingTop: '7px',
  paddingBottom: '7px',
  height: 'auto',
  borderRadius: '5px',
  border: 'none',
  borderColor: '$gray12',
  lineHeight: 'normal',
  width: 'auto',

  // MARGINS
  marginRight: '6px',
  marginLeft: '1px',
  marginTop: '0px',
  marginBottom: '0px',

  // BUTTON TEXT
  fontSize: '13px',
  fontWeight: '600',
  fontFamily: '$inter',
  color: '$white',

  '&:hover': {
    color: '$white',
    cursor: 'pointer',
  },

  variants: {
    color: {
      lime: {
        backgroundColor: '$lime9',
        color: '$white',

        '&:hover': {
          backgroundColor: '$lime8',
          color: '$white',
        },
      },
      orange: {
        backgroundColor: '$orange9',
        color: '$white',
      },
      ghost: {
        backgroundColor: '$translucent',
        color: '$gray11',
        fontWeight: '600',

        '&:hover': {
          backgroundColor: '$slate5',
          color: '$gray11',
        },
      },
    },
  },
});

export const styledSmallButton = css({
  // RESET
  inclue: ['box'],
  all: 'unset',
  alignItems: 'center',
  userSelect: 'none',

  // BASE STYLES
  position: 'relative',
  paddingLeft: '10px',
  paddingRight: '10px',
  paddingTop: '4px',
  paddingBottom: '4px',
  height: 'auto',
  borderRadius: '6px',
  border: '2px solid',
  borderColor: '$slate10',
  lineHeight: '1.2',
  width: 'auto',

  // MARGINS
  marginRight: '6px',
  marginLeft: '0px',
  marginTop: '6px',
  marginBottom: '6px',

  // BUTTON TEXT
  fontSize: '11px',
  fontWeight: '500',
  fontFamily: '$inter',
  color: '$white',

  '&:hover': {
    color: '$white',
    cursor: 'pointer',
  },

  variants: {
    color: {
      light_gray: {
        backgroundColor: '$gray5',
        color: '$gray12',
        borderColor: '$gray11',

        '&:hover': {
          backgroundColor: '$gray6',
          color: '$gray12',
        },
      },
      lime: {
        backgroundColor: '$lime9',
        color: '$white',
        fontWeight: '600',
      },
      orange: {
        backgroundColor: '$gray9',
        color: '$white',
      },
    },
  },

  defaultVariants: {
    color: 'light_gray',
  },
});

export const styledGradientButton = css({
  '&::before': {
    content: `''`,
    display: 'block',
    // backgroundImage: 'linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)',
    backgroundImage: 'linear-gradient(to right, #1ed900, #00d4ff)',
    position: 'absolute',
    top: '-3px',
    left: '-3px',
    width: 'calc(100% + 6px)',
    height: 'calc(100% + 6px)',
    borderRadius: '9px',
    zIndex: '-1',
  },

  '&::after': {
    content: `''`,
    zIndex: '1',
  },

  // RESET
  inclue: ['box'],
  all: 'unset',
  alignItems: 'center',
  userSelect: 'none',
  // zIndex: '5',

  backgroundColor: '#231F20',

  // BASE STYLES
  position: 'relative',
  paddingLeft: '14px',
  paddingRight: '14px',
  paddingTop: '2px',
  paddingBottom: '2px',
  height: '26px',
  borderRadius: '6px',
  border: 'none',
  borderColor: '$gray12',
  lineHeight: 'normal',
  width: 'auto',

  // MARGINS
  marginRight: '6px',
  marginLeft: '6px',
  marginTop: '6px',
  marginBottom: '6px',

  // BUTTON TEXT
  fontSize: '12px',
  fontWeight: '600',
  fontFamily: '$inter',
  color: '$white',

  '&:hover': {
    color: '$white',
    cursor: 'pointer',
  },
});

export const AtelierButton = styled(DEFAULT_TAG, button);
export const Button = styled(DEFAULT_TAG, styledButton);
export const SmallButton = styled(DEFAULT_TAG, styledSmallButton);
export const GradientButton = styled(DEFAULT_TAG, styledGradientButton);
