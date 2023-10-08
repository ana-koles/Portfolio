import React from 'react';
import styled from 'styled-components';
import { Thema } from '../../../styles/Thema';
import { S } from './ProjectMenu_Styles';

type ProjectMenuPropsType = {
  menuItems: Array<string>
}

export const ProjectMenu = (props: ProjectMenuPropsType) => {
  return (
    <S.ProjectMenu>
      <ul>
        {props.menuItems.map((item: string, index: number) => {
            return  <S.ListItem key={index}>
                      <S.Link href="">{item}</S.Link>
                    </S.ListItem>
          })}
      </ul>
    </S.ProjectMenu>
  );
};