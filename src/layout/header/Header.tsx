import React from 'react';
import {DesktopMenu} from './headerMenu/desktopMenu/DesktopMenu';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { MobileMenu } from './headerMenu/mobileMenu/MobileMenu';
import { S } from './Header_Styles'


const navItems = ['About', 'Portfolio', 'Skills', 'Let`s Talk']

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 576;

React.useEffect(() => {
  const handleWindowResize = () => setWidth(window.innerWidth)
  window.addEventListener("resize", handleWindowResize);

  return () => window.removeEventListener("resize", handleWindowResize);
}, []);

  return (
    <S.Header>
      <Container> {/* Container should limit content */}
        <FlexWrapper justify='center' align='center' wrap='wrap'>

         {/*  if width is less than breakpoint, draw Mobilemenu, else - DesktopMenu */}

          {width < breakpoint ? <MobileMenu menuItems={navItems}/> : <DesktopMenu menuItems={navItems}/>}

        </FlexWrapper>
      </Container>
    </S.Header>
  );
};


