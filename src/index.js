import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import CreateGame from "./pages/CreateGame";
import ManageGames from "./pages/ManageGames";
import Overlay from "./pages/Overlay";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='overlay' element={<Overlay />} />
      <Route path='creategame' element={<CreateGame />} />
      <Route path='managegames' element={<ManageGames />} />
    </Routes>
  </BrowserRouter>
);
