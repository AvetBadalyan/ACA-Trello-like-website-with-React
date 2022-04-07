import React from "react";
import { Link } from "react-router-dom";
import SingleBoard from "../Pages/Single_Board/SingleBoard";
import "./Board.css";


export default function Board({ boardTitle, boardId, board }) {

  return (
    <div className="board">
      <h1> {boardTitle} </h1>
     

      <Link to={`/boards/${boardId}`}>
        <button className="button-to-see-tasks"> See the board </button>
      </Link>
    </div>
  );
}
