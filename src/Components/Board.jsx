import React from "react";
import { Link } from "react-router-dom";
import "./Board.css";


export default function Board({ boardTitle, boardId }) {
  return (
    <div className="board">
      <h1> {boardTitle} </h1>
      <Link to={`/boards/${boardId}`} > 
        <button className="button-to-see-tasks"> See the board </button>
      </Link>
    </div>
  );
}
