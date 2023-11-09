import { NavLink, useNavigate} from "react-router-dom";
import * as S from "./styles";
import { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import { authorization } from "../../apimodules/api";

export const Sign = () => {
  const navigate = useNavigate()

  const [errorInputs, setErrorInputs] = useState('');
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [key, setKey] = useState(localStorage.getItem('idUser'))

  const writeEmail = (e) => {
    setEmailInput(e.currentTarget.value);
  };

  const writePassword = (e) => {
    setPasswordInput(e.currentTarget.value);
  };

  const onEnterClick = () => {
      authorization({email: emailInput, password: passwordInput}).then((response) => {
        if (response.id !== undefined) {
          setErrorInputs('')
          localStorage.setItem("idUser", response.id)
          return setKey(localStorage.getItem("idUser", response.id));
        } else if (response.email !== undefined) {
          setErrorInputs(`${response.email} - поле 'Почта'`)
        } else if (response.password !== undefined) {
          setErrorInputs(`${response.password} - поле 'Пароль'`)
        } else if (response.detail !== undefined) {
          setErrorInputs(response.detail)
        }
      })
  }

  useEffect(() => {
    if (key) {
      navigate('/', {replace: true})
    }
  }, [emailInput, passwordInput, key, errorInputs])

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
                <S.ModalInput type="text" name="login" placeholder="Почта" onChange={writeEmail}/>
                <S.ModalInput
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  onChange={writePassword}
                />
              </S.InputBlock>
              <S.Validation>{errorInputs}</S.Validation>
              <S.ButtonEnter>
                <NavLink to={key ? "/" : '/login'} onClick={() => {
                  onEnterClick()
                }}>Войти</NavLink>
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
