import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Trello from "../assets/Trello-Logo-2011-2016.png";

export default function Header() {
  return (
    <header>
      <div className="header">
        <div>
          <img src={Trello} alt="logo" width="100" height="50" />
        </div>

        <div className="login-block">
          <Link to="/login">
            <a className="Login-button"> Login </a>
          </Link>

          <button className="sign-up-button" >Sign up</button>
        </div>
      </div>
    </header>
  );
}
