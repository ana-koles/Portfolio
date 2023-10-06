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

const HoverCover = styled.div`
  background-image: linear-gradient(200deg, rgba(139, 117, 117, 0.00) 1.58%, rgba(0, 0, 0, 0.90) 93.44%);
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: none;
  transition: opacity 0.5s;
`

const StyledProject = styled.div`
  position: relative;
  max-width: 930px;
  width: 100%;
  height: 480px;
  margin-bottom: 50px;
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
    margin-bottom: 40px;
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  transform: translateY(0px);
  object-fit: cover;
`