import React from 'react';
import styled, {css} from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';



export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <SkilsWrapper>
          <Skill iconId='css' title='CSS'></Skill>
          <Skill iconId='html' title='HTML'></Skill>
          <Skill iconId='react' title='React'></Skill>
          <Skill iconId='style' title='Style Components'></Skill>
          <Skill iconId='ts' title='Typesript'></Skill>
          <Skill iconId='web' title='Web Design' ></Skill>
        </SkilsWrapper>
      </Container>


    </StyledSkills>
  );
};



const StyledSkills = styled.section`
`

const SkilsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 80px;
`