import React from "react";
import * as S from '../PlayeStyles.js'


const { useEffect, useState } = React;

export const PlayingInfoSong = (props) => {
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
      <S.TrackPlay>
        <S.TrackPlayContain>
          <S.TrackPlayImage>
            <S.TrackPlaySvg alt="music">
              <use xlinkHref="/img/icon/sprite.svg#icon-note" />
            </S.TrackPlaySvg>
          </S.TrackPlayImage>
          <S.InfoPlayAuthor>
            <S.InfoPlayAuthorLink href="http://">
              {props.song}
            </S.InfoPlayAuthorLink>
          </S.InfoPlayAuthor>
          <S.InfoPlayAlbum>
            <S.InfoPlayAlbumLink href="http://">
              {props.artist}
            </S.InfoPlayAlbumLink>
          </S.InfoPlayAlbum>
        </S.TrackPlayContain>
        <S.LikeBlock>
          <S.HoverLikes>
            <S.LikeSvg alt="like" onClick={() => {
                  alert('element of player in production')
                }}>
              <use xlinkHref="/img/icon/sprite.svg#icon-like" />
            </S.LikeSvg>
          </S.HoverLikes>
          <S.HoverLikes>
            <S.DislikeSvg alt="dislike" onClick={() => {
                  alert('element of player in production')
                }}>
              <use xlinkHref="/img/icon/sprite.svg#icon-dislike" />
            </S.DislikeSvg>
          </S.HoverLikes>
        </S.LikeBlock>
      </S.TrackPlay>
    );
  } else {
    return (
      <S.TrackPlay>
        <S.TrackPlayContain>
          <S.TrackPlayImage>
            <S.LoadAlbum></S.LoadAlbum>
          </S.TrackPlayImage>
          <S.LoadPlay>
              <S.LoadInfo></S.LoadInfo>
          </S.LoadPlay>
          <S.LoadPlay>
            <S.LoadInfo></S.LoadInfo>
          </S.LoadPlay>
        </S.TrackPlayContain>
        <S.LikeBlock>
          <S.HoverLikes>
            <S.LikeSvg alt="like">
              <use xlinkHref="/img/icon/sprite.svg#icon-like" />
            </S.LikeSvg>
          </S.HoverLikes>
          <S.HoverLikes>
            <S.DislikeSvg alt="dislike">
              <use xlinkHref="/img/icon/sprite.svg#icon-dislike" />
            </S.DislikeSvg>
          </S.HoverLikes>
        </S.LikeBlock>
      </S.TrackPlay>
    );
  }
};
