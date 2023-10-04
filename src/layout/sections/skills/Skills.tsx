import React, { useState } from 'react';
import styled, {css} from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';
import { Thema } from '../../../styles/Thema';

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

          <Skill iconId='css' title='CSS' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'></Skill>
          <Skill iconId='html' title='HTML' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'></Skill>
          <Skill iconId='react' title='React' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'></Skill>
          <Skill iconId='style' title='Style Components' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'></Skill>
          <Skill iconId='ts' title='Typesript' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'></Skill>
          <Skill iconId='web' title='Web Design' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'></Skill>

        </FlexWrapper>
      </Container>


    </StyledSkills>
  );
};



const StyledSkills = styled.section`
  ${FlexWrapper} {
    gap: 80px;
  }

  @media ${Thema.media.tablet} {
    ${FlexWrapper} {
      gap: 0px;
    }
  }
`
