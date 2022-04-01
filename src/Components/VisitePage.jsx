import React from 'react';
import Visit from "../assets/hero.png";
import "./VisitePage.css";

export default function VisitePage() {
  return (
    <div className="Visit-Page">
      <div className="page-text">
        <h1> Trello helps teams move work forward.</h1>
        <h3>
          Collaborate, manage projects, and reach new productivity peaks. <br />{" "}
          From high rises to the home office, the way your team works <br /> is
          unique—accomplish it all with Trello.
        </h3>
      </div>

      <img src={Visit} alt="image" width="500" height="500" />
    </div>
  );
}
