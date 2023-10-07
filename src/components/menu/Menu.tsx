import React from 'react';
import styled from 'styled-components';
import { Thema } from '../../styles/Thema';

type MenuPropsType = {
  menuItems: Array<string>
}

export const Menu = (props: MenuPropsType) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((item: string, index: number) => {
            return  <ListItem key={index}>
                      <Link href="">{item}</Link>
                    </ListItem>
          })}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  height: 100%;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  @media ${Thema.media.mobile} {
    display: none;
  }
`

const Link = styled.a`
  font-size: 16px;
`

const ListItem = styled.li`
  display: flex;
  height: 40px;
  min-width: 100px;
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