import styled from 'styled-components';
import { Thema } from '../../../styles/Thema';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { font } from '../../../styles/Common';

const Contacts = styled.section`
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
  color: ${Thema.colors.secondaryColor};
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
  font-size: 4rem;
  font-weight: 600;
  color: ${Thema.colors.secondaryColor};
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
  line-height: 2;

  @media ${Thema.media.tablet} {
    padding-right: 100px;
  }

  @media ${Thema.media.mobile} {
    font-size: 1.4rem;
    padding-right: 0px;
  }
`

export const S = {
  Contacts,
  TextWrapper,
  ContactsTitle,
  Link,
  Text
}