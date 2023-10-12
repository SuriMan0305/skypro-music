import React from "react";
import "../central.css";

const { useState } = React;

export const SearchFilters = () => {
  const [visible, setVisible] = useState(false);

  const [visible2, setVisible2] = useState(false);

  const [visible3, setVisible3] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
    setVisible2(false);
    setVisible3(false);
  };

  const handleClick2 = () => {
    setVisible2(!visible2);
    setVisible(false);
    setVisible3(false);

  };

  const handleClick3 = () => {
    setVisible3(!visible3);
    setVisible(false);
    setVisible2(false);

  };

  return (
    <>
      <div
        className={`filter__button button-author _btn-text ${visible ? 'active__filter' : ''}`}
        onClick={handleClick}>
        исполнителю
      </div>
      {visible && (
        <div className="search__author">
          <div className="list__authors" id="scroll">
            <p className="list__text">Nero</p>
            <p className="list__text">Dynoro</p>
            <p className="list__text">Ali Bakgor</p>
            <p className="list__text">skrillex</p>
            <p className="list__text">zomboy</p>
            <p className="list__text">Z-revolution</p>
            <p className="list__text">oxxymiron</p>
            <p className="list__text">velial squad</p>
            <p className="list__text">dshade</p>
            <p className="list__text">anacondaz</p>
          </div>
        </div>
      )}

      <div
        className={`filter__button button-year _btn-text ${visible2 ? 'active__filter' : ''}`}
        onClick={handleClick2}>
        году выпуска
      </div>
      {visible2 && (
        <div className="search__year">
          <div className="list__year" id="scroll">
            <p className="list__text">По умолчанию</p>
            <p className="list__text">Сначала новые</p>
            <p className="list__text">Сначала старые</p>
          </div>
        </div>
      )}

      <div
        className={`filter__button button-genre _btn-text ${visible3 ? 'active__filter' : ''}`}
        onClick={handleClick3}>
        жанру
      </div>
      {visible3 && (
        <div className="search__type">
          <div className="list__type" id="scroll__type">
            <p className="list__text">Pop</p>
            <p className="list__text">Drop</p>
            <p className="list__text">Metal</p>
            <p className="list__text">Rap</p>
            <p className="list__text">Russian</p>
            <p className="list__text">Europe</p>
          </div>
        </div>
      )}
    </>
  );
};
