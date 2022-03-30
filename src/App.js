import React from "react";
import { ReactDOM } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Boards from "./Pages/Boards/Boards";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Signin from "./Pages/Sign-in/Signin";
import SingleTask from "./Pages/SingleTask/SingleTask";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Visit />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Boards" element={<Boards />}>
            <Route path="/Boards/:Board">
              element={<Board />}
              <Route path="/Boards/:Board/:taskId" element={<SingleTask />} />
            </Route>
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
