import React from "react";
import "../central.css";

const { useEffect, useState } = React;

export const TrackInfo = (props) => {
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
      <div className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              <svg className="track__title-svg" alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note" />
              </svg>
            </div>
            <div className="track__title-text">
              <a className="track__title-link" href="http://">
                {props.title}{" "}
                <span className="track__title-span">{props.remix}</span>
              </a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href="http://">
              {props.name}
            </a>
          </div>
          <div className="track__album">
            <a className="track__album-link" href="http://">
              {props.album}
            </a>
          </div>
          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like" />
            </svg>
            <span className="track__time-text">{props.time}</span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
              <div className="loading__track-image">
              </div>
            <div className="track__title-loading">
            </div>
          </div>
          <div className="track__author-loading">
          </div>
          <div className="track__album-loading">
          </div>
          <div className="track__time-loading">
          </div>
        </div>
      </div>
    );
  }
};
