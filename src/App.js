import React, { useReducer, useState } from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Boards from "./Pages/Boards/Boards";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Login from "./Pages/Login/Login";
import SingleTask from "./Pages/SingleTask/SingleTask";
import NoPage from "./Pages/noPage";
import Board from "./Pages/Boards/Board";
import { ContextProvider } from "./state/state";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/boards" element={<Boards />} />
            <Route path="/Boards/:Board" element={<Board />} />
            <Route path="/Boards/:Board/:taskId" element={<SingleTask />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
