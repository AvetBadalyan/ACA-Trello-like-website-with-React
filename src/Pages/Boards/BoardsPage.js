import { type } from "@testing-library/user-event/dist/type";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MainHeader from "../../Components/MainHeader";
import { ACTION_TYPES, useSmartContext } from "../../state/state";
import Board from "../../Components/Board";
import "./BoardsPage.css";

export default function Boards() {
  const { state, dispatch } = useSmartContext();

  return (
    <>
      <MainHeader />
      <div className="Boards-page">
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
        <div className="all-boards-together">
          {state.boards.map((board) => (
            <Board boardTitle={board.boardTitle} key={board.boardId} />
          ))}
        </div>
      </div>
    </>
  );
}
