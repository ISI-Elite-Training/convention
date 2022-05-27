import React from 'react';
import Link from 'next/link';
import { NewLink } from '@/system/newlink';

export const HeaderNav = () => {
  return (
    <>
      <Link href="https://spaces.isielite.space/PDF/ISI%C2%AEEliteTraining_ConventionAgenda.pdf" passHref>
        <NewLink
          variant="subtle"
          css={{
            marginRight: '$3',
            color: '$gray12',
            fontWeight: '800',
            '@sm': { marginRight: '$2' },
            '&:hover': {
              textDecoration: 'none',
              color: '$elite4',
            },
          }}
        >
          AGENDA
        </NewLink>
      </Link>

      {/* <!-- Nav Link #2 --> */}
      <Link href="/travel" passHref>
        <NewLink
          variant="subtle"
          css={{
            marginRight: '$3',
            color: '$gray12',
            fontWeight: '800',

            '@sm': { marginRight: '$2' },
            '&:hover': {
              textDecoration: 'none',
              color: '$elite4',
            },
          }}
        >
          BOOK ACCOMMODATIONS
        </NewLink>
      </Link>

      {/* <!-- Nav Link #4 --> */}
      <Link href="/travel" passHref>
        <NewLink
          variant="subtle"
          css={{
            display: 'none',
            color: '$gray12',
            mr: '$3',
            fontWeight: '800',
            '@bp2': { display: 'block', mr: '$3' },
            '&:hover': {
              textDecoration: 'none',
              color: '$elite4',
            },
          }}
        >
          REGISTER NOW
        </NewLink>
      </Link>
    </>
  );
};
