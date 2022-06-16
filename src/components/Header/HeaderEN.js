import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const HeaderEN = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color: 'white', marginBottom: "20px"}}>
          <DiCssdeck size ="3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink href="https://rwnagy.github.io/#projects">Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#technologies">
          <NavLink href="https://rwnagy.github.io/#technologies">Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink href="https://rwnagy.github.io/#about" >About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
        <Link href="/">
          <NavLink href="https://rwnagy.github.io/" style={{marginBottom:"10px"}}>Русский</NavLink>
        </Link>
      <SocialIcons href="https://github.com/rwnagy">
        <AiFillGithub size="3rem" />
      </SocialIcons>
    </Div3>
    </Container>
);

export default HeaderEN;
