import styled, {keyframes} from 'styled-components'

export const Bar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`
export const Content = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`

export const PlayerProgress = styled.div`
  width: 100%;
  height: 5px;
  background: #2e2e2e;
`

export const PlayerBlock = styled.div`
  height: 73px;
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
`
export const BarPlayer = styled.div`
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
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`

export const BarVolumeBlock = styled.div`
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 92px 0 0;
`
export const PlayerControls = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 0 27px 0 31px;
`
export const ButtonsStyles = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
`
export const PrevButton = styled(ButtonsStyles)`
  margin-right: 23px;
`
export const PrevButtonSvg = styled.svg`
  width: 15px;
  height: 14px;
  fill: inherit;
  stroke: #d9d9d9;;
`
export const PlayButton = styled(ButtonsStyles)`
    margin-right: 23px;
`
export const PlayButtonSvg = styled.svg`
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
`
export const NextButton = styled(ButtonsStyles)`
  margin-right: 28px;
  fill: #a53939;
`
export const NextButtonSvg = styled.svg`
  width: 15px;
  height: 14px;
  fill: inherit;
  stroke: #d9d9d9;
`
export const RepeatButton = styled(ButtonsStyles)`
  margin-right: 24px;
`
export const RepeatButtonSvg = styled.svg`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
  &:hover {
    fill: transparent;
    stroke: #acacac;
  };
  &:active {
    fill: transparent;
    stroke: #ffffff;
  }
`
export const ShuffleButton = styled(ButtonsStyles)`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`
export const ShuffleButtonSvg = styled.svg`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
  &:hover {
    fill: transparent;
    stroke: #acacac;
  };
  &:active {
    fill: transparent;
    stroke: #ffffff;
  }
`
export const VolumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`
export const VolumeContent = styled.div`
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
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
`
export const VolumeSvg = styled.svg`
  width: 13px;
  height: 18px;
  fill: transparent;
`
export const VolumeProgress = styled.div`
  width: 109px;
  cursor: pointer;
`
export const VolumeProgressLine = styled.input`
  width: 109px;
  cursor: pointer;
`
export const TrackPlay = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
`
export const TrackPlayContain = styled.div`
  width: auto;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto 1fr;
  grid-template-columns: auto 1fr;
  grid-template-areas: "image author" "image album";
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`
export const TrackPlayImage = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 12px;
  -ms-grid-row-align: 1;
  -ms-grid-row-span: 2;
  -ms-grid-column-align: 1;
  grid-area: image;
`
export const TrackPlaySvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`
export const InfoPlayAuthor = styled.div`
  -ms-grid-row-span: 1;
  -ms-grid-column-span: 2;
  grid-area: author;
  min-width: 49px;
`
export const InfoPlayAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  white-space: nowrap;
`
export const InfoPlayAlbum = styled.div`
  -ms-grid-row-span: 2;
  -ms-grid-column-span: 2;
  grid-area: album;
  min-width: 49px;
`
export const InfoPlayAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #ffffff;
`
export const PlayerLoad = keyframes`
  0% { transform: translatex(0); 
  opacity: 0;}
  50% { transform: translatex(200%); 
    opacity: 1;}
  100% { transform: translatex(400%); 
  opacity: 0;}
`
export const AlbumLoad = keyframes`
  0% { 
    transform: translatex(-100%); 
    opacity: 0;
  }
  50% { 
    transform: translatex(0%); 
    opacity: 1;
  }
  100% { 
    transform: translatex(100%); 
    opacity: 0;
  }
`
export const LoadPlay = styled.div`
  display: inherit;
  width: 49px;
  height: 15px;
  background-color: #313131;
`
export const LoadAlbum = styled.div`
  width: 20px;
  height: 51px;
  background: linear-gradient(90deg, rgba(49,49,49,1) 0%, rgba(255,255,255,0.44021358543417366) 49%, rgba(49,49,49,1) 100%);
  animation: ${AlbumLoad} 1.5s linear infinite;
`
export const EmptyAlbum = styled.div`
  width: 20px;
  height: 51px;
`

export const LoadInfo = styled.div`
  width: 10px;
  height: 15px;
  background: linear-gradient(90deg, rgba(49,49,49,1) 0%, rgba(255,255,255,0.44021358543417366) 49%, rgba(49,49,49,1) 100%);
  animation: ${PlayerLoad} 1.5s linear infinite;
`
export const LikeBlock = styled.div`
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
  margin-left: 26%;
`
export const HoverLikes = styled.div`
  padding: 5px;
  &:hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  };
  &:active svg {
    fill: #696969;
    stroke: #ffffff;
    cursor: pointer;
  }
`
export const LikeSvg = styled.svg`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`
export const DislikeSvg = styled.svg`
  margin-left: 28.5px;
  width: 14.34px;
  height: 13px;
  fill: transparent;
  stroke: #696969;
`