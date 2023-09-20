import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { FlexWrapper } from '../../../../components/FlexWrapper';

type SkillPropsType = {
  iconId: string,
  title: string
}

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId}></Icon>
      <SkillTitle>{props.title}</SkillTitle>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  background-color: coral;
  width: 25%;
  display: flex;
  margin: 20px;
`

const SkillTitle = styled.h3`
  font-size: 16px;
  color: #1a1313;
`

