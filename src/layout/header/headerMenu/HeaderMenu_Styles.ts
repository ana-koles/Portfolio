import styled, {css} from 'styled-components';
import { Thema } from '../../../styles/Thema';

//Menu

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

//Desktop Menu

const StyledDesktopMenu = styled.nav`
  height: 100%;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
`

//Mobile Menu

const StyledMobileMenu = styled.nav`
`

const BurgerButton = styled.button<{isOpen: boolean}>`
  position: absolute;
  width: 50px;
  height: 50px;
  right: 0px;
  top: 10px;
  z-index: 100;
  background-color: transparent;
  border: none;

  ${props => props.isOpen && css<{isOpen: boolean}>`
    position: fixed;
  `
  }


  span {
    display: block;
    width: 30px;
    height: 2px;
    background-color: ${Thema.colors.text};
    border-radius: 1px;
    position: absolute;
    top: 30px;
    bottom: 10px;

    ${props => props.isOpen && css<{isOpen: boolean}>`
      background-color: rgba(255, 255, 255, 0);
    `}

    &::before {
      content: '';
      display: block;
      width: 20px;
      height: 2px;
      background-color: ${Thema.colors.text};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(-45deg) translateY(0);
        width: 30px;
        background-color: ${Thema.colors.secondaryColor};
      `
      }
    }

    &::after {
      content: '';
      display: block;
      width: 20px;
      height: 2px;
      background-color: ${Thema.colors.text};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{isOpen:boolean}>`
        transform: rotate(45deg) translateY(0);
        width: 30px;
        background-color: ${Thema.colors.secondaryColor};
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

    li + li {
      margin-top: 20px;
    }
  }
`

export const S = {
  Link,
  ListItem,
  StyledDesktopMenu,
  StyledMobileMenu,
  BurgerButton,
  MobileMenuPopup
}