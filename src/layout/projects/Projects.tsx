import React from 'react';
import styled, {css} from 'styled-components';
import { SectionTitle } from '../../components/SectionTitle';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Project } from './project/Project';
import { Menu } from '../../components/menu/Menu';

const projectItems = ['All', 'LandingPage', 'Reach', 'Javascript']

export const Projects = () => {
  return (
    <StyledProjects>
      <SectionTitle>My Portfolio</SectionTitle>
      <Menu menuItems={projectItems}/>
      <FlexWrapper>
        <Project></Project>
        <Project></Project>
        <Project></Project>
      </FlexWrapper>

    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  min-height: 100vh;
  background-color: bisque;
`
