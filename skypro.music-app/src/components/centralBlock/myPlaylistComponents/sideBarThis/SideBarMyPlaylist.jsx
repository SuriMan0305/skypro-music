import * as S from '../../../SideBar/SidebarStyles'

export const MyPlaylistSide = () => {

  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName></S.SidebarPersonalName>
        <S.SidebarIcon>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
    </S.MainSidebar>
  );
}