import { SearchFilters } from "../filters/SearchFilters";
import * as S from '../MainBlockStyles.js'

export const SearchBar = () => {
  return (
    <>
      <S.Search>
        <S.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search" />
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </S.Search>
      <S.BlockText>Треки</S.BlockText>
      <S.BlockFilter>
        <S.BlockFilterTitle>Искать по:</S.BlockFilterTitle>
        <SearchFilters></SearchFilters>
      </S.BlockFilter>
    </>
  );
};
