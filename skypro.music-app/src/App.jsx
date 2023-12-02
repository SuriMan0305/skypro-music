import { useState } from "react";
import { AppRoutes } from "./routes";
import { UserContext } from "./context/userInfo";

function App() {
  const [playerVision, setPlayerVision] = useState(false);
  const [info, setInfo] = useState({
    name: "",
    author: "",
    link: "",
  });

  return (
    <div className="App">
      <div className="App-layout">
        <UserContext.Provider value={JSON.parse(localStorage.getItem('idUser'))}>
          <AppRoutes
            playerVision={playerVision}
            setPlayerVision={setPlayerVision}
            info={info}
            setInfo={setInfo}
          />
        </UserContext.Provider>
      </div>
    </div>
  );
}

export default App;
