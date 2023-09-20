import React from 'react';
import styled from 'styled-components';
import {Menu} from '../../components/menu/Menu';

const navItems = ['About', 'Portfolio', 'Skills', 'Let`s Talk']

export const Header = () => {
  return (
    <StyledHeader>
      <Menu menuItems={navItems}/>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  background-color: #b0d37b;
  height: 90px;
  justify-content: center;
  align-items: center;
`

