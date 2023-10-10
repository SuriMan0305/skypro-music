import React from "react";
import "./sidebar.css";

const { useEffect, useState } = React;

const SidePanel = () => {
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
      <div className="main__sidebar sidebar">
        <div className="sidebar__personal">
          <p className="sidebar__personal-name">levchenko Kirill</p>
          <div className="sidebar__icon">
            <svg alt="logout">
              <use xlinkHref="img/icon/sprite.svg#logout" />
            </svg>
          </div>
        </div>
        <div className="sidebar__block">
          <div className="sidebar__list">
            <div className="sidebar__item">
              <a className="sidebar__link" href="#!">
                <img
                  className="sidebar__img"
                  src="img/playlist01.png"
                  alt="day's playlist"
                />
              </a>
            </div>
            <div className="sidebar__item">
              <a className="sidebar__link" href="#!">
                <img
                  className="sidebar__img"
                  src="img/playlist02.png"
                  alt="day's playlist"
                />
              </a>
            </div>
            <div className="sidebar__item">
              <a className="sidebar__link" href="#!">
                <img
                  className="sidebar__img"
                  src="img/playlist03.png"
                  alt="day's playlist"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="main__sidebar sidebar">
        <div className="sidebar__personal">
          <p className="sidebar__personal-name">loading...</p>
          <div className="sidebar__icon">
            <svg alt="logout">
              <use xlinkHref="img/icon/sprite.svg#logout" />
            </svg>
          </div>
        </div>
        <div className="sidebar__block">
          <div className="sidebar__list">
            <div className="sidebar__item_loading">
              <div className="sidebar__preload"></div>
            </div>
            <div className="sidebar__item_loading">
              <div className="sidebar__preload"></div>
            </div>
            <div className="sidebar__item_loading">
              <div className="sidebar__preload"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export { SidePanel };
