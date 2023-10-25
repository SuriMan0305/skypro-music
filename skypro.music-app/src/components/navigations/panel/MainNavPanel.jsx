import { MenuItemComponent} from "../menu/MenuNav";
import React from "react";
import * as S from '../MenuStyles'

const { useState } = React;

export const NavPanel = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => setVisible(!visible);

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src="/img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={toggleVisibility}>
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger>
      <S.NavMenu>
        {visible && (
          <S.MenuList>
            <MenuItemComponent title="Главное" adress='/main' />
            <MenuItemComponent title="Мой плейлист" adress='/myplaylist'/>
            <MenuItemComponent title="Выйти" adress='/' />
          </S.MenuList>
        )}
      </S.NavMenu>
    </S.MainNav>
  );
};
