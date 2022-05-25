import React from 'react';
import Link from 'next/link';
import { NewLink } from '@/system/newlink';

export const HeaderNav = () => {
  return (
    <>
      <Link href="/blog" passHref>
        <NewLink
          variant="subtle"
          css={{
            marginRight: '$3',
            color: '$gray12',
            '@sm': { marginRight: '$2' },
            '&:hover': {
              textDecoration: 'none',
              color: '$lime9',
            },
          }}
        >
          Agenda
        </NewLink>
      </Link>

      {/* <!-- Nav Link #2 --> */}
      <Link href="/showcase" passHref>
        <NewLink
          variant="subtle"
          css={{
            marginRight: '$3',
            color: '$gray12',

            '@sm': { marginRight: '$2' },
            '&:hover': {
              textDecoration: 'none',
              color: '$lime9',
            },
          }}
        >
          Booking Accommodations
        </NewLink>
      </Link>

      {/* <!-- Nav Link #4 --> */}
      <Link href="/cover" passHref>
        <NewLink
          variant="subtle"
          css={{
            display: 'none',
            color: '$gray12',
            mr: '$3',
            '@bp2': { display: 'block', mr: '$3' },
            '&:hover': {
              textDecoration: 'none',
              color: '$lime9',
            },
          }}
        >
          Register Now
        </NewLink>
      </Link>
    </>
  );
};
