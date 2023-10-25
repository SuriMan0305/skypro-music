import React from "react";
import * as S from '../PlayeStyles.js'


export const PlayingInfoSongNotFound = (props) => {
    return (
      <S.TrackPlay>
        <S.TrackPlayContain>
          <S.TrackPlayImage>
            <S.EmptyAlbum />
          </S.TrackPlayImage>
          <S.LoadPlay>
          </S.LoadPlay>
          <S.LoadPlay>
            <S.InfoPlayAlbumLink href="http://">
              {props.artist}
            </S.InfoPlayAlbumLink>
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
};