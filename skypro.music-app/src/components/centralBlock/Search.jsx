import "./central.css";

import { SearchAuthor, SearchType, SearchYear } from "./SearchFilters";

const SearchBar = () => {
  return (
    <>
      <div className="centerblock__search search">
        <svg className="search__svg">
          <use xlinkHref="img/icon/sprite.svg#icon-search" />
        </svg>
        <input
          className="search__text"
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className="centerblock__h2">Треки</h2>
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <SearchAuthor></SearchAuthor>
        <SearchYear></SearchYear>
        <SearchType></SearchType>
      </div>
    </>
  );
};

export {SearchBar};
