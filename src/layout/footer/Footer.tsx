import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Icon } from '../../components/icon/Icon';
import { Thema } from '../../styles/Thema';
import { Container } from '../../components/Container';


const iconsData = [
  {
    iconId: 'be',
    height: '40px',
    width: '40px',
    viewBox: '0 0 40px  40px'
  },
  {
    iconId: 'insta',
    height: '40px',
    width: '40px',
    viewBox: '0 0 40px  40px'
  },
  {
    iconId: 'linkedin',
    height: '40px',
    width: '40px',
    viewBox: '0 0 40px  40px'
  }
]

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper direction='column' align='center'>
          <ContactsWrapper>
            <FlexWrapper >
              <Icon iconId={'phone'} height={'24px'} width={'24px'} viewBox={'0 0 24px 24px'}/>
              <Text>375293652034</Text>
            </FlexWrapper>
            <Icon iconId={'vertline'} height={'35px'} width={'4px'} viewBox={'0 0 35px 4px'}/>
            <FlexWrapper>
              <Icon iconId={'mail'} height={'17px'} width={'24px'} viewBox={'0 0 17px 24px'}/>
              <Text>anastasijakoles@gmail.com</Text>
            </FlexWrapper>
          </ContactsWrapper>

          <SocialIconList>
            {iconsData.map((icon, index: number) => {

              return (
                <SocialIconItem key={index}>
                  <SolialIconLink>
                    <Icon iconId={icon.iconId} height={icon.height} width={icon.width} viewBox={icon.viewBox} />
                  </SolialIconLink>
                </SocialIconItem>
              )
              })}
          </SocialIconList>

          <Copyright>© 2023 Anastasiya Kalesnikava, All Rights Reserved.</Copyright>
        </FlexWrapper>
      </Container>
      </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${Thema.colors.accent};
`

const ContactsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 40px;

  @media ${Thema.media.mobile} {
    flex-direction: column;
    gap: 30px;

    ${FlexWrapper} {
      justify-content: center;
      align-items: center;
    }

    &:nth-child(2) {
      display: none;
    }

    & > svg {
      display: none;
    }
  }
`

const SocialIconList = styled.ul`
  display: flex;
  gap: 65px;
  list-style: none;
  margin: 38px 0 38px;
`

const Text = styled.p`
  font-size: 2rem;
  text-align: start;
  margin-left: 18px;
  color: ${Thema.colors.contactsTextColor};

`

const SocialIconItem = styled.li`

`

const SolialIconLink = styled.a`
  color: ${Thema.colors.contactsTextColor}

`

const Copyright = styled.small`
  color: ${Thema.colors.contactsTextColor};
  opacity: 50%;
  margin-bottom: 20px;
`