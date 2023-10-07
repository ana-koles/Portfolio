import React from 'react';
import { Menu } from '../menu/Menu';
import { S } from '../HeaderMenu_Styles';


type MenuPropsType = {
  menuItems: Array<string>
}

export const DesktopMenu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
  return (
    <S.StyledDesktopMenu>
      <Menu menuItems={props.menuItems}/>
    </S.StyledDesktopMenu>
  );
};


