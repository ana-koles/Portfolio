import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Form } from './form/Form';
import { Icon } from '../../../components/icon/Icon';

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={'column'} justify='center' align={'center'}>
        <FlexWrapper justify={'space-between'} align={'center'}>
          <TextWrapper>
            <FooterTitle>I`m available for a exciting new project. Let`s Talk.</FooterTitle>
            <Text>You can send me a message here OR contact me on any social networks. We can grab a coffee and talk it over a phone.</Text>
          </TextWrapper>
          <Form/>
        </FlexWrapper>

        <ContactsWrapper>
          <FlexWrapper>
            <Icon iconId={'phone'} height={'24px'} width={'24px'} viewBox={'0 0 24px 24px'}/>
            <Text>375293652034</Text>
          </FlexWrapper>
          <Icon iconId={'vertline'}/>
          <FlexWrapper>
            <Icon iconId={'mail'} height={'24px'} width={'24px'} viewBox={'0 0 21px 21px'}/>
            <Text>anastasijakoles@gmail.com</Text>
          </FlexWrapper>
        </ContactsWrapper>

        <SocialIconList>
          <SocialIconItem>
            <SolialIconLink>
              <Icon iconId={'be'} height={'35px'} width={'35px'} viewBox={'0 0 35px 35px'}/>
            </SolialIconLink>
          </SocialIconItem>

          <SocialIconItem>
            <SolialIconLink>
              <Icon iconId={'insta'} height={'35px'} width={'35px'} viewBox={'0 0 35px 35px'}/>
            </SolialIconLink>
          </SocialIconItem>

          <SocialIconItem>
            <SolialIconLink>
              <Icon iconId={'linkedin'} height={'35px'} width={'35px'} viewBox={'0 0 35px 35px'}/>
            </SolialIconLink>
          </SocialIconItem>

        </SocialIconList>

        <Copyright>© 2023 Anastasiya Kalesnikava, All Rights Reserved.</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.section`
  min-height: 680px;
  background-color: #d5c1e8;
`

const TextWrapper = styled.div`
  max-width: 55%;
`

const FooterTitle = styled.h4`
  font-size: 40px;
  text-align: start;
`

const Text = styled.p`
  font-size: 16px;
  text-align: start;
`

const ContactsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
`

const SocialIconList = styled.ul`
  display: flex;
  gap: 65px;

`

const SocialIconItem = styled.li`

`

const SolialIconLink = styled.a`

`

const Copyright = styled.small`

`