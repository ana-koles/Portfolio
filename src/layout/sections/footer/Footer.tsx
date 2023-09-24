import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Icon } from '../../../components/icon/Icon';

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction='column' align='center'>
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
  min-height: 200px;
  background-color: #ded1eb;
`

const ContactsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
`

const SocialIconList = styled.ul`
  display: flex;
  gap: 65px;
  list-style: none;
`

const Text = styled.p`
  font-size: 16px;
  text-align: start;
`

const SocialIconItem = styled.li`

`

const SolialIconLink = styled.a`

`

const Copyright = styled.small`

`