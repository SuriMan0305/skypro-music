import * as S from "./NotFoundStyles";

import { SidePanel } from "../../components/SideBar/MainSideBar";
import { PlayerPanel } from "../../components/bottombar/player/Player";
import { SearchBar } from "../../components/centralBlock/search/Search";
import { NavPanel } from "../../components/navigations/panel/MainNavPanel";
import { NotFoundComponent } from "../../components/notFound/NotFoundError";

export const Undefined = () => {
  return (
    <>
      <S.AppStyle></S.AppStyle>
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavPanel />
            <S.MainCenterBlock>
              <SearchBar />
              <NotFoundComponent />
            </S.MainCenterBlock>
            <SidePanel />
          </S.Main>
          <PlayerPanel></PlayerPanel>
          <footer className="footer" />
        </S.Container>
      </S.Wrapper>
    </>
  );
};
