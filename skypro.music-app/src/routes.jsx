import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main";
import { Undefined } from './pages/not-found';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<Undefined />} />
    </Routes>
  );
}