import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Login from "./Pages/Login/Login";
import SingleTask from "./Pages/SingleTask/SingleTask";
import NoPage from "./Pages/noPage";
import { ContextProvider } from "./state/state";
import Boards from "./Pages/Boards/Boards";
import SingleBoard from "./Pages/Single_Board/SingleBoard";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/boards"
              element={
                <PrivateRoute>
                  <Boards />
                </PrivateRoute>
              }
            />
            <Route path="/boards/:boardId" element={<SingleBoard />} />
            <Route path="/Boards/:Board/:taskId" element={<SingleTask />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
