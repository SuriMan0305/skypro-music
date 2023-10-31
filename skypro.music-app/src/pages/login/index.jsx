import { NavLink, useNavigate} from "react-router-dom";
import * as S from "./styles";

export const Sign = () => {

  const letEnter = () => {
    return localStorage.setItem('token', true)
  }

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
                <NavLink to="/" onClick={letEnter}>Войти</NavLink>
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
