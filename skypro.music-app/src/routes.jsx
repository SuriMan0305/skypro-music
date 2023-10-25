import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main";
import { Undefined } from './pages/not-found';
import { Sign } from "./pages/login";
import { Reg } from "./pages/registration";
import { Playlist } from "./pages/playlist";
import { PlaylistDaily } from "./pages/selections/dailyPlaylist";
import { PlaylistDanceHits } from "./pages/selections/dancungHits";
import { PlaylistIndy } from "./pages/selections/indyCharge";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/" element={<Sign />} />
      <Route path="/sign" element={<Reg />} />
      <Route path="/myplaylist" element={<Playlist />} />
      <Route path="/category1/" element={<PlaylistDaily />} />
      <Route path="/category2/" element={<PlaylistDanceHits />} />
      <Route path="/category3/" element={<PlaylistIndy />} />
      <Route path="*" element={<Undefined />} />
    </Routes>
  );
}