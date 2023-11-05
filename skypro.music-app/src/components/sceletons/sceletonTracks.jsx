import * as S from "../centralBlock/MainBlockStyles.js";

export const SceletonTracks = () => {
  return (
    <>
      <S.PlaylistItem>
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.LoadingTrackImage></S.LoadingTrackImage>
            <S.TrackTitleLoading></S.TrackTitleLoading>
          </S.TrackTitle>
          <S.TrackAuthorLoading></S.TrackAuthorLoading>
          <S.TrackAlbumLoading></S.TrackAlbumLoading>
          <S.TrackTimeLoading></S.TrackTimeLoading>
        </S.PlaylistTrack>
      </S.PlaylistItem>
    </>
  );
};
