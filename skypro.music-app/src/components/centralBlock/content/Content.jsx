import { TrackInfo } from "../tracks/Tracks";
import * as S from "../MainBlockStyles.js";
import { getAllTracks } from "../../../api";
import { useEffect, useState } from "react";
import { SceletonTracks } from '../../sceletons/sceletonTracks';

export const MainContent = () => {
  const [trackList, setTrackList] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    getAllTracks()
      .then((response) => {
        setTrackList(response);
        console.log(trackList);
      })
      .then(() => {
        setLoad(false);
      });
  }, []);

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
          <TrackInfo trackList={trackList} />
        )}
      </S.ContentPlaylist>
    </S.Content>
  );
};
