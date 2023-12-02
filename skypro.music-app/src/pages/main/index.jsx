import * as S from "./AppStyles";
import { SidePanel } from "../../components/SideBar/MainSideBar";
import { PlayerPanel } from "../../components/bottombar/player/Player";
import { MainContent } from "../../components/centralBlock/content/Content";
import { SearchBar } from "../../components/centralBlock/search/Search";
import { NavPanel } from "../../components/navigations/panel/MainNavPanel";
import { FilterBlock } from "../../components/centralBlock/filterBlock/FilterBlock";
import { MainTitle } from "../../components/centralBlock/titleBlock/MainTitle";
import { useDispatch } from "react-redux";
import { getAllTracks } from "../../apimodules/api";
import { setPlaylist } from "../../store/slices/playerActions";
import { useEffect, useState } from "react";

export const Main = ({
  playerVision,
  setPlayerVision,
  info,
  setInfo,
}) => {

  const dispatch = useDispatch()

  useEffect(() => {
    getAllTracks().then((response) => {
      return dispatch(setPlaylist(response))
    })
  }, [])


  return (
    <>
      <S.AppStyle></S.AppStyle>
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavPanel />
            <S.MainCenterBlock>
              <SearchBar />
              <MainTitle title="Треки" />
              <FilterBlock />
              <MainContent
                playerVision={playerVision}
                setPlayerVision={setPlayerVision}
                setInfo={setInfo}
                info={info}
              />
            </S.MainCenterBlock>
            <SidePanel />
          </S.Main>
          {playerVision ? (
            <PlayerPanel info={info} setInfo={setInfo}></PlayerPanel>
          ) : (
            ""
          )}
          <footer className="footer" />
        </S.Container>
      </S.Wrapper>
    </>
  );
};
