import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateGame from "./pages/CreateGame";
import Login from "./pages/Login";
import ManageGames from "./pages/ManageGames";
import Overlay from "./pages/Overlay";
import Protected from "./components/Protected/Protected";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route
            index
            element={
              <Protected>
                <Home />
              </Protected>
            }
          />

          <Route
            path='creategame'
            element={
              <Protected>
                <CreateGame />
              </Protected>
            }
          />
          <Route
            path='managegames'
            element={
              <Protected>
                <ManageGames />
              </Protected>
            }
          />
        </Route>

        <Route path='login' element={<Login />} />
        <Route
          path='overlay'
          element={
            <Protected>
              <Overlay />
            </Protected>
          }
        />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
