import { useUserContext } from '../../../../context/userInfo';
import * as S from '../../../SideBar/SidebarStyles'

export const MyPlaylistSide = () => {
  const {username} = useUserContext()
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
    </S.MainSidebar>
  );
}