import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Main } from "./pages/main";
import { Undefined } from "./pages/not-found";
import { Sign } from "./pages/login";
import { Reg } from "./pages/registration";
import { Playlist } from "./pages/playlist";
import { ProtectedRoute } from "./components/protect";
import React, { useEffect } from "react";
import { Collections } from "./pages/selections/collections";

export const AppRoutes = ({
  playerVision,
  setPlayerVision,
  info,
  setInfo,
  trackList,
  setTrackList,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("idUser")) {
      navigate("/", { replace: true });
    }
  }, []);
  return (
    <Routes>
      <Route path="/login" element={<Sign />} />
      <Route path="/register" element={<Reg />} />

      <Route
        element={
          <ProtectedRoute
            isAllowed={localStorage.getItem("idUser") !== null ? true : false}
          />
        }>
        <Route
          path="/"
          element={
              <Main
                playerVision={playerVision}
                setPlayerVision={setPlayerVision}
                info={info}
                setInfo={setInfo}
                trackList={trackList}
                setTrackList={setTrackList}
              />
          }></Route>
        <Route
          path="/favorites"
          element={
            <Playlist
              playerVision={playerVision}
              setPlayerVision={setPlayerVision}
              info={info}
              setInfo={setInfo}
            />
          }
        />
        <Route
          path={`/category/:id`}
          element={
            <Collections
              playerVision={playerVision}
              setPlayerVision={setPlayerVision}
              info={info}
              setInfo={setInfo}
            />
          }
        />
      </Route>

      <Route path="*" element={<Undefined />} />
    </Routes>
  );
};
