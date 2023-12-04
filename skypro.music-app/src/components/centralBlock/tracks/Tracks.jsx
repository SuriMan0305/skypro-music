import { useDispatch, useSelector } from "react-redux";
import * as S from "../MainBlockStyles.js";
import { startHandlePlay } from "../../../store/slices/playerActions.js";
import { useEffect } from "react";

export const TrackInfo = ({
  trackList,
  setPlayerVision,
  trackNow,
  playing,
  setPlaying,
}) => {
  const dispatch = useDispatch();

  const handleToggleTrack = (info) => {
    setPlayerVision(true);
    const rememberTrack = info;
    if (rememberTrack === trackNow) {
      setPlaying(!trackNow.statusPlay);
      dispatch(
        startHandlePlay({
          id: info.id,
          album: info.album,
          author: info.author,
          track_file: info.track_file,
          statusPlay: !trackNow.statusPlay,
        })
      );
    } else if (rememberTrack.id !== trackNow.id) {
      setPlaying(true);
      dispatch(
        startHandlePlay({
          id: info.id,
          album: info.album,
          author: info.author,
          track_file: info.track_file,
          statusPlay: true,
        })
      );
    }
  };

  const convertTime = (seconds) => {
    return `${Math.floor(seconds / 60)} : ${
      seconds % 60 >= 10 ? seconds % 60 : `0${seconds % 60}`
    }`;
  };

  if (`${trackList}` === "error") {
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
                {trackNow.track_file === track.track_file &&
                trackNow.statusPlay ? (
                  <S.CircleMove />
                ) : trackNow.id !== track.id ? (
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="/img/icon/sprite.svg#icon-note" />
                  </S.TrackTitleSvg>
                ) : (
                  <S.CircleStop />
                )}
              </S.TrackTitleImage>
              <div>
                <S.TrackTitleLink
                  href="http://"
                  id={track.id}
                  onClick={() => {
                    handleToggleTrack(track);
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
              <S.TrackAlbumLink href="http://">{track.album}</S.TrackAlbumLink>
            </S.TrackAlbum>
            <div>
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="/img/icon/sprite.svg#icon-like" />
              </S.TrackTimeSvg>
              <S.TrackTimeText>
                {convertTime(track.duration_in_seconds)}
              </S.TrackTimeText>
            </div>
          </S.PlaylistTrack>
        </S.PlaylistItem>
      );
    });
  }
};
