import React from "react";
import * as S from './SidebarStyles.js'
import { SideListBlock, SideListBlockLoading } from "./sideBarBlock/sideBlock.jsx";
import { useUserContext } from "../../context/userInfo.jsx";
const { useEffect, useState } = React;

export const SidePanel = () => {

  const {username} = useUserContext()

  const [seconds, setSeconds] = useState(0);

  const increase = () => {
    setSeconds(seconds + 1);
  };

  useEffect(() => {
    const TimerId = setInterval(() => {
      if (seconds < 1) {
        increase();
      }
    }, 1000);
    return () => {
      clearInterval(TimerId);
    };
  });

  if (seconds === 1) {
    return (
      <S.MainSidebar>
        <S.SidebarPersonal>
          <S.SidebarPersonalName>{ username }</S.SidebarPersonalName>
          <S.SidebarIcon>
            <svg alt="logout">
              <use xlinkHref="/img/icon/sprite.svg#logout" />
            </svg>
          </S.SidebarIcon>
        </S.SidebarPersonal>
        <SideListBlock />
      </S.MainSidebar>
    );
  } else {
    return (
      <S.MainSidebar>
        <S.SidebarPersonal>
          <S.SidebarPersonalName></S.SidebarPersonalName>
          <S.SidebarIcon className="sidebar__icon">
            <svg alt="logout">
              <use xlinkHref="/img/icon/sprite.svg#logout" />
            </svg>
          </S.SidebarIcon>
        </S.SidebarPersonal>
        <SideListBlockLoading />
      </S.MainSidebar>
    );
  }
};
