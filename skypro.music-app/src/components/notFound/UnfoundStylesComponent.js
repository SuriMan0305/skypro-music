import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 225px;
`;
export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 431px;
  height: 366px;
  text-align: center;
`;
export const Title = styled.div`
  font-size: 160px;
  line-height: 168px;
`;
export const Description = styled.div`
  display: flex;
  gap: 8px;
  font-size: 32px;
  line-height: 40px;
`;
export const Smile = styled.div`
  width: 52px;
  height: 52px;
  background-image: url("/img/crying.png");
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Reason = styled.div`
  @font-face {
    font-family: "StratosSkyeng";
    src: local("StratosSkyeng"), local("StratosSkyeng"),
      url("/fonts/StratosSkyeng.woff2") format("woff2"),
      url("/fonts/StratosSkyeng.woff") format("woff");
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.3%;
  }
  font-family: "StratosSkyeng", sans-serif;
  color: #4e4e4e;
  margin-bottom: 36px;
`;
export const ComebackButton = styled.button`
  width: 278px;
  height: 52px;
  border-radius: 6px;
  border: none;
  background-color: #580ea2;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.3%;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #3f007d;
  }
  &:active {
    background-color: #271a58;
  }
`;