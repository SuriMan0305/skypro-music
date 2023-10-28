import { Routes, Route, useNavigate } from "react-router-dom";
import { Main } from "./pages/main";
import { Undefined } from "./pages/not-found";
import { Sign } from "./pages/login";
import { Reg } from "./pages/registration";
import { Playlist } from "./pages/playlist";
import { PlaylistDaily } from "./pages/selections/dailyPlaylist";
import { PlaylistDanceHits } from "./pages/selections/dancungHits";
import { PlaylistIndy } from "./pages/selections/indyCharge";
import { CATEGORIES, TOKEN } from "./constants";
import { ProtectedRoute } from "./components/protect";
import { useEffect } from "react";

export const AppRoutes = ({ categories = CATEGORIES}) => {
  const navigate = useNavigate()
  useEffect(() => {
    localStorage.getItem('token')
    if (localStorage.getItem('token') === 'true') {
      return navigate('/')
    }
  },[])
  return (
    <Routes>
        <Route path="/login" element={<Sign />} />
        <Route path="/register" element={<Reg />} />


      <Route element={<ProtectedRoute isAllowed={localStorage.getItem('token') === 'true' ? true : false}/>} >
        <Route path="/" element={<Main />}>
        </Route>
        <Route path="/favorites" element={<Playlist />} />
          <Route
            path={`/category/${categories[0].id}`}
            element={<PlaylistDaily />}
          />
          <Route
            path={`/category/${categories[1].id}`}
            element={<PlaylistDanceHits />}
          />
          <Route
            path={`/category/${categories[2].id}`}
            element={<PlaylistIndy />}
          />
      </Route>

      <Route path="*" element={<Undefined />} />
    </Routes>
  );
};
