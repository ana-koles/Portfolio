import React from 'react';
import styled from 'styled-components';
import { Label } from './label/Label';

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
  max-width: 930px;
  width: 100%;
  margin-bottom: 50px;

`

const Image = styled.img`
  width: 100%; //ширина по родителю
  max-height: 520px;
  object-fit: cover;
`