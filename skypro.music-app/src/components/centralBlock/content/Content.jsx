import { TrackInfo } from "../tracks/Tracks";
import * as S from "../MainBlockStyles.js";
import { getAllTracks } from "../../../apimodules/api.js";
import { useEffect, useState } from "react";
import { SceletonTracks } from "../../sceletons/sceletonTracks";

export const MainContent = ({
  playerVision,
  setPlayerVision,
  setInfo,
  info,
  trackList,
  setTrackList,
}) => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    getAllTracks({ setTrackList }).then((response) => {
      setLoad(false);
      if (response.error !== undefined) {
        setTrackList('error')
      }
    });
  }, [setTrackList]);
  
  return (
    <S.Content>
      <S.ContentTitle>
        <S.TitleColumnFirst>Трек</S.TitleColumnFirst>
        <S.TitleColumnSecond>ИСПОЛНИТЕЛЬ</S.TitleColumnSecond>
        <S.TitleColumnThird>АЛЬБОМ</S.TitleColumnThird>
        <S.TitleColumnFour>
          <S.PlaylistTitleSvg alt="time">
            <use xlinkHref="/img/icon/sprite.svg#icon-watch" />
          </S.PlaylistTitleSvg>
        </S.TitleColumnFour>
      </S.ContentTitle>
      <S.ContentPlaylist>
        {load ? (
          <>
            <SceletonTracks />
            <SceletonTracks />
            <SceletonTracks />
            <SceletonTracks />
            <SceletonTracks />
            <SceletonTracks />
            <SceletonTracks />
            <SceletonTracks />
            <SceletonTracks />
            <SceletonTracks />
            <SceletonTracks />
            <SceletonTracks />
            <SceletonTracks />
            <SceletonTracks />
            <SceletonTracks />
            <SceletonTracks />
            <SceletonTracks />
            <SceletonTracks />
            <SceletonTracks />
            <SceletonTracks />
            <SceletonTracks />
            <SceletonTracks />
            <SceletonTracks />
            <SceletonTracks />
          </>
        ) : (
          <S.Container>
            <TrackInfo
              trackList={trackList}
              setTrackList={setTrackList}
              playerVision={playerVision}
              setPlayerVision={setPlayerVision}
              info={info}
              setInfo={setInfo}
            />
          </S.Container>
        )}
      </S.ContentPlaylist>
    </S.Content>
  );
};
