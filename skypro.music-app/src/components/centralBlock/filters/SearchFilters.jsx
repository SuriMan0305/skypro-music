import React from "react";
import * as S from '../MainBlockStyles.js'

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
      <S.FilterButton $show={visible} onClick={handleClick}>
        исполнителю
      </S.FilterButton>
      {visible && (
        <S.SearchAuthor>
          <S.ListAuthors>
            <S.ListText>Nero</S.ListText>
            <S.ListText>Dynoro</S.ListText>
            <S.ListText>Ali Bakgor</S.ListText>
            <S.ListText>skrillex</S.ListText>
            <S.ListText>zomboy</S.ListText>
            <S.ListText>Z-revolution</S.ListText>
            <S.ListText>oxxymiron</S.ListText>
            <S.ListText>velial squad</S.ListText>
            <S.ListText>dshade</S.ListText>
            <S.ListText>anacondaz</S.ListText>
          </S.ListAuthors>
        </S.SearchAuthor>
      )}

      <S.FilterButton $show={visible2} onClick={handleClick2}>
        году выпуска
      </S.FilterButton>
      {visible2 && (
        <S.SearchYear>
          <S.ListYear>
            <S.ListText>По умолчанию</S.ListText>
            <S.ListText>Сначала новые</S.ListText>
            <S.ListText>Сначала старые</S.ListText>
          </S.ListYear>
        </S.SearchYear>
      )}

      <S.FilterButton $show={visible3} onClick={handleClick3}>
        жанру
      </S.FilterButton>
      {visible3 && (
        <S.SearchType>
          <S.ListType>
            <S.ListText>Pop</S.ListText>
            <S.ListText>Drop</S.ListText>
            <S.ListText>Metal</S.ListText>
            <S.ListText>Rap</S.ListText>
            <S.ListText>Russian</S.ListText>
            <S.ListText>Europe</S.ListText>
          </S.ListType>
        </S.SearchType>
      )}
    </>
  );
};
