import React from 'react';
import styled from 'styled-components';
import {Menu} from '../../components/menu/Menu';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { MobileMenu } from './mobileMenu/MobileMenu';


const navItems = ['About', 'Portfolio', 'Skills', 'Let`s Talk']

export const Header = () => {
  return (
    <StyledHeader>
      <Container> {/* Container should limit content */}
        <FlexWrapper justify='center' align='center' wrap='wrap'>
          <Menu menuItems={navItems}/>
          <MobileMenu menuItems={navItems}/>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 90px;
`

