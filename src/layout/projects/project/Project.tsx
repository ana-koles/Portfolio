import React from 'react';
import styled from 'styled-components';
import { Label, LabelWrapper } from './label/Label';

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
      <HoverCover></HoverCover>
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
  opacity: 0;
  transition: opacity 0.3s;

`

const StyledProject = styled.div`
  position: relative;
  max-width: 930px;
  width: 100%;
  margin-bottom: 50px;
  overflow: hidden;

  &:hover ${HoverCover} {
    opacity: 1;
  }

  &:hover ${LabelWrapper} {
    transform: translateY(0);
  }
`

const Image = styled.img`
  width: 100%; //ширина по родителю
  max-height: 520px;
  object-fit: cover;
`