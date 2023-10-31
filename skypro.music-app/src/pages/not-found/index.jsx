import * as S from "./NotFoundStyles";

import { SidePanelEmpty } from "../../components/SideBar/EmtySideBar";
import { PlayerPanelNotFound } from "../../components/bottombar/player/PlayerNotContent";
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
            <SidePanelEmpty />
          </S.Main>
          <PlayerPanelNotFound></PlayerPanelNotFound>
          <footer className="footer" />
        </S.Container>
      </S.Wrapper>
    </>
  );
};
