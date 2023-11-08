import { useEffect, useState } from "react";
import * as S from "./styles";
import { NavLink } from "react-router-dom";
import { registration } from "../../apimodules/api";

export const Reg = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [repeatInput, setRepeatInput] = useState("");
  const [errorInputs, setErrorInputs] = useState("");

  const writeEmail = (e) => {
    setEmailInput(e.currentTarget.value);
  };

  const writePassword = (e) => {
    setPasswordInput(e.currentTarget.value);
  };

  const repeatPassword = (e) => {
    setRepeatInput(e.currentTarget.value);
  };

  const onButtonClick = () => {
    if (
      passwordInput === repeatInput &&
      passwordInput.length >= 8 &&
      emailInput.length > 0
    ) {
      registration({ email: emailInput, password: passwordInput }).then(
        (response) => {
          if (response.id !== undefined) {
            setErrorInputs('')
            return localStorage.setItem("idUser", response.id);
          } else if (response.email !== undefined) {
            setErrorInputs(response.email);
          } else if (response.password !== undefined) {
            setErrorInputs(response.password);
          }
        }
      );
    } else if (emailInput.length === 0) {
      setErrorInputs(`Input 'email' is empty`);
    } else if (passwordInput.length === 0 || repeatInput.length === 0) {
      setErrorInputs(`Inputs 'password' is empty`);
    } else if (passwordInput.length < 8 || repeatInput.length < 8) {
      setErrorInputs(`Minimal long password 8 symbols`);
    } else if (passwordInput !== repeatInput) {
      setErrorInputs(`Password mismatch`);
    }
    console.log(localStorage.getItem('idUser'));
  };

  useEffect(() => {}, [emailInput, passwordInput, repeatInput]);

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
              <S.ModalInput
                type="text"
                name="email"
                placeholder="Почта"
                onChange={(e) => {
                  writeEmail(e);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                onChange={(e) => {
                  writePassword(e);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Повторите пароль"
                onChange={(e) => {
                  repeatPassword(e);
                }}
              />
              <S.Error>{errorInputs}</S.Error>
              <S.ButtonSignUp>
                <NavLink to={localStorage.getItem('idUser') ? '/' : '/register'} onClick={onButtonClick}>
                  Зарегистрироваться
                </NavLink>
              </S.ButtonSignUp>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.Container>
      </S.Wrapper>
    </>
  );
};
