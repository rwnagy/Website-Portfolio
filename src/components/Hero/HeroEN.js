import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const HeroEN = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        My name is <br />
        Riley Nagy
      </SectionTitle>
      <SectionText>
        I am a Freelance Web Developer
      </SectionText>
      <Button onClick={() => window.location = "mailto:nagyrw@gmail.com"}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default HeroEN;