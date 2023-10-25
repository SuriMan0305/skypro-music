import * as S from "./styles";
import { NavLink } from "react-router-dom";

export const Reg = () => {
  return (
    <>
      <S.Base></S.Base>
      <S.Wrapper>
        <S.Container>
          <S.ModalBlock>
            <S.ModalFormLogin>
              <a href="../">
                <S.ModalLogo>
                  <img src="../img/logo_modal.png" alt="logo" />
                </S.ModalLogo>
              </a>
              <S.ModalInput type="text" name="login" placeholder="Почта" />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Повторите пароль"
              />
              <S.ButtonSignUp>
                <NavLink to='/'>Зарегистрироваться</NavLink>
              </S.ButtonSignUp>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.Container>
      </S.Wrapper>
    </>
  );
};
