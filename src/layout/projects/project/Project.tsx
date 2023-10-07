import React from 'react';
import styled from 'styled-components';
import { Label, LabelWrapper } from './label/Label';
import { Thema } from '../../../styles/Thema';

type ProjectPropsType = {
  name: string,
  text: string,
  link: string,
  src: string
}

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <Image src={props.src}/>
      <Label name={props.name} text={props.text} link={props.link}></Label>
    </StyledProject>
  );
};

const StyledProject = styled.div`
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