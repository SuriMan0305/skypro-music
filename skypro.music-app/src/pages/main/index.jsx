import * as S from "./AppStyles";
import { SidePanel } from "../../components/SideBar/MainSideBar";
import { PlayerPanel } from "../../components/bottombar/player/Player";
import { MainContent } from "../../components/centralBlock/content/Content";
import { SearchBar } from "../../components/centralBlock/search/Search";
import { NavPanel } from "../../components/navigations/panel/MainNavPanel";
import { FilterBlock } from "../../components/centralBlock/filterBlock/FilterBlock";
import { MainTitle } from "../../components/centralBlock/titleBlock/MainTitle";

export const Main = ({ playerVision, setPlayerVision, info, setInfo, trackList, setTrackList, realDuration, setRealDuration }) => {
  return (
    <>
      <S.AppStyle></S.AppStyle>
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavPanel />
            <S.MainCenterBlock>
              <SearchBar />
              <MainTitle title='Треки' />
              <FilterBlock />
              <MainContent playerVision={playerVision} setPlayerVision={setPlayerVision} info={info} setInfo={setInfo} trackList={trackList} setTrackList={setTrackList} realDuration={realDuration} setRealDuration={setRealDuration} />
            </S.MainCenterBlock>
            <SidePanel />
          </S.Main>
          {playerVision ? (<PlayerPanel info={info} setInfo={setInfo} realDuration={realDuration} setRealDuration={setRealDuration}></PlayerPanel>) : ('')}
          <footer className="footer" />
        </S.Container>
      </S.Wrapper>
    </>
  );
};
