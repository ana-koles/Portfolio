import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Form } from './form/Form';

export const Contacts = () => {
  return (
    <StyledContacts>
      <FlexWrapper justify={'space-between'} align={'center'}>
        <TextWrapper>
          <ContactsTitle>I`m available for a exciting new project. Let`s Talk.</ContactsTitle>
          <Text>You can send me a message here OR contact me on any social networks. We can grab a coffee and talk it over a phone.</Text>
        </TextWrapper>
        <Form/>
      </FlexWrapper>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  min-height: 480px;
  background-color: #d5c1e8;
`

const TextWrapper = styled.div`
  max-width: 55%;
`

const ContactsTitle = styled.h4`
  font-size: 40px;
  text-align: start;
`

const Text = styled.p`
  font-size: 16px;
  text-align: start;
`