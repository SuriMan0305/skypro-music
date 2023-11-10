import { useEffect, useState } from "react";
import * as S from "./styles";
import { NavLink, useNavigate } from "react-router-dom";
import { registration } from "../../apimodules/api";

export const Reg = () => {
  const navigate = useNavigate()

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [repeatInput, setRepeatInput] = useState("");
  const [errorInputs, setErrorInputs] = useState("");
  const [key, setKey] = useState(localStorage.getItem('idUser'))
  const [load, setLoad] = useState(false)

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
    setLoad(true)
    if (
      passwordInput === repeatInput &&
      passwordInput.length >= 8 &&
      emailInput.length > 0
    ) {
      registration({ email: emailInput, password: passwordInput }).then(
        (response) => {
          if (response.id !== undefined) {
            setErrorInputs('')
            localStorage.setItem("idUser", JSON.stringify({
              id: response.id,
              username: response.username,
              first_name: response.first_name,
              last_name: response.last_name,
              email: response.email
            }))
            return setKey(localStorage.getItem("idUser", response.id));
          } else if (response.email !== undefined) {
            setErrorInputs(response.email);
          } else if (response.password !== undefined) {
            setErrorInputs(response.password);
          }
        }
      ).then(() => {
        setLoad(false)
      })
    } else if (emailInput.length === 0) {
      setLoad(false)
      setErrorInputs(`Input 'email' is empty`);
    } else if (passwordInput.length === 0 || repeatInput.length === 0) {
      setLoad(false)
      setErrorInputs(`Inputs 'password' is empty`);
    } else if (passwordInput.length < 8 || repeatInput.length < 8) {
      setLoad(false)
      setErrorInputs(`Minimal long password 8 symbols`);
    } else if (passwordInput !== repeatInput) {
      setLoad(false)
      setErrorInputs(`Password mismatch`);
    }
  };

  useEffect(() => {
    if (key) {
      navigate('/', {replace: true})
    }
  }, [emailInput, passwordInput, repeatInput, key]);

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
              <NavLink to={key ? '/' : '/register'}>
                <S.ButtonSignUp onClick={
                  onButtonClick
                } disabled={load ? true : false}>
                  Зарегистрироваться
                </S.ButtonSignUp>
              </NavLink>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.Container>
      </S.Wrapper>
    </>
  );
};
