import { NavLink } from "react-router-dom";
import * as S from './UnfoundStylesComponent'
export const NotFoundComponent = () => {
  return (
    <S.Container>
      <S.ErrorContainer>
        <S.Title>404</S.Title>
        <S.Description>
          <p className="title">Страница не найдена</p>
          <S.Smile></S.Smile>
        </S.Description>
        <S.Reason>
          Возможно, она была удалена <br /> или перенесена на другой адрес
        </S.Reason>
        <NavLink to='/'>
          <S.ComebackButton>Вернуться на главную</S.ComebackButton>
        </NavLink>
      </S.ErrorContainer>
    </S.Container>
  );
};
