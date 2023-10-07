import React from 'react';
import { S } from '../HeaderMenu_Styles';


export const Menu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
  return (
    <ul>
      {props.menuItems.map((item: string, index: number) => {
          return  <S.ListItem key={index}>
                    <S.Link href="">{item}</S.Link>
                  </S.ListItem>
      })}
    </ul>
  );
};
