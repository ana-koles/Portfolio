import React, { useState } from 'react';
import styled, {css} from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';

const data = [
  {
    iconId: 'css',
    title: 'CSS'
  },
  {
    iconId: 'html',
    title: 'HTML'
  },
]

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap='wrap' justify='space-between'>
          <Skill iconId='css' title='CSS'></Skill>
          <Skill iconId='html' title='HTML'></Skill>
          <Skill iconId='react' title='React'></Skill>
          <Skill iconId='style' title='Style Components'></Skill>
          <Skill iconId='ts' title='Typesript'></Skill>
          <Skill iconId='web' title='Web Design' ></Skill>
          
        </FlexWrapper>
      </Container>


    </StyledSkills>
  );
};



const StyledSkills = styled.section`
  ${FlexWrapper} {
    padding-top: 50px;
    gap: 80px;
  }
`
