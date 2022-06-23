import React from 'react';
import { Container, Section, Grid, Heading } from '@/system';
import { ProjectLogoBox } from '@/components/ProjectLogoBox';
import { ProjectLogo } from '@/components/ProjectLogo';

const Sponsors = () => {
  return (
    <>
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
            <ProjectLogoBox title="InBody®" href="">
              <ProjectLogo variant="InBody" />
            </ProjectLogoBox>

            <ProjectLogoBox title="ADP®" href="https://ady.world">
              <ProjectLogo variant="ADP" />
            </ProjectLogoBox>

            <ProjectLogoBox title="Morrow Hill" href="https://ady.world">
              <ProjectLogo variant="Morrow Hill" />
            </ProjectLogoBox>

            <ProjectLogoBox title="Concept2" href="https://ady.world">
              <ProjectLogo variant="Concept2" />
            </ProjectLogoBox>

            <ProjectLogoBox title="Gym Supps" href="https://ady.world">
              <ProjectLogo variant="Gym Supps" />
            </ProjectLogoBox>
          </Grid>
        </Section>
      </Container>
    </>
  );
};

export default Sponsors;
