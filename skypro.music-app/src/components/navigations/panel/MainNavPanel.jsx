import { MenuItemComponent} from "../menu/MenuNav";
import React from "react";
import * as S from '../MenuStyles.js'

const { useState } = React;

export const NavPanel = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => setVisible(!visible);

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src="img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={toggleVisibility}>
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger>
      <S.NavMenu>
        {visible && (
          <S.MenuList>
            <MenuItemComponent title="Главное" />
            <MenuItemComponent title="Мой плейлист" />
            <MenuItemComponent title="Войти" adress='/authorization' />
          </S.MenuList>
        )}
      </S.NavMenu>
    </S.MainNav>
  );
};
