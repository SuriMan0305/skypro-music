import { TrackInfo } from "../tracks/Tracks";
import * as S from "../MainBlockStyles.js";
import { getAllTracks } from "../../../api";
import { useEffect, useState } from "react";
import { SceletonTracks } from "../../sceletons/sceletonTracks";

export const MainContent = ({
  playerVision,
  setPlayerVision,
  setInfo,
  info,
}) => {
  const [trackList, setTrackList] = useState();
  const [load, setLoad] = useState(true);

  useEffect( () => {
    try {
     getAllTracks()
      .then((response) => {
        setTrackList(response);
      })
      .then(() => {
        setLoad(false);
      });
    } catch (error) {
      alert('Ошибка')
    }
  }, [])

  /*try {
    useEffect(() => {
     
    }, []);
  } catch (error) {
    return alert(error.message)
  }*/


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
