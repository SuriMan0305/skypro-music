import { Routes, Route, useNavigate} from "react-router-dom";
import { Main } from "./pages/main";
import { Undefined } from "./pages/not-found";
import { Sign } from "./pages/login";
import { Reg } from "./pages/registration";
import { Playlist } from "./pages/playlist";
import { ProtectedRoute } from "./components/protect";
import { useEffect } from "react";
import { Collections } from "./pages/selections/collections";

export const AppRoutes = ({playerVision, setPlayerVision, info, setInfo, trackList, setTrackList, realDuration, setRealDuration}) => {
  const navigate = useNavigate() //без этого кусочука почему-то не работает как надо
  useEffect(() => {
    localStorage.getItem('token')
  },[])
  return (
    <Routes>
        <Route path="/login" element={<Sign />} />
        <Route path="/register" element={<Reg />} />


      <Route element={<ProtectedRoute isAllowed={localStorage.getItem('token') === 'true' ? true : false}/>} >
        <Route path="/" element={<Main playerVision={playerVision} setPlayerVision={ setPlayerVision } info={ info } setInfo={setInfo} trackList={trackList} setTrackList={setTrackList} realDuration={realDuration} setRealDuration={setRealDuration}/>}>
        </Route>
        <Route path="/favorites" element={<Playlist playerVision={playerVision} setPlayerVision={ setPlayerVision } info={ info } setInfo={setInfo}/>} />
          <Route
            path={`/category/:id`}
            element={<Collections playerVision={playerVision} setPlayerVision={ setPlayerVision } info={ info } setInfo={setInfo}/>}
          />
      </Route>

        <Route path='*' element={<Undefined />} />
    </Routes>
  );
};
