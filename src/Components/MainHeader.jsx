import React from "react";
import "./MainHeader.css";
import Trello from "../assets/Trello-Logo-2011-2016.png";
import { Link } from "react-router-dom";

export default function MainHeader() {
  return (
    <header>
      <div className="main-header">
        <Link to="/boards">
          <img src={Trello} alt="logo" width="100" height="50" />
        </Link>


          <Link to="/boards">
            <a className="boards"> Home (Boards) </a>
          </Link>
       
      </div>
    </header>
  );
}
