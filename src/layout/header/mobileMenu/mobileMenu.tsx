import React from 'react';
import styled from 'styled-components';
import { Thema } from '../../../styles/Thema';
import { Button } from '../../../components/Button';


type MobileMenuPropsType = {
  menuItems: Array<string>
}

export const MobileMenu = (props: MobileMenuPropsType) => {
  return (
    <StyledMobileMenu>

      <BurgerButton>
        <span></span>

      </BurgerButton>

      <MobileMenuPopup>
        <ul>
          {props.menuItems.map((item: string, index: number) => {
              return  <ListItem key={index}>
                        <Link href="">{item}</Link>
                      </ListItem>
            })}
        </ul>
      </MobileMenuPopup>


    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
  height: 100%;

  @media ${Thema.media.mobile} {
    display: none;
  }
`

const BurgerButton = styled.button`
  position: fixed;
  width: 30px;
  height: 22px;
  right: 20px;
  top: 20px;

  span{
    display: block;
    width: 30px;
    height: 2px;
    color: ${Thema.colors.primaryBg};
    position: absolute;
    top: 0;
    left: 0;

    &::before {
      display: block;
      width: 20px;
      height: 2px;
      color: ${Thema.colors.primaryBg};
      position: absolute;
      transform: translateY(-10px);
    }

    &::after {
      display: block;
      width: 20px;
      height: 2px;
      color: ${Thema.colors.primaryBg};
      position: absolute;
      transform: translateY(10px);
    }
  }
`

const MobileMenuPopup = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  background-color: ${Thema.colors.accent};
  width: 320px;
  bottom: 0;
/*   right: 0; */
  z-index: 50;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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