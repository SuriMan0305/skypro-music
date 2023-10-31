import { NavLink, useParams } from "react-router-dom";
import * as S from "../SidebarStyles";
import { COLLECTIONS } from "../../../constants";

export const SideListBlock = () => {
  const params = useParams()
  const useCollection = COLLECTIONS.find((collection) => collection.id === Number(params.id))
  return (
    <S.SidebarBlock>
      <S.SidebarList>
        <S.SidebarItem>
          <NavLink to={`/category/1`}>
              <S.SidebarImg src="/img/playlist01.png" alt="day's playlist" />
          </NavLink>
        </S.SidebarItem>
        <S.SidebarItem>
          <NavLink to={`/category/2`}>
              <S.SidebarImg src="/img/playlist02.png" alt="100 dance hits" />
          </NavLink>
        </S.SidebarItem>
        <S.SidebarItem>
          <NavLink to={`/category/3`}>
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
