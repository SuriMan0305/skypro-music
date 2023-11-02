import { useState } from "react";
import { AppRoutes } from "./routes";


function App() {
  const [playerVision, setPlayerVision] = useState(false)
  const [info, setInfo] = useState({
    name: '',
    author: '',
    link: ''
  })
  const [trackList, setTrackList] = useState([]);
  return (
  <div className="App">
    <div className="App-layout">
        <AppRoutes playerVision={playerVision} setPlayerVision={setPlayerVision} info={ info } setInfo={setInfo} trackList={trackList} setTrackList={setTrackList} />
    </div>
  </div>
  )
}

export default App;
