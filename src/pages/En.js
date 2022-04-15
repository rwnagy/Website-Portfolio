import AccomplishmentsEN from '../components/Accomplishments/AccomplishmentsEN';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import HeroEN from '../components/Hero/HeroEN';
import ProjectsEN from '../components/Projects/ProjectsEN';
import TechnologiesEN from '../components/Technologies/TechnologiesEN';
import TimelineEN from '../components/TimeLine/TimeLineEN';
import { LayoutEN } from '../layout/LayoutEN';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <LayoutEN>
      <Section grid>
        <HeroEN />
        <BgAnimation />
      </Section>
      <ProjectsEN />
      <TechnologiesEN />
      <TimelineEN />
      <AccomplishmentsEN />
    </LayoutEN>
  );
};

export default Home;
