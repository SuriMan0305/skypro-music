import { useEffect, useRef, useState } from "react";
import { PlayingInfoSong } from "../info/SongInfo";
import * as S from "../PlayeStyles.js";

export const PlayerPanel = ({ info }) => {
  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [isLoop, setIsLoop] = useState(true);
  const [nowTime, setNowTime] = useState(0);
  const [length, setLength] = useState();
  const [ending, setEnding] = useState(false);

  const volumeRef = useRef(null);
  const inputRef = useRef(null);
  const audioRef = useRef(null);

  const handleStart = () => {
    if ((!ending && playing) || (ending && !playing)) {
      audioRef.current.pause();
      setPlaying(false);
    } else if ((!ending && !playing) || (ending && playing)) {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  const handleChangeVolume = (range) => {
    setVolume(range / 100 - (range % 10) / 100);
    return (audioRef.current.volume = volume);
  };

  const handleMute = () => {
    volume !== 0 ? setVolume(0) : setVolume(0.2);
    audioRef.current.volume = volume !== 0 ? 0 : 0.2;
    volumeRef.current.style.setProperty(
      "--background-size",
      `${volume !== 0 ? 0 : 20}%`
    );
  };

  const handleChangeLoop = () => {
    isLoop ? setIsLoop(false) : setIsLoop(true);
    audioRef.current.loop = isLoop;
  };

  const timer = (current, length) => {
    const minutesCurrent =
      Math.floor(current / 60) < 10
        ? "0" + Math.floor(current / 60)
        : Math.floor(current / 60);
    const secondsCurrent =
      Math.floor(current % 60) < 10
        ? "0" + Math.floor(current % 60)
        : Math.floor(current % 60);
    const minutesLength =
      Math.floor(length / 60) < 10
        ? "0" + Math.floor(length / 60)
        : Math.floor(length / 60);
    const secondsLength =
      Math.floor(length % 60) < 10
        ? "0" + Math.floor(length % 60)
        : Math.floor(length % 60);
    return `${minutesCurrent + ":" + secondsCurrent}/${
      minutesLength + ":" + secondsLength
    }`;
  };

  useEffect(() => {
    if (volume === 0.5) {
        volumeRef.current.style.setProperty("--background-size", `50%`);
    }
    audioRef.current.volume = volume;
    const getInfoFunc = () => {
      const timeSong = audioRef.current;
      const timer = audioRef.current;

      timer.addEventListener("loadedmetadata", () => {
        setLength(timer.duration);
      });

      timeSong.addEventListener("timeupdate", () => {
        setNowTime(timeSong.currentTime);
          inputRef.current.style.setProperty(
            "--background-size",
            `${inputRef.current.value}%`
          );
        setEnding(audioRef.current.ended);
      });
    };

    return getInfoFunc();
  }, [nowTime, length, playing, isLoop, ending, inputRef, audioRef]);

    return (
      <S.Bar>
        <S.Timer>{timer(nowTime, length)}</S.Timer>
        <div>
          <div>
            <S.Audio controls src={info.link} ref={audioRef} autoPlay></S.Audio>
          </div>
          <S.Content>
            <S.PlayerProgress
              ref={inputRef}
              type="range"
              name="rangeTime"
              min="0"
              max={100}
              onChange={(range) => {
                audioRef.current.currentTime =
                  (range.currentTarget.value * length) / 100;
                range.currentTarget.style.setProperty(
                  "--background-size",
                  `${range.currentTarget.value}%`
                );
              }}
              value={`${(100 * nowTime) / length}`}></S.PlayerProgress>
            <S.PlayerBlock>
              <S.BarPlayer>
                <S.PlayerControls>
                  <S.PrevButton>
                    <S.PrevButtonSvg
                      alt="prev"
                      onClick={() => {
                        alert("element of player in production");
                      }}>
                      <svg
                        width="16"
                        height="14"
                        viewBox="0 0 16 14"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 2V12.5" stroke="white" />
                        <path d="M3 7L12.75 0.937823L12.75 13.0622L3 7Z" />
                      </svg>
                    </S.PrevButtonSvg>
                  </S.PrevButton>
                  <S.PlayButton onClick={handleStart}>
                    <S.PlayButtonSvg alt="play">
                      {playing && !ending ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="19"
                          viewBox="0 0 15 19"
                          fill="currentColor">
                          <rect width="5" height="19" />
                          <rect x="10" width="5" height="19" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="20"
                          viewBox="0 0 15 20"
                          fill="currentColor">
                          <path d="M15 10L-1.01012e-06 0.47372L-1.84293e-06 19.5263L15 10Z" />
                        </svg>
                      )}
                    </S.PlayButtonSvg>
                  </S.PlayButton>
                  <S.NextButton>
                    <S.NextButtonSvg
                      alt="next"
                      onClick={() => {
                        alert("element of player in production");
                      }}>
                      <svg
                        width="16"
                        height="14"
                        viewBox="0 0 16 14"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 2V12.5" stroke="white" />
                        <path d="M13 7L3.25 0.937823L3.25 13.0622L13 7Z" />
                      </svg>
                    </S.NextButtonSvg>
                  </S.NextButton>
                  <S.RepeatButton onClick={handleChangeLoop}>
                    <S.RepeatButtonSvg alt="repeat">
                      {!isLoop ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="12"
                          viewBox="0 0 20 18"
                          fill="currentColor">
                          <path d="M10 3L5 0.113249V5.88675L10 3ZM7 14.5C3.96243 14.5 1.5 12.0376 1.5 9H0.5C0.5 12.5899 3.41015 15.5 7 15.5V14.5ZM1.5 9C1.5 5.96243 3.96243 3.5 7 3.5V2.5C3.41015 2.5 0.5 5.41015 0.5 9H1.5Z" />
                          <path d="M10 15L15 17.8868V12.1132L10 15ZM13 3.5C16.0376 3.5 18.5 5.96243 18.5 9H19.5C19.5 5.41015 16.5899 2.5 13 2.5V3.5ZM18.5 9C18.5 12.0376 16.0376 14.5 13 14.5V15.5C16.5899 15.5 19.5 12.5899 19.5 9H18.5Z" />
                        </svg>
                      ) : (
                        <use xlinkHref="/img/icon/sprite.svg#icon-repeat" />
                      )}
                    </S.RepeatButtonSvg>
                  </S.RepeatButton>
                  <S.ShuffleButton>
                    <S.ShuffleButtonSvg
                      alt="shuffle"
                      onClick={() => {
                        alert("element of player in production");
                      }}>
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
                    <S.VolumeProgressLine
                      ref={volumeRef}
                      type="range"
                      name="range"
                      min="0"
                      max="100"
                      value={volume * 100}
                      onChange={(range) => {
                        handleChangeVolume(range.currentTarget.value);
                        volumeRef.current.style.setProperty(
                          "--background-size",
                          `${range.currentTarget.value}%`
                        );
                      }}
                    />
                  </S.VolumeProgress>
                </S.VolumeContent>
              </S.BarVolumeBlock>
            </S.PlayerBlock>
          </S.Content>
        </div>
      </S.Bar>
    );
  }
