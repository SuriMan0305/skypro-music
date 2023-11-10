import styled, { createGlobalStyle } from "styled-components";

export const Base = createGlobalStyle`
@font-face {
  font-family: "StratosSkyeng";
  src: local("StratosSkyeng"), local("StratosSkyeng"),
    url("/fonts/StratosSkyeng.woff2") format("woff2"),
    url("/fonts/StratosSkyeng.woff") format("woff"),
    url("/public/fonts/StratosSkyeng.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: "StratosSkyeng", sans-serif;
  cursor: pointer;
}

button {
  cursor: pointer;
}

ul li {
  list-style: none;
}


html,
body {
  width: 100%;
  height: 100%;
  font-family: "StratosSkyeng", sans-serif;
}
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`;

export const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: rgba(0, 0, 0, 0.85);
`;

export const ModalBlock = styled.div`
  position: absolute;
  z-index: 2;
  left: calc(50% - (366px / 2));
  top: calc(50% - (439px / 2));
  opacity: 1;
`;
export const ModalFormLogin = styled.div`
  width: 366px;
  height: 439px;
  background-color: #ffffff;
  border-radius: 12px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 43px 47px 47px 40px;
  input:first-child {
    margin-bottom: 30px;
  }
`;
export const ModalLogo = styled.div`
  width: 140px;
  height: 21px;
  margin-bottom: 34px;
  background-color: transparent;
  img {
    width: 140px;
    height: auto;
  }
`;
export const InputBlock = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 100px;
`
export const ModalInput = styled.input`
  font-family: "StratosSkyeng", sans-serif;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;
  &::-webkit-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }
  &:-ms-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }
  &::-ms-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }
  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }
`;

export const Validation = styled.div`
  margin-top: -100px;
  margin-bottom: 20px;
  color: red;
`

export const ButtonEnter = styled.button`
  width: 278px;
  height: 52px;
  background-color: #580ea2;
  border-radius: 6px;

  margin-bottom: 20px;
  border: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  color:white;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  &:hover {
    background-color: #3f007d;
  }
  &:active {
    background-color: #271a58;
  }
  &:disabled {
    background-color: #271a58;
  }
`;
export const ButtonSignUp = styled.button`
  width: 278px;
  height: 52px;
  background-color: transparent;
  border: 1px solid #d0cece;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #000000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  a {
    width: 100%;
    height: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #000000;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  &:hover {
    background-color: #f4f5f6;
  }
  &:active {
    background-color: #d9d9d9;
  }
`;
