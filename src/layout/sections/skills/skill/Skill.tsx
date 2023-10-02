import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { Thema } from '../../../../styles/Thema';

type SkillPropsType = {
  iconId: string,
  title: string,
  text: string,
}

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <IconWrapper>
        <Icon iconId={props.iconId}></Icon>
      </IconWrapper>
      <SkillTitle>{props.title}</SkillTitle>
      <Text>{props.text}</Text>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  flex-direction: column;
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
  margin: 20px 0px 15px;
  font-size: 1.6rem;
  font-weight: 800;
  text-transform: uppercase;
`

const Text = styled.p`
  font-size: 1.4rem;
  text-align: center;
`
