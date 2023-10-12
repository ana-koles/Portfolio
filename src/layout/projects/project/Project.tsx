import React from 'react';
import { Label } from './label/Label';
import { S } from '../Projects_Styles';

type ProjectPropsType = {
  name: string,
  text: string,
  link: string,
  src: string
}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
  return (
    <S.Project>
      <S.Image src={props.src}/>
      <Label name={props.name} text={props.text} link={props.link}></Label>
    </S.Project>
  );
};
