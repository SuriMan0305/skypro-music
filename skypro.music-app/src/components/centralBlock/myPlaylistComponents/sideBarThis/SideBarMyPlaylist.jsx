import { NavLink } from "react-router-dom";
import { useUserContext } from "../../../../context/userInfo";
import * as S from "../../../SideBar/SidebarStyles";

export const MyPlaylistSide = () => {
  const { username } = useUserContext();
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{username}</S.SidebarPersonalName>
        <NavLink to={"/login"}>
          <S.SidebarIcon
            onClick={() => {
              localStorage.removeItem("idUser");
            }}>
            <svg alt="logout">
              <use xlinkHref="/img/icon/sprite.svg#logout" />
            </svg>
          </S.SidebarIcon>
        </NavLink>
      </S.SidebarPersonal>
    </S.MainSidebar>
  );
};
