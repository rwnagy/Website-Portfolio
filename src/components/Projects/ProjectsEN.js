import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projectsEN } from '../../constants/constants';

const ProjectsEN = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projectsEN.map(({ id, image, title, description, tags, source, visit}) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
            <UtilityList>
              <ExternalLinks href={source}>Code</ExternalLinks>
              <ExternalLinks href={visit}>Source</ExternalLinks>
            </UtilityList>
          </div>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default ProjectsEN;