import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main";
import { Undefined } from './pages/not-found';
import { Sign } from "./pages/login";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/authorization" element={<Sign />} />
      <Route path="*" element={<Undefined />} />
    </Routes>
  );
}