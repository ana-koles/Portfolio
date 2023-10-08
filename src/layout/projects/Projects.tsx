import React from 'react';
import styled, {css} from 'styled-components';
import { SectionTitle } from '../../components/SectionTitle';
import { Project } from './project/Project';

import english from '../../assets/images/project1.webp';
import books from '../../assets/images/project2.webp';
import shelter from '../../assets/images/proejct32.webp'
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { ProjectMenu } from './projectMenu/ProjectMenu';
import { S } from './Projects_Styles';

const projectMenuItems = ['All', 'Landing', 'React', 'Javascript'];

const projectData = [
  {
    src: english,
    name: 'App For Learning Enlish for Kids',
    text: 'HTML, CSS, Javascript',
    link:'#',
  },
  {
    src: books,
    name: 'Bookshop',
    text: 'HTML, CSS, Javascript',
    link:'#',
  },
  {
    src: shelter,
    name: 'Shelter',
    text: 'HTML, CSS, Javascript',
    link:'#',
  }
]

export const Projects: React.FC = () => {
  return (
    <S.Projects>
      <Container>
        <SectionTitle>My Portfolio</SectionTitle>
        <ProjectMenu menuItems={projectMenuItems}/>

        <S.ProjectWrapper>

          {projectData.map((project, index: number) => {
            return (
              <Project src={project.src} name={project.name} text={project.text} link={project.link} key={index}></Project>
            )
          })}

        </S.ProjectWrapper>
        
        <Button styleType={'outlined'} type={'button'}>More  Projects</Button>
      </Container>
    </S.Projects>
  );
};
