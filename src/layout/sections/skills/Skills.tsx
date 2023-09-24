import React from 'react';
import styled, {css} from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';



export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>My Skills</SectionTitle>
      <FlexWrapper wrap='wrap' justify='space-around' align='center'>
        <Skill iconId='css' title='CSS'></Skill>
        <Skill iconId='html' title='HTML'></Skill>
        <Skill iconId='react' title='React'></Skill>
        <Skill iconId='style' title='Style Components'></Skill>
        <Skill iconId='ts' title='Typesript'></Skill>
        <Skill iconId='web' title='Web Design' ></Skill>
      </FlexWrapper>

    </StyledSkills>
  );
};



const StyledSkills = styled.section`
  min-height: 570px;
  background-color: bisque;

`