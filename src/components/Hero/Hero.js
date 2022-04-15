import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
    <SectionTitle main center>
        Меня зовут <br />
        Райли Нейджи
      </SectionTitle>
      <SectionText>
        Я внештатный веб-разработчик
      </SectionText>
      <Button onClick={() => window.location ="mailto:nagyrw@gmail.com"}>Контакт</Button>
    </LeftSection>
  </Section>
);

export default Hero;