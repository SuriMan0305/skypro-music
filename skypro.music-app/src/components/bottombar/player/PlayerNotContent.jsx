import { PlayingInfoSongNotFound } from "../info/SongInfoNotContent";
import * as S from "../PlayeStyles.js";

export const PlayerPanelNotFound = () => {
  return (
    <S.Bar>
      <S.Content>
        <S.PlayerProgress />
        <S.PlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.PrevButton>
                <S.PrevButtonSvg alt="prev">
                  <use xlinkHref="/img/icon/sprite.svg#icon-prev" />
                </S.PrevButtonSvg>
              </S.PrevButton>
              <S.PlayButton>
                <S.PlayButtonSvg alt="play">
                  <use xlinkHref="/img/icon/sprite.svg#icon-play" />
                </S.PlayButtonSvg>
              </S.PlayButton>
              <S.NextButton>
                <S.NextButtonSvg alt="next">
                  <use xlinkHref="/img/icon/sprite.svg#icon-next" />
                </S.NextButtonSvg>
              </S.NextButton>
              <S.RepeatButton>
                <S.RepeatButtonSvg alt="repeat">
                  <use xlinkHref="/img/icon/sprite.svg#icon-repeat" />
                </S.RepeatButtonSvg>
              </S.RepeatButton>
              <S.ShuffleButton>
                <S.ShuffleButtonSvg alt="shuffle">
                  <use xlinkHref="/img/icon/sprite.svg#icon-shuffle" />
                </S.ShuffleButtonSvg>
              </S.ShuffleButton>
            </S.PlayerControls>
            <PlayingInfoSongNotFound/>
          </S.BarPlayer>
          <S.BarVolumeBlock>
            <S.VolumeContent>
              <S.VolumeImage>
                <S.VolumeSvg alt="volume">
                  <use xlinkHref="/img/icon/sprite.svg#icon-volume" />
                </S.VolumeSvg>
              </S.VolumeImage>
              <S.VolumeProgress>
                <S.VolumeProgressLine type="range" name="range" />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.PlayerBlock>
      </S.Content>
    </S.Bar>
  );
};