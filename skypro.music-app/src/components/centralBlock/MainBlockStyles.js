import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 40px;
  }
  width: 1100px;
  height: 680px;
`;

export const PlaylistItem = styled.div`
  width: 1050px;
  display: block;
  margin-bottom: 12px;
`;
export const PlaylistTrack = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;
export const TrackTitle = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 447px;
`;
export const TrackTitleImage = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 17px;
`;
export const TrackTitleSvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`;
export const TrackTitleLink = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;
`;
export const TrackTitleSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4e4e4e;
`;
export const TrackAuthor = styled.div`
  width: 320px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;
export const TrackAuthorLink = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: left;
  cursor: pointer;
`;
export const TrackAlbum = styled.div`
  width: 206px;
`;
export const TrackAlbumLink = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
  cursor: pointer;
`;
export const TrackTimeSvg = styled.svg`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: #696969;
  &:hover use {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
  &:active use {
    fill: #696969;
    stroke: #ffffff;
    cursor: pointer;
  }
`;
export const TrackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
`;
export const LoadingTracks = keyframes`
  0% { 
    opacity: 0.3;
  }
  50% { 
    opacity: 1;
  }
  100% { 
    opacity: 0.3;
  }
`;
export const LoadingTrackImage = styled.div`
  width: 51px;
  height: 51px;
  margin-right: 17px;
  background-color: #5b5a5a;
  animation: ${LoadingTracks} 2s linear infinite;
`;
export const TrackTitleLoading = styled.div`
  width: 356px;
  height: 19px;
  background-color: #5b5a5a;
  animation: ${LoadingTracks} 2.2s linear infinite;
`;
export const TrackAuthorLoading = styled.div`
  width: 340px;
  height: 19px;
  margin-left: 48px;
  background-color: #5b5a5a;
  animation: ${LoadingTracks} 2.4s linear infinite;
`;
export const TrackAlbumLoading = styled.div`
  width: 210px;
  height: 19px;
  background-color: #5b5a5a;
  margin-right: 40px;
  margin-left: 20px;
  animation: ${LoadingTracks} 2.6s linear infinite;
`;
export const TrackTimeLoading = styled.div`
  width: 55px;
  height: 19px;
  background-color: #5b5a5a;
  animation: ${LoadingTracks} 2.8s linear infinite;
`;
// my playlist styles
export const ContentPlaylistPage = styled.div`
  width: 1298px;
`;
export const TracklistPlaylistPage = styled.div`
  max-width: 1050px;
`;
export const PlaylistItemPlaylistPage = styled.div`
  margin-bottom: 12px;
`;

export const LoadingTrackImageMyPlaylist = styled.div`
  width: 51px;
  height: 51px;
  margin-right: 17px;
  background-color: #5b5a5a;
  animation: ${LoadingTracks} 2s linear infinite;
`;
export const TrackTitleLoadingMyPlaylist = styled.div`
  width: 356px;
  height: 19px;
  background-color: #5b5a5a;
  animation: ${LoadingTracks} 2.2s linear infinite;
`;
export const TrackAuthorLoadingMyPlaylist = styled.div`
  width: 330px;
  height: 19px;
  margin-left: 30px;
  background-color: #5b5a5a;
  animation: ${LoadingTracks} 2.4s linear infinite;
`;
export const TrackAlbumLoadingMyPlaylist = styled.div`
  width: 210px;
  height: 19px;
  background-color: #5b5a5a;
  margin-right: 31px;
  margin-left: 20px;
  animation: ${LoadingTracks} 2.6s linear infinite;
`;
export const TrackTimeLoadingMyPlaylist = styled.div`
  width: 55px;
  height: 19px;
  background-color: #5b5a5a;
  animation: ${LoadingTracks} 2s linear infinite;
`;
//
export const Search = styled.div`
  width: 100%;
  border-bottom: 1px solid #4e4e4e;
  margin-bottom: 51px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;
export const SearchSvg = styled.svg`
  width: 17px;
  height: 17px;
  margin-right: 5px;
  stroke: #ffffff;
  fill: transparent;
`;
export const SearchText = styled.input`
  -webkit-box-flex: 100;
  -ms-flex-positive: 100;
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  &::-webkit-input-placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  &:-ms-input-placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  &::-ms-input-placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  &::placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;
export const BlockText = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`;
export const BlockFilter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
  position: relative;
`;
export const BlockFilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`;
//

export const Content = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;
export const ContentTitle = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 1050px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const WIDTH = {
  col1: css`
    width: 447px;
  `,
  col2: css`
    width: 321px;
  `,
  col3: css`
    width: 245px;
  `,
  col4: css`
    width: 19px;
  `,
};

export const columnStyle = (column = "col1") => {
  const style = WIDTH[column];
  return style;
};

export const TitleColumn = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
`;

export const TitleColumnFirst = styled(TitleColumn)`
  ${columnStyle("col1")}
`;
export const TitleColumnSecond = styled(TitleColumn)`
  ${columnStyle("col2")}
`;
export const TitleColumnThird = styled(TitleColumn)`
  ${columnStyle("col3")}
`;
export const TitleColumnFour = styled(TitleColumn)`
  ${columnStyle("col4")}
`;
export const PlaylistTitleSvg = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;
export const ContentPlaylist = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;
///
export const FilterButton = styled.div`
  color: ${(props) => (props.$show ? "#9a48f1" : "white")};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid;
  border-radius: 60px;
  padding: 6px 20px;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
  &:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
`;
export const SearchAuthor = styled.div`
  box-sizing: border-box;
  padding: 32px;
  width: 248px;
  height: 305px;
  border-radius: 12px;
  background-color: #313131;
  position: absolute;
  top: 49px;
  left: 90px;
`;
export const ListAuthors = styled.div`
  width: 180px;
  height: 237px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #4b4949;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: #fff;
  }
`;
export const ListText = styled.p`
  font-family: "StratosSkyeng", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  &:hover {
    text-decoration: underline;
    color: #b672ff;
    cursor: pointer;
  }
  &:active {
    color: #ad61ff;
  }
`;
export const SearchYear = styled.div`
  box-sizing: border-box;
  padding: 34px;
  border-radius: 12px;
  background-color: #313131;
  position: absolute;
  top: 49px;
  left: 240px;
`;
export const ListYear = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;
export const SearchType = styled.div`
  box-sizing: border-box;
  padding: 34px;
  border-radius: 12px;
  background-color: #313131;
  position: absolute;
  top: 49px;
  left: 390px;
`;
export const ListType = styled.div`
  width: 180px;
  height: 237px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #4b4949;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: #fff;
  }
`;
