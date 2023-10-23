import * as S from './styles'
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
              <S.ModalInput type="text" name="login" placeholder="Почта" />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
              />
              <S.ButtonEnter>
                <a href="../index.html">Войти</a>
              </S.ButtonEnter>
              <S.ButtonSignUp>
                <a href="signup.html">Зарегистрироваться</a>
              </S.ButtonSignUp>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.Container>
      </S.Wrapper>
    </>
  );
};
