import React from 'react';
import { Menu } from '../menu/Menu';
import { S } from '../HeaderMenu_Styles';


type MobileMenuPropsType = {
  menuItems: Array<string>
}

export const MobileMenu = (props: MobileMenuPropsType) => {
  return (
    <S.StyledMobileMenu>

      <S.BurgerButton isOpen={false}>
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopup isOpen={false}>
        <Menu menuItems={props.menuItems}/>
      </S.MobileMenuPopup>

    </S.StyledMobileMenu>
  );
};