import "./App.css";

import { SidePanel } from "./components/SideBar/MainSideBar";
import {PlayerPanel} from "./components/bottombar/Player";
import{ MainContent} from "./components/centralBlock/Content";
import {SearchBar} from "./components/centralBlock/Search";
import { NavPanel } from "./components/navigations/MainNavPanel";


function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <NavPanel />
          <div className="main__centerblock centerblock">
            <SearchBar />
            <MainContent />
          </div>
          <SidePanel />
        </main>
        <PlayerPanel />
        <footer className="footer" />
      </div>
    </div>
  );
}

export default App;
