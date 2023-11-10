import React from "react";
import { MYPLAYLIST } from "../../../../constants";
import * as S from "../../MainBlockStyles.js";

const { useEffect, useState } = React;

export const MyPlayList = ({
  songlist = MYPLAYLIST,
  playerVision,
  setPlayerVision,
  info,
  setInfo,
}) => {

  const [seconds, setSeconds] = useState(0);

  const increase = () => {
    setSeconds(seconds + 1);
  };

  useEffect(() => {
    const TimerId = setInterval(() => {
      if (seconds < 1) {
        increase();
      }
    }, 1000);
    return () => {
      clearInterval(TimerId);
    };
  });
  if (seconds === 1) {
    return (
      <S.ContentPlaylistPage>
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
        <S.TracklistPlaylistPage>
          {songlist.map((track) => (
            <S.PlaylistItemPlaylistPage key={track.id}>
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
                      onClick={() => {
                        setInfo({
                          name: track.title,
                          author: track.name,
                          link: ''
                        })
                        setPlayerVision(true);
                      }}>
                      {track.title}{" "}
                      <S.TrackTitleSpan>{track.remix}</S.TrackTitleSpan>
                    </S.TrackTitleLink>
                  </div>
                </S.TrackTitle>
                <S.TrackAuthor>
                  <S.TrackAuthorLink href="http://">
                    {track.name}
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
                  <S.TrackTimeText>{track.time}</S.TrackTimeText>
                </div>
              </S.PlaylistTrack>
            </S.PlaylistItemPlaylistPage>
          ))}
        </S.TracklistPlaylistPage>
      </S.ContentPlaylistPage>
    );
  } else {
    return (
      <S.ContentPlaylistPage>
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
        <S.TracklistPlaylistPage>
          {songlist.map((track) => (
            <S.PlaylistItemPlaylistPage key={track.id}>
              <S.PlaylistTrack>
                <S.TrackTitle>
                  <S.LoadingTrackImageMyPlaylist />
                  <div>
                    <S.TrackTitleLoadingMyPlaylist />
                  </div>
                </S.TrackTitle>
                <S.TrackAuthorLoadingMyPlaylist />
                <S.TrackAlbumLoadingMyPlaylist />
                <div>
                  <S.TrackTimeLoadingMyPlaylist />
                </div>
              </S.PlaylistTrack>
            </S.PlaylistItemPlaylistPage>
          ))}
        </S.TracklistPlaylistPage>
      </S.ContentPlaylistPage>
    );
  }
};
