import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Atv01 from "./Semana1/Atv01";
import Atv02 from "./Semana2/Atv02";
import Atv03 from "./Semana3/Atv03";
import Atv04 from "./Semana4/Atv04";
import Atv05 from "./Semana5/Atv05";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atv01" element={<Atv01 />} />
        <Route path="/atv02" element={<Atv02 />} />
        <Route path="/atv03" element={<Atv03 />} />
        <Route path="/atv04" element={<Atv04 />} />
        <Route path="/atv05" element={<Atv05 />} />
      </Routes>
    </BrowserRouter>
  );
}
