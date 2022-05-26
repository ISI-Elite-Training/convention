import React from 'react';
import { CaseStudiesLight } from '@/components/CaseStudiesLight';
import { SpeakerCardFull } from '@/components/SpeakerCardFull';
import { EightySection } from '@/components/EightySection';
import { Box } from '@/system/box';

export const SpeakersSection = () => {
  return (
    <>
      <Box css={{ backgroundColor: '$elite1' }}>
        <EightySection>
          <SpeakerCardFull />
        </EightySection>
      </Box>
    </>
  );
};
