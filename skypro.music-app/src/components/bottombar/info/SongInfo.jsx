import React from "react";
import * as S from '../PlayeStyles.js'

export const PlayingInfoSong = (props) => {

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
  }