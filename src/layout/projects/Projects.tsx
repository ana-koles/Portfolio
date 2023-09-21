import React from 'react';
import styled, {css} from 'styled-components';
import { SectionTitle } from '../../components/SectionTitle';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Project } from './project/Project';
import { Menu } from '../../components/menu/Menu';

import english from '../../assets/images/project1.webp';
import books from '../../assets/images/project2.webp';
import shelter from '../../assets/images/proejct32.webp'
import { Button } from '../../components/Button';

const projectItems = ['All', 'LandingPage', 'Reach', 'Javascript']

export const Projects = () => {
  return (
    <StyledProjects>
      <SectionTitle>My Portfolio</SectionTitle>
      <Menu menuItems={projectItems}/>
      <FlexWrapper direction='column' align='center'>
        <Project src={english} name={'App For Learning Enlish for Kids'} text={'HTML, CSS, Javascript'} link='#'></Project>
        <Project src={books} name={'Bookshop'} text={'HTML, CSS, Javascript'} link='#'></Project>
        <Project src={shelter} name={'Shelter'} text={'HTML, CSS, Javascript'} link='#'></Project>
      </FlexWrapper>
      <Button styleType={'outlined'} type={'button'}>More  Projects</Button>

    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  min-height: 100vh;
  background-color: bisque;
`


