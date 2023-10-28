import * as S from './AppStyles.js'
import { SidePanel } from "./components/SideBar/MainSideBar";
import { PlayerPanel } from "./components/bottombar/player/Player";
import { MainContent } from "./components/centralBlock/content/Content";
import { SearchBar } from "./components/centralBlock/search/Search";
import { NavPanel } from "./components/navigations/panel/MainNavPanel";

function App() {
  return (
    <>
      <S.AppStyle></S.AppStyle>
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavPanel />
            <S.MainCenterBlock>
              <SearchBar />
              <MainContent />
            </S.MainCenterBlock>
            <SidePanel />
          </S.Main>
          <PlayerPanel></PlayerPanel>
          <footer className="footer" />
        </S.Container>
      </S.Wrapper>
    </>
  );
}

export default App;
