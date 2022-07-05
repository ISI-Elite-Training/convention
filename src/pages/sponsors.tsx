import React from 'react';
import { Container, Section, Grid, Heading } from '@/system';
import { Navbar } from '@/components/Navbar';
import { SponsorLogoBox } from '@/components/SponsorLogoBox';
import { SponsorLogo } from '@/components/SponsorLogo';

const Sponsors = () => {
  return (
    <>
      <Navbar />
      <Container css={{ paddingTop: '100px', paddingBottom: '0px' }} size={{ '@initial': 2, '@bp2': 3 }}>
        <Heading size="3" css={{ fontFamily: '$inter', fontWeight: '700', textAlign: 'center' }}>
          Thank you to our sponsors.
        </Heading>
      </Container>

      <Container size={{ '@initial': 2, '@bp2': 3 }}>
        <Section>
          <Grid
            align="center"
            columns={{ '@initial': 1, '@bp1': 2, '@bp2': 3 }}
            css={{ gap: '8px', placeItems: 'stretch', gridAutoRows: '200px', mb: '$8' }}
          >
            <SponsorLogoBox title="InBody®" href="https://inbodyusa.com">
              <SponsorLogo variant="InBody" />
            </SponsorLogoBox>

            <SponsorLogoBox title="ADP®" href="https://www.adp.com">
              <SponsorLogo variant="ADP" />
            </SponsorLogoBox>

            <SponsorLogoBox title="Rep'M Group" href="https://www.repmgroup.com">
              <SponsorLogo variant="RepM" />
            </SponsorLogoBox>

            <SponsorLogoBox title="Mariana Tek" href="https://marianatek.com">
              <SponsorLogo variant="Mariana Tek" />
            </SponsorLogoBox>

            <SponsorLogoBox title="Morrow Hill" href="https://www.morrowhill.com">
              <SponsorLogo variant="Morrow Hill" />
            </SponsorLogoBox>

            <SponsorLogoBox title="Concept2" href="https://www.concept2.com">
              <SponsorLogo variant="Concept2" />
            </SponsorLogoBox>

            <SponsorLogoBox title="Gym Supps" href="https://gymsupps.org">
              <SponsorLogo variant="Gym Supps" />
            </SponsorLogoBox>
          </Grid>
        </Section>
      </Container>
    </>
  );
};

export default Sponsors;
