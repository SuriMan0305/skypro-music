import { NavLink} from "react-router-dom";
import * as S from "./styles";

export const Sign = () => {
  return (
    <>
      <S.Base />
      <S.Wrapper>
        <S.Container>
          <S.ModalBlock>
            <S.ModalFormLogin action="#!">
              <a href="../">
                <S.ModalLogo>
                  <img src="../img/logo_modal.png" alt="logo" />
                </S.ModalLogo>
              </a>
              <S.InputBlock>
                <S.ModalInput type="text" name="login" placeholder="Почта" />
                <S.ModalInput
                  type="password"
                  name="password"
                  placeholder="Пароль"
                />
              </S.InputBlock>
              <S.ButtonEnter>
                <NavLink to="/">Войти</NavLink>
              </S.ButtonEnter>
              <S.ButtonSignUp>
                <NavLink to="/register">Зарегистрироваться</NavLink>
              </S.ButtonSignUp>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.Container>
      </S.Wrapper>
    </>
  );
};
