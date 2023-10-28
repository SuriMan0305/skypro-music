import { Routes, Route, useNavigate} from "react-router-dom";
import { Main } from "./pages/main";
import { Undefined } from "./pages/not-found";
import { Sign } from "./pages/login";
import { Reg } from "./pages/registration";
import { Playlist } from "./pages/playlist";
import { ProtectedRoute } from "./components/protect";
import { useEffect } from "react";
import { Collections } from "./pages/selections/collections";

export const AppRoutes = () => {
  const navigate = useNavigate()
  useEffect(() => {
    localStorage.getItem('token')
    navigate('/')
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
            path={`/category/:id`}
            element={<Collections />}
          />
      </Route>

        <Route path='*' element={<Undefined />} />
    </Routes>
  );
};
