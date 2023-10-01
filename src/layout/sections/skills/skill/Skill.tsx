import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { Thema } from '../../../../styles/Thema';

type SkillPropsType = {
  iconId: string,
  title: string
}

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <IconWrapper>
        <Icon iconId={props.iconId}></Icon>
      </IconWrapper>
      <SkillTitle>{props.title}</SkillTitle>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
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
  font-size: 16px;
  margin-left: 40px;
  font-size: 16px;
  font-weight: 800;
  text-transform: uppercase;
`

