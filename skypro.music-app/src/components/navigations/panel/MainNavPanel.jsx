import "../nav.css";
import { NavMenu } from "../menu/MenuNav";
import React from "react";
import styled from 'styled-components'

const StyledMainNav = styled.nav`
  width: 244px;
  background-color: #181818;
  padding: 20px 0 20px 36px;
`

const { useState } = React;

export const NavPanel = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => setVisible(!visible);

  return (
    <StyledMainNav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>
      <div className="nav__burger burger" onClick={toggleVisibility}>
        <span className="burger__line" />
        <span className="burger__line" />
        <span className="burger__line" />
      </div>
      <div className="nav__menu menu">
        {visible && (
          <ul className="menu__list">
            <NavMenu title="Главное" />
            <NavMenu title="Мой плейлист" />
            <NavMenu title="Войти" adress="../signin.html" />
          </ul>
        )}
      </div>
    </StyledMainNav>
  );
};
