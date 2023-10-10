import React from "react";
import "./bar.css";

const { useEffect, useState } = React;

const PlayingInfoSong = (props) => {
  const [seconds, setSeconds] = useState(0);

  const increase = () => {
    setSeconds(seconds + 1);
  };

  useEffect(() => {
    const TimerId = setInterval(() => {
      if (seconds < 3) {
        increase();
      }
    }, 1000);
    return () => {
      clearInterval(TimerId);
    };
  });

  if (seconds === 3) {
    return (
      <div className="player__track-play track-play">
        <div className="track-play__contain">
          <div className="track-play__image">
            <svg className="track-play__svg" alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </svg>
          </div>
          <div className="track-play__author">
            <a className="track-play__author-link" href="http://">
              {props.song}
            </a>
          </div>
          <div className="track-play__album">
            <a className="track-play__album-link" href="http://">
              {props.artist}
            </a>
          </div>
        </div>
        <div className="track-play__like-dis">
          <div className="track-play__like _btn-icon">
            <svg className="track-play__like-svg" alt="like">
              <use xlinkHref="img/icon/sprite.svg#icon-like" />
            </svg>
          </div>
          <div className="track-play__dislike _btn-icon">
            <svg className="track-play__dislike-svg" alt="dislike">
              <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
            </svg>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="player__track-play track-play">
        <div className="track-play__contain">
          <div className="track-play__image">
            <div className="loading_bar__album"></div>
          </div>
          <div className="track-play__loading">
              <div className="loading_bar__player"></div>
          </div>
          <div className="track-play__loading">
            <div className="loading_bar__player"></div>
          </div>
        </div>
        <div className="track-play__like-dis">
          <div className="track-play__like _btn-icon">
            <svg className="track-play__like-svg" alt="like">
              <use xlinkHref="img/icon/sprite.svg#icon-like" />
            </svg>
          </div>
          <div className="track-play__dislike _btn-icon">
            <svg className="track-play__dislike-svg" alt="dislike">
              <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
};

export { PlayingInfoSong };
