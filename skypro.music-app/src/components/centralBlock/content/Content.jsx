import { TrackInfo } from "../tracks/Tracks";
import * as S from "../MainBlockStyles.js";
import { useEffect, useState } from "react";
import { SceletonTracks } from "../../sceletons/sceletonTracks";
import { useSelector } from "react-redux";

export const MainContent = ({
  playerVision,
  setPlayerVision,
  trackNow,
  playing,
  setPlaying,
}) => {
  const [load, setLoad] = useState(true);

  const trackList = useSelector((state) => state.playlist.data);

  useEffect(() => {
    if (trackList[0] !== undefined) {
      setLoad(false);
    } else {
      setLoad(true);
    }
  });
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
              playing={playing}
              setPlaying={setPlaying}
              trackNow={trackNow}
              trackList={trackList}
              playerVision={playerVision}
              setPlayerVision={setPlayerVision}
            />
          </S.Container>
        )}
      </S.ContentPlaylist>
    </S.Content>
  );
};
