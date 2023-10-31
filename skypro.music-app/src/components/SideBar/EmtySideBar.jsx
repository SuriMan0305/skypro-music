import React from "react";
import * as S from './SidebarStyles.js'

export const SidePanelEmpty = () => {
    return (
      <S.MainSidebar>
        <S.SidebarPersonal>
          <S.SidebarPersonalName></S.SidebarPersonalName>
          <S.SidebarIcon>
            <svg alt="logout">
              <use xlinkHref="/img/icon/sprite.svg#logout" />
            </svg>
          </S.SidebarIcon>
        </S.SidebarPersonal>
      </S.MainSidebar>
    );
};