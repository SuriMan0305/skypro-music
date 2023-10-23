import * as S from './PlaylistStyles'

import { SidePanel } from "../../components/SideBar/MainSideBar";
import { PlayerPanel } from "../../components/bottombar/player/Player";
import { MainContent } from "../../components/centralBlock/content/Content";
import { SearchBar } from "../../components/centralBlock/search/Search";
import { NavPanel } from "../../components/navigations/panel/MainNavPanel";
import { MainTitle } from '../../components/centralBlock/titleBlock/MainTitle';

export const Playlist = () => {
  return (
    <>
    <S.AppStyle></S.AppStyle>
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavPanel />
          <S.MainCenterBlock>
              <SearchBar />
              <MainTitle title='Мои Треки' />
            <MainContent />
          </S.MainCenterBlock>
          <SidePanel />
        </S.Main>
        <PlayerPanel></PlayerPanel>
        <footer className="footer" />
      </S.Container>
    </S.Wrapper>
  </>
  )
}