import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Form } from './form/Form';
import { Container } from '../../../components/Container';
import { Thema } from '../../../styles/Thema';

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <FlexWrapper justify={'space-between'} >
          <TextWrapper>
            <ContactsTitle>I`m available for a exciting new project.</ContactsTitle>
            <Link href='#'>Let`s Talk.</Link>
            <Text>You can send me a message here OR contact me on any social networks. We can grab a coffee and talk it over a phone.</Text>
          </TextWrapper>
          <Form/>
        </FlexWrapper>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`

`

const TextWrapper = styled.div`
  max-width: 45%;
  display: flex;
  flex-direction: column;
`

const ContactsTitle = styled.h4`
  width: 90%;
  font-size: 4rem;
  text-align: start;
  font-weight: 600;
  color: white;
`
const Link = styled.a`
  font-size: 4rem;
  text-align: start;
  font-weight: 600;
  color: white;
  display: block;
  margin-bottom: 10px;

  &:hover{
    text-decoration: underline;
  }
`

const Text = styled.p`
  margin-top: 13px;
  font-size: 1.6rem;
  text-align: start;
  color: ${Thema.colors.contactsTextColor};
  line-height: 27px;
`