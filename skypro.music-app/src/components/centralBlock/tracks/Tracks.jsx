import React from "react";
import * as S from "../MainBlockStyles.js";

export const TrackInfo = ({ trackList }) => {

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
              <S.TrackTitleLink href={track.track_file}>
                {track.name}{" "}
                <S.TrackTitleSpan>({track.genre})</S.TrackTitleSpan>
              </S.TrackTitleLink>
            </div>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLink href="http://">{track.author}</S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum>
            <S.TrackAlbumLink href="http://">{track.album}</S.TrackAlbumLink>
          </S.TrackAlbum>
          <div>
            <S.TrackTimeSvg alt="time">
              <use xlinkHref="/img/icon/sprite.svg#icon-like" />
            </S.TrackTimeSvg>
            <S.TrackTimeText>{track.duration_in_seconds}</S.TrackTimeText>
          </div>
        </S.PlaylistTrack>
      </S.PlaylistItem>
    );
  });
};
