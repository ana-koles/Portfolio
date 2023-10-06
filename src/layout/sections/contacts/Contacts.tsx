import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Form } from './form/Form';
import { Container } from '../../../components/Container';
import { Thema } from '../../../styles/Thema';
import { font } from '../../../styles/Common';

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
  @media ${Thema.media.tablet} {
    ${FlexWrapper} {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`

const TextWrapper = styled.div`
  max-width: 45%;
  display: flex;
  flex-direction: column;

  @media ${Thema.media.tablet} {
    max-width: 100%;
  }

`

const ContactsTitle = styled.h4`
  /* ${font({fontFamily: `'Manrope', sans-serif`, weight: 600, color: Thema.colors.secondaryColor,  Fmin: 23, Fmax: 40})} */

  letter-spacing: 1px;
  font-weight: 600;
  color: white;
  font-size: 4rem;
  width: 90%;
  text-align: start;

  @media ${Thema.media.tablet} {
    font-size: 3rem;
  }

  @media ${Thema.media.mobile} {
    font-size: 2.3rem;
  }

`
const Link = styled.a`
 /*  ${font({fontFamily: `'Manrope', sans-serif`, weight: 600, color: Thema.colors.secondaryColor,  Fmin: 23, Fmax: 40})} */
  font-size: 4rem;
  font-weight: 600;
  color: white;
  display: block;
  margin-bottom: 10px;
  text-align: start;

  @media ${Thema.media.tablet} {
    font-size: 3rem;
  }

  @media ${Thema.media.mobile} {
    font-size: 2.3rem;
  }

  &:hover{
    text-decoration: underline;
  }
`

const Text = styled.p`
  margin-top: 13px;
  font-size: 1.6rem;
  text-align: start;
  color: ${Thema.colors.contactsTextColor};
  line-height: 1.3;

  @media ${Thema.media.mobile} {
    font-size: 1.4rem;
  }
`