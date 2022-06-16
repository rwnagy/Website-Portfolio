import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const FooterEN = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+7-917-508-60-96">+7-917-508-60-96</LinkItem></LinkColumn>
          <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:nagyrw@gmail.com">nagyrw@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Contact Me</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/rwnagy">
        <AiFillGithub size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default FooterEN;