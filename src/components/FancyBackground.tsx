import React from 'react';
import { darkTheme } from 'stitches.config';
import { Box } from '@/system';

type FancyBackgroundProps = React.PropsWithChildren<unknown>;

export const FancyBackground = ({ children, ...other }: FancyBackgroundProps) => {
  return (
    <Box css={{ position: 'relative', zIndex: 0 }}>
      <Box
        {...other}
        css={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          bc: '$slate1',
          zIndex: -1,
          overflow: 'hidden',
        }}
      >
        <Box
          css={{
            width: '100vw',
            minWidth: 1500,
            left: '50%',
            transform: 'translateX(-50%)',
            position: 'absolute',
            top: 0,
            bottom: 0,
            backgroundRepeat: 'no-repeat',
            /*
            backgroundImage: `
              radial-gradient(circle 800px at 700px 200px, $purple2, $$transparent),
              radial-gradient(circle 600px at calc(100% - 300px) 300px, $mint4, $$transparent),
              radial-gradient(circle 800px at right center, $sky3, $$transparent),
              radial-gradient(circle 800px at right bottom, $sky1, $$transparent),
              radial-gradient(circle 800px at calc(50% - 600px) calc(100% - 100px), $pink3, $pink1, $$transparent)
            `,
*/
            backgroundImage: 'linear-gradient(to bottom, $sage1, $elite3)',
            //background: '-webkit-linear-gradient(to bottom, #94e522, $gray12)',
            background: 'linear-gradient(to bottom, $sage1, $elite3)',

            // Safari transparency bug workaround
            $$transparent: '#FDFCFD00',
            [`.${darkTheme} &`]: {
              $$transparent: '#16161800',
            },
          }}
        />
      </Box>
      {children}
    </Box>
  );
};
