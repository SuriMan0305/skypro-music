import * as S from "../../playlist/PlaylistStyles";

import { PlayerPanel } from "../../../components/bottombar/player/Player";
import { MyPlayList } from "../../../components/centralBlock/myPlaylistComponents/myPlaylist/MyPlaylist";
import { SearchBar } from "../../../components/centralBlock/search/Search";
import { NavPanel } from "../../../components/navigations/panel/MainNavPanel";
import { MainTitle } from "../../../components/centralBlock/titleBlock/MainTitle";
import { MyPlaylistSide } from "../../../components/centralBlock/myPlaylistComponents/sideBarThis/SideBarMyPlaylist";
import { COLLECTIONS, DAILYPLAYLIST } from "../../../constants";
import { useParams } from "react-router-dom";

export const Collections = () => {
  const params = useParams()
  const useCollection = COLLECTIONS.find((collection) => collection.id === Number(params.id))
  return (
    <>
      <S.AppStyle></S.AppStyle>
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavPanel />
            <S.MainCenterBlock>
              <SearchBar />
              <MainTitle title={useCollection.name} />
              <MyPlayList songlist={useCollection.container}></MyPlayList>
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