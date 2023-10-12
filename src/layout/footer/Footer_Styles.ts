import styled from 'styled-components';
import { Thema } from '../../styles/Thema';
import { FlexWrapper } from '../../components/FlexWrapper';


const Footer = styled.footer`
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
  color: ${Thema.colors.contactsTextColor};
`

const Copyright = styled.small`
  color: ${Thema.colors.contactsTextColor};
  opacity: 50%;
  margin-bottom: 20px;
`

export const S = {
  Footer,
  ContactsWrapper,
  SocialIconList,
  Text,
  SocialIconItem,
  SolialIconLink,
  Copyright
}