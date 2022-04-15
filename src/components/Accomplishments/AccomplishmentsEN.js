import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

const data = [
  { title: "English", text: 'Native'},
  { title: "Russian", text: 'Limited Working Proficiency', },
  { title: "US Citizen", text: '', },
  { title: "Location", text: 'Moscow, Russia', }
];

const AccomplishmentsEN = () => (
  <Section>
    <SectionTitle>Personal Information</SectionTitle>
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

export default AccomplishmentsEN;
