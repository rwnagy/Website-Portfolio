import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

const data = [
  { title: 'Английский', text: 'носитель'},
  { title: 'Русский', text: 'ТРКИ-2', },
  { title: "Гражданин США", text: '', },
  { title: "Местоположение", text: 'Москва, Россия', }
];

const Accomplishments = () => (
  <Section>
    <SectionTitle>Личные Достижения</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.title}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;
