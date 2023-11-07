import React, { useRef } from "react";
import * as S from "../MainBlockStyles.js";

export const TrackInfo = ({ trackList, setPlayerVision, setInfo }) => {
  const audioPlaylistRef = useRef();

  const convertTime = (seconds) => {
    return `${Math.floor(seconds / 60)} : ${
      seconds % 60 >= 10 ? seconds % 60 : `0${seconds % 60}`
    }`;
  };

  if (
    `${trackList}` ===
    "error"
  ) {
    return (
      <div>
        {`Плейлист не удалось загрузить, попробуйте перезагрузить страницу позже (Ошибка соединения с сервером ${trackList}..)`}
      </div>
    );
  } else {
    return trackList.map((track) => {
      return (
            <S.PlaylistItem key={track.id}>
              <S.PlaylistTrack>
                <S.TrackTitle>
                  <S.TrackTitleImage>
                    <S.TrackTitleSvg alt="music">
                      <use xlinkHref="/img/icon/sprite.svg#icon-note" />
                    </S.TrackTitleSvg>
                  </S.TrackTitleImage>
                  <div>
                    <S.TrackTitleLink
                      href="http://"
                      id={track.id}
                      onClick={() => {
                        setPlayerVision(true);
                        setInfo({
                          name: track.name,
                          author: track.author,
                          link: track.track_file,
                        });
                      }}>
                      {track.name}{" "}
                      <S.TrackTitleSpan>({track.genre})</S.TrackTitleSpan>
                    </S.TrackTitleLink>
                  </div>
                </S.TrackTitle>
                <S.TrackAuthor>
                  <S.TrackAuthorLink href="http://">
                    {track.author}
                  </S.TrackAuthorLink>
                </S.TrackAuthor>
                <S.TrackAlbum>
                  <S.TrackAlbumLink href="http://">
                    {track.album}
                  </S.TrackAlbumLink>
                </S.TrackAlbum>
                <div>
                  <S.TrackTimeSvg alt="time">
                    <use xlinkHref="/img/icon/sprite.svg#icon-like" />
                  </S.TrackTimeSvg>
                  <S.TrackTimeText>{convertTime(track.duration_in_seconds)}</S.TrackTimeText>
                </div>
              </S.PlaylistTrack>
            </S.PlaylistItem>
      );
    });
  }
};
