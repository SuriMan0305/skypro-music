import React from "react";
import * as S from '../MainBlockStyles.js'

const { useEffect, useState } = React;

export const TrackInfo = (props) => {
  const [seconds, setSeconds] = useState(0);

  const increase = () => {
    setSeconds(seconds + 1);
  };

  useEffect(() => {
    const TimerId = setInterval(() => {
      if (seconds < 3) {
        increase();
      }
    }, 1000);
    return () => {
      clearInterval(TimerId);
    };
  });

  if (seconds === 3) {
    return (
      <S.PlaylistItem>
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleImage>
              <S.TrackTitleSvg alt="music">
                <use xlinkHref="/img/icon/sprite.svg#icon-note" />
              </S.TrackTitleSvg>
            </S.TrackTitleImage>
            <div>
              <S.TrackTitleLink href="http://">
                {props.title}{" "}
                <S.TrackTitleSpan>{props.remix}</S.TrackTitleSpan>
              </S.TrackTitleLink>
            </div>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLink href="http://">
              {props.name}
            </S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum>
            <S.TrackAlbumLink href="http://">
              {props.album}
            </S.TrackAlbumLink>
          </S.TrackAlbum>
          <div>
            <S.TrackTimeSvg alt="time">
              <use xlinkHref="/img/icon/sprite.svg#icon-like" />
            </S.TrackTimeSvg>
            <S.TrackTimeText>{props.time}</S.TrackTimeText>
          </div>
        </S.PlaylistTrack>
      </S.PlaylistItem>
    );
  } else {
    return (
      <S.PlaylistItem>
        <S.PlaylistTrack>
          <S.TrackTitle>
              <S.LoadingTrackImage>
              </S.LoadingTrackImage>
            <S.TrackTitleLoading>
            </S.TrackTitleLoading>
          </S.TrackTitle>
          <S.TrackAuthorLoading>
          </S.TrackAuthorLoading>
          <S.TrackAlbumLoading>
          </S.TrackAlbumLoading>
          <S.TrackTimeLoading>
          </S.TrackTimeLoading>
        </S.PlaylistTrack>
      </S.PlaylistItem>
    );
  }
};
