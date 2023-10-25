import { NavLink } from "react-router-dom";
import * as S from "../SidebarStyles";

export const SideListBlock = () => {
  return (
    <S.SidebarBlock>
      <S.SidebarList>
        <S.SidebarItem>
          <NavLink to={"/category1/"}>
            <S.SidebarLink href="#!">
              <S.SidebarImg src="/img/playlist01.png" alt="day's playlist" />
            </S.SidebarLink>
          </NavLink>
        </S.SidebarItem>
        <S.SidebarItem>
          <NavLink to={"/category2/"}>
            <S.SidebarLink href="#!">
              <S.SidebarImg src="/img/playlist02.png" alt="100 dance hits" />
            </S.SidebarLink>
          </NavLink>
        </S.SidebarItem>
        <S.SidebarItem>
          <NavLink to={'/category3/'}>
            <S.SidebarLink href="#!">
              <S.SidebarImg src="/img/playlist03.png" alt="indy charge" />
            </S.SidebarLink>
          </NavLink>
        </S.SidebarItem>
      </S.SidebarList>
    </S.SidebarBlock>
  );
};

export const SideListBlockLoading = () => {
  return (
    <S.SidebarBlock>
      <S.SidebarList>
        <S.SidebarLoading>
          <S.Preload />
        </S.SidebarLoading>
        <S.SidebarLoading>
          <S.Preload />
        </S.SidebarLoading>
        <S.SidebarLoading>
          <S.Preload />
        </S.SidebarLoading>
      </S.SidebarList>
    </S.SidebarBlock>
  );
};
