import * as S from "../MainBlockStyles";
import { SearchFilters } from "../filters/SearchFilters";
export const FilterBlock = () => {
  return (
    <S.BlockFilter>
      <S.BlockFilterTitle>Искать по:</S.BlockFilterTitle>
      <SearchFilters></SearchFilters>
    </S.BlockFilter>
  );
};
