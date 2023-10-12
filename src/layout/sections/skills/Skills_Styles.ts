import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Thema } from '../../../styles/Thema';

//Skills

const Skills = styled.section`
  padding-bottom: 0px;
  ${FlexWrapper} {
    gap: 80px;
  }


  @media ${Thema.media.tablet} {
    ${FlexWrapper} {
      gap: 0px;
    }
  }
`

//Skill

const StyledSkill = styled.div`
  width: 285px;
  padding: 0 20px 60px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media ${Thema.media.mobile} {
    padding: 0 0 60px;
  }
`

const IconWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border: 1px solid ${Thema.colors.accent};
  display: flex;
  justify-content: center;
  align-items: center;
`

const SkillTitle = styled.h3`
  margin: 20px 0px 15px;
  font-size: 1.6rem;
  font-weight: 800;
  text-transform: uppercase;
`

const Text = styled.p`
  font-size: 1.4rem;
  text-align: center;
`

export const S = {
  Skills,
  StyledSkill,
  IconWrapper,
  SkillTitle,
  Text
}