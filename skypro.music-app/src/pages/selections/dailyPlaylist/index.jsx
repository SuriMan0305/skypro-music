import * as S from "../../playlist/PlaylistStyles";

import { PlayerPanel } from "../../../components/bottombar/player/Player";
import { MyPlayList } from "../../../components/centralBlock/myPlaylistComponents/myPlaylist/MyPlaylist";
import { SearchBar } from "../../../components/centralBlock/search/Search";
import { NavPanel } from "../../../components/navigations/panel/MainNavPanel";
import { MainTitle } from "../../../components/centralBlock/titleBlock/MainTitle";
import { MyPlaylistSide } from "../../../components/centralBlock/myPlaylistComponents/sideBarThis/SideBarMyPlaylist";
import { DAILYPLAYLIST } from "../../../constants";

export const PlaylistDaily = () => {
  return (
    <>
      <S.AppStyle></S.AppStyle>
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavPanel />
            <S.MainCenterBlock>
              <SearchBar />
              <MainTitle title="Плейлист дня" />
              <MyPlayList songlist={DAILYPLAYLIST}></MyPlayList>
            </S.MainCenterBlock>
            <MyPlaylistSide />
          </S.Main>
          <PlayerPanel></PlayerPanel>
          <footer className="footer" />
        </S.Container>
      </S.Wrapper>
    </>
  );
};
