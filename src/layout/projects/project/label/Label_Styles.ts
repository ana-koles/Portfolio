import styled from 'styled-components';
import { Thema } from '../../../../styles/Thema';

export const LabelWrapper = styled.div`
  position: absolute;
  max-width: 495px;
  width: 100%;
  padding: 20px 20px;
  background-color: white;
  bottom: 0;
  z-index: 10;
  transform: translateY(100%);
  transition: .5s;

  @media ${Thema.media.tablet} {
    max-width: 428px;
  }

  @media ${Thema.media.mobile} {
    max-width: 428px;
    padding: 10px 10px;
  }

`
const ProjectName = styled.h4`
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: capitalize;
  margin-bottom: 10px;

  @media ${Thema.media.mobile} {
    font-size: 1.4rem;
    margin-bottom: 5px;
  }
`

const Text = styled.p`
  color: ${Thema.colors.linkColor};
  font-size: 1.4rem;

  @media ${Thema.media.mobile} {
    font-size: 1.2rem;
  }
`

const Link = styled.a`
  color: ${Thema.colors.linkColor};
  font-size: 1.4rem;
  letter-spacing: 1.4px;
  text-transform: capitalize;

  &:hover {
    text-decoration: underline;
  }

  @media ${Thema.media.mobile} {
    font-size: 1.2rem;
  }
`

export const S = {
  LabelWrapper,
  ProjectName,
  Text,
  Link

}