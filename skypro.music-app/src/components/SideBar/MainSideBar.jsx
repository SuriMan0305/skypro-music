import React from "react";
import * as S from './SidebarStyles.js'
const { useEffect, useState } = React;

export const SidePanel = (props) => {
  const [seconds, setSeconds] = useState(0);

  const increase = () => {
    setSeconds(seconds + 1);
  };

  useEffect(() => {
    const TimerId = setInterval(() => {
      if (seconds < 3) {
        increase();
      }
    }, 1000);
    return () => {
      clearInterval(TimerId);
    };
  });

  if (seconds === 3) {
    return (
      <S.MainSidebar>
        <S.SidebarPersonal>
          <S.SidebarPersonalName>levchenko Kirill</S.SidebarPersonalName>
          <S.SidebarIcon>
            <svg alt="logout">
              <use xlinkHref="img/icon/sprite.svg#logout" />
            </svg>
          </S.SidebarIcon>
        </S.SidebarPersonal>
        {props.contain}
      </S.MainSidebar>
    );
  } else {
    return (
      <S.MainSidebar>
        <S.SidebarPersonal>
          <S.SidebarPersonalName>loading...</S.SidebarPersonalName>
          <S.SidebarIcon className="sidebar__icon">
            <svg alt="logout">
              <use xlinkHref="img/icon/sprite.svg#logout" />
            </svg>
          </S.SidebarIcon>
        </S.SidebarPersonal>
        {props.contain}
      </S.MainSidebar>
    );
  }
};
