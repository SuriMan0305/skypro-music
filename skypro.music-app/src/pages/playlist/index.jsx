import * as S from "./PlaylistStyles";

import { PlayerPanel } from "../../components/bottombar/player/Player";
import { MyPlayList } from "../../components/centralBlock/myPlaylistComponents/myPlaylist/MyPlaylist";
import { SearchBar } from "../../components/centralBlock/search/Search";
import { NavPanel } from "../../components/navigations/panel/MainNavPanel";
import { MainTitle } from "../../components/centralBlock/titleBlock/MainTitle";
import { MyPlaylistSide } from "../../components/centralBlock/myPlaylistComponents/sideBarThis/SideBarMyPlaylist";

export const Playlist = ({ info, setInfo, playerVision, setPlayerVision }) => {
  
  return (
    <>
      <S.AppStyle></S.AppStyle>
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavPanel />
            <S.MainCenterBlock>
              <SearchBar />
              <MainTitle title="Мои Треки" />
              <MyPlayList playerVision={ playerVision } setPlayerVision={setPlayerVision} info={info} setInfo={setInfo}/>
            </S.MainCenterBlock>
            <MyPlaylistSide />
          </S.Main>
          {playerVision ? (<PlayerPanel info={info} setInfo={setInfo}></PlayerPanel>) : ('')}
          <footer className="footer" />
        </S.Container>
      </S.Wrapper>
    </>
  );
};
