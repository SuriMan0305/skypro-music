import { NavLink } from "react-router-dom";
import * as S from "../SidebarStyles";
import { CATEGORIES } from "../../../constants";

export const SideListBlock = ({categories = CATEGORIES}) => {
  return (
    <S.SidebarBlock>
      <S.SidebarList>
        <S.SidebarItem>
          <NavLink to={`/category/${categories[0].id}`}>
              <S.SidebarImg src="/img/playlist01.png" alt="day's playlist" />
          </NavLink>
        </S.SidebarItem>
        <S.SidebarItem>
          <NavLink to={`/category/${categories[1].id}`}>
              <S.SidebarImg src="/img/playlist02.png" alt="100 dance hits" />
          </NavLink>
        </S.SidebarItem>
        <S.SidebarItem>
          <NavLink to={`/category/${categories[2].id}`}>
              <S.SidebarImg src="/img/playlist03.png" alt="indy charge" />
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
