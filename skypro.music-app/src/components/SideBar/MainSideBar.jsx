import React from "react";
import * as S from './SidebarStyles.js'
const { useEffect, useState } = React;

export const SidePanel = () => {
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
        <S.SidebarBlock>
          <S.SidebarList>
            <S.SidebarItem>
              <S.SidebarLink href="#!">
                <S.SidebarImg
                  src="img/playlist01.png"
                  alt="day's playlist"
                />
              </S.SidebarLink>
            </S.SidebarItem>
            <S.SidebarItem>
              <S.SidebarLink href="#!">
                <S.SidebarImg
                  src="img/playlist02.png"
                  alt="day's playlist"
                />
              </S.SidebarLink>
            </S.SidebarItem>
            <S.SidebarItem>
              <S.SidebarLink href="#!">
                <S.SidebarImg
                  src="img/playlist03.png"
                  alt="day's playlist"
                />
              </S.SidebarLink>
            </S.SidebarItem>
          </S.SidebarList>
        </S.SidebarBlock>
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
        <S.SidebarBlock>
          <S.SidebarList>
            <S.SidebarLoading>
              <S.Preload></S.Preload>
            </S.SidebarLoading>
            <S.SidebarLoading>
              <S.Preload></S.Preload>
            </S.SidebarLoading>
            <S.SidebarLoading>
              <S.Preload></S.Preload>
            </S.SidebarLoading>
          </S.SidebarList>
        </S.SidebarBlock>
      </S.MainSidebar>
    );
  }
};
