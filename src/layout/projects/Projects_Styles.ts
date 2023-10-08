import styled, {css} from 'styled-components';
import { Thema } from '../../styles/Thema';
import { SectionTitle } from '../../components/SectionTitle';
import { LabelWrapper } from './project/label/Label_Styles';


//Projects

const Projects = styled.section`

  button {
    width: 175px;
    height: 57px;
  }

  @media ${Thema.media.mobile} {
    button {
      width: 170px;
      height: 50px;
    }
  }

  ${SectionTitle} {
    margin-bottom: 37px;
  }
`
const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  @media ${Thema.media.mobile} {
    margin-top: 30px;
  }
`

// Project

const Project = styled.div`
  position: relative;
  max-width: 930px;
  width: 100%;
  height: 480px;
  margin-bottom: 70px;
  overflow: hidden;
  z-index: 0;

  &:hover  {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.30);
      backdrop-filter: blur(4px);
      z-index: 5;
    }

    ${LabelWrapper} {
      transform: translateY(0);
    }
  }


  @media ${Thema.media.tablet} {
    max-height: 360px;
  }

  @media ${Thema.media.mobile} {
    max-height: 150px;
    margin-bottom: 30px;
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  transform: translateY(20px);
  object-fit: cover;
  aspect-ratio: 2 / 1;
`


export const S = {
  Projects,
  ProjectWrapper,
  Project,
  Image
}