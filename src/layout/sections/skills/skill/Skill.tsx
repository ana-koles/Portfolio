import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import { S } from '../Skills_Styles';

type SkillPropsType = {
  iconId: string,
  title: string,
  text: string,
}

export const Skill = (props: SkillPropsType) => {
  return (
    <S.StyledSkill>
      <S.IconWrapper>
        <Icon iconId={props.iconId}></Icon>
      </S.IconWrapper>
      <S.SkillTitle>{props.title}</S.SkillTitle>
      <S.Text>{props.text}</S.Text>
    </S.StyledSkill>
  );
};

