import React from 'react';
import styled from 'styled-components';
import { Thema } from '../../../styles/Thema';


type ProjectMenuPropsType = {
  menuItems: Array<string>
}

export const ProjectMenu = (props: ProjectMenuPropsType) => {
  return (
    <StyledProjectMenu>
      <ul>
        {props.menuItems.map((item: string, index: number) => {
            return  <ListItem key={index}>
                      <Link href="">{item}</Link>
                    </ListItem>
          })}
      </ul>
    </StyledProjectMenu>
  );
};

const StyledProjectMenu = styled.nav`

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between; //because of width 100% and max-width
    max-width: 320px;
    width: 100%;
    border: 1px solid blue;
    margin: 0 auto;
  }

`

const Link = styled.a`
  font-size: 1.4rem;
  padding: 5px 20px;
`

const ListItem = styled.li`
  display: flex;
  height: 30px;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: ${Thema.colors.accent};
    transition: left 0.7s, background-color 0.7s;
  }

  &:hover::before {
    left: 0;
    width: 100%;
    background-color: ${Thema.colors.accent};
  }

  &:hover ${Link} {
    color: white;
    z-index: 1;
  }

`