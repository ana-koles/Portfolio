import React from 'react';
import styled, {css} from 'styled-components';
import { Thema } from '../../../styles/Thema';



type MobileMenuPropsType = {
  menuItems: Array<string>
}

export const MobileMenu = (props: MobileMenuPropsType) => {
  return (
    <StyledMobileMenu>

      <BurgerButton isOpen={true}>
        <span></span>
      </BurgerButton>

      <MobileMenuPopup isOpen={true}>
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
  display: none;

  /* @media ${Thema.media.mobile} {
    display: block;
  } */
`

const BurgerButton = styled.button<{isOpen: boolean}>`
  position: fixed;
  width: 50px;
  height: 50px;
  right: 0px;
  top: 0px;
  z-index: 100;
  background-color: transparent;
  border: none;

  span{
    display: block;
    width: 30px;
    height: 2px;
    background-color: ${Thema.colors.primaryBg};
    position: absolute;
    top: 30px;
    bottom: 10px;

    ${props => props.isOpen && css<{isOpen:boolean}>`
      background-color: rgba(255, 255, 255, 0);
    `}

    &::before {
      content: '';
      display: block;
      width: 20px;
      height: 2px;
      background-color: ${Thema.colors.primaryBg};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{isOpen:boolean}>`
        transform: rotate(-45deg) translateY(0);
        width: 30px;
      `
      }
    }

    &::after {
      content: '';
      display: block;
      width: 20px;
      height: 2px;
      background-color: ${Thema.colors.primaryBg};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{isOpen:boolean}>`
        transform: rotate(45deg) translateY(0);
        width: 30px;
      `
      }
    }
  }
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
  position: fixed;
  top: 0;
  background-color: ${Thema.colors.accent};
  width: 320px;
  bottom: 0;
  right: 0;
  z-index: 50;

  display: none; //value by default

  ${props => props.isOpen && css<{isOpen: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `
  }


  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const Link = styled.a`
  font-size: 16px;

  @media ${Thema.media.mobile} {
    color: ${Thema.colors.secondaryColor};
    font-size: 2rem;
  }
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

  @media ${Thema.media.mobile} {
    margin-bottom: 30px;

    &::before {
    content: '';
    background-color: ${Thema.colors.secondaryColor};
  }

    &:hover::before {
      left: 0;
      width: 100%;
      background-color: ${Thema.colors.secondaryColor};
    }

    &:hover ${Link} {
      color: ${Thema.colors.text};
      z-index: 1;
    }
  }

`