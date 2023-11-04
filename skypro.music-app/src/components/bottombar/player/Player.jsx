import { useEffect, useRef, useState } from "react";
import { PlayingInfoSong } from "../info/SongInfo";
import * as S from "../PlayeStyles.js";

export const PlayerPanel = ({ info }) => {
  const [Playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(0.5)
  const [isLoop, setIsLoop] = useState(true)
  const audioRef = useRef(null);
  const handleStart = () => {
    audioRef.current.play();
    setPlaying(true);
    console.log(audioRef.current);
  };
  const handleStop = () => {
    audioRef.current.pause();
    setPlaying(false);
  };
  const togglePlay = Playing ? handleStop : handleStart

  const handleChangeVolume = (range) => {
    setVolume(range/100 - (range%10)/100)
    console.log(volume);
    return audioRef.current.volume = volume
  }

  const handleMute = () => {
    volume !== 0 ? setVolume(0) : setVolume(0.2)
    audioRef.current.volume = (volume !== 0 ? 0 : 0.2)
  }

  const handleChangeLoop = () => {
    console.log(isLoop);
    isLoop ? setIsLoop(false) : setIsLoop(true)
    console.log(isLoop);
    audioRef.current.loop = isLoop
  }



  useEffect(() => {
    setVolume(volume)
    audioRef.current.volume = volume
  }, [])

  return (
    <S.Bar>
      <S.Audio controls src={info.link} ref={audioRef} autoPlay></S.Audio>
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
              <S.PlayButton onClick={togglePlay}>
                <S.PlayButtonSvg alt="play">
                  <use xlinkHref="/img/icon/sprite.svg#icon-play" />
                </S.PlayButtonSvg>
              </S.PlayButton>
              <S.NextButton>
                <S.NextButtonSvg alt="next">
                  <use xlinkHref="/img/icon/sprite.svg#icon-next" />
                </S.NextButtonSvg>
              </S.NextButton>
              <S.RepeatButton onClick={handleChangeLoop}>
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
            <PlayingInfoSong song={info.name} artist={info.author} />
          </S.BarPlayer>
          <S.BarVolumeBlock>
            <S.VolumeContent>
              <S.VolumeImage onClick={handleMute}>
                <S.VolumeSvg alt="volume">
                  <use xlinkHref="/img/icon/sprite.svg#icon-volume" />
                </S.VolumeSvg>
              </S.VolumeImage>
              <S.VolumeProgress>
                <S.VolumeProgressLine type="range" name="range" min='0' max='100' value={volume*100} onChange={(range) => {
                  handleChangeVolume(range.currentTarget.value)
                }}/>
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.PlayerBlock>
      </S.Content>
    </S.Bar>
  );
};
