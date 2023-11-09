import React from "react";
import * as S from "./SidebarStyles.js";
import { SideListBlock } from "./sideBarBlock/sideBlock.jsx";
import { useUserContext } from "../../context/userInfo.jsx";
import { NavLink } from "react-router-dom";
const { useEffect, useState } = React;

export const SidePanel = () => {
  const { username } = useUserContext();

  const [seconds, setSeconds] = useState(0);

  const increase = () => {
    setSeconds(seconds + 1);
  };

  useEffect(() => {}, []);

  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{username}</S.SidebarPersonalName>
        <NavLink to={'/login'}>
          <S.SidebarIcon onClick={() => {
            localStorage.removeItem('idUser')
          }}>
            <svg alt="logout">
              <use xlinkHref="/img/icon/sprite.svg#logout" />
            </svg>
          </S.SidebarIcon>
        </NavLink>
      </S.SidebarPersonal>
      <SideListBlock />
    </S.MainSidebar>
  );
};
