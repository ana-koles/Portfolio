import React, { useState } from 'react';
import styled, {css} from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';
import { Thema } from '../../../styles/Thema';

const skillsData = [
  {
    iconId: 'css',
    title: 'CSS',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
  },
  {
    iconId: 'html',
    title: 'HTML',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
  },
  {
    iconId: 'react',
    title: 'React',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
  },
  {
    iconId: 'style',
    title: 'Style Components',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
  },
  {
    iconId: 'ts',
    title: 'Typesript',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
  },
  {
    iconId: 'web',
    title: 'Web Design',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
  },
]

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap='wrap'>

          {skillsData.map( (skill, index: number) => {
            return <Skill iconId={skill.iconId} title={skill.title} text={skill.text} key={index}/>
          })}

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
