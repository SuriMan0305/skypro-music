import { MenuItemComponent} from "../menu/MenuNav";
import React, { useEffect } from "react";
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
            <MenuItemComponent title="Главное" adress='/' />
            <MenuItemComponent title="Мой плейлист" adress='/favorites'/>
            <MenuItemComponent title="Выйти" adress='/login' />
          </S.MenuList>
        )}
      </S.NavMenu>
    </S.MainNav>
  );
};
