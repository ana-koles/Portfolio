import React from 'react';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Form } from './form/Form';
import { Container } from '../../../components/Container';
import { S } from './Contacts_Styles';

export const Contacts: React.FC = () => {
  return (
    <S.Contacts>
      <Container>
        <FlexWrapper justify={'space-between'} >
          <S.TextWrapper>
            <S.ContactsTitle>I`m available for a exciting new project.</S.ContactsTitle>
            <S.Link href='#'>Let`s Talk.</S.Link>
            <S.Text>You can send me a message here OR contact me on any social networks. We can grab a coffee and talk it over a phone.</S.Text>
          </S.TextWrapper>
          <Form/>
        </FlexWrapper>
      </Container>
    </S.Contacts>
  );
};
