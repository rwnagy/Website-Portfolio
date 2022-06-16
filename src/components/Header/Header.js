import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
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
          <NavLink href="https://rwnagy.github.io/#projects">Проекты</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#technologies">
          <NavLink href="https://rwnagy.github.io/#technologies">Стек</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink href="https://rwnagy.github.io/#about">Обо мне</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
        <Link href="/En">
          <NavLink href="https://rwnagy.github.io/En" style={{marginBottom:"10px"}}>English</NavLink>
        </Link>
      <SocialIcons href="https://github.com/rwnagy">
        <AiFillGithub size="3rem" />
      </SocialIcons>
    </Div3>
    </Container>
);

export default Header;
