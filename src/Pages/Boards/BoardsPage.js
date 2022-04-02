import { type } from "@testing-library/user-event/dist/type";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MainHeader from "../../Components/MainHeader";
import { ACTION_TYPES, useSmartContext } from "../../state/state";
import "./BoardsPage.css";

export default function Boards() {
  const { state, dispatch } = useSmartContext();

  return (
    <>
      <MainHeader />
      <div className="Boards-Container">
        <input className="new-board-creator" placeholder="Create a new board" />
        <button
          className="board-add-button"
          // onClick={dispatch({
          //   type: ACTION_TYPES.ADD_BOARD,
          //  boardId: Math.random(),
          // })}
        >
          Add a new board
        </button>
        <div className="board">
          {state.boards.map((board) => board.boardTitle)}
          <Link to="/Boards/:Board" >
            <button className="button-to-see-tasks"> See the board </button>
          </Link>
        </div>
      </div>
    </>
  );
}
