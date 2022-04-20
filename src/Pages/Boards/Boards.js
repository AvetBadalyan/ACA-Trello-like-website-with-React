import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import MainHeader from "../../Components/MainHeader";
import { ACTION_TYPES, useSmartContext } from "../../state/state";
import "./Boards.css";

export default function Boards() {
  const { state, dispatch } = useSmartContext();
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    dispatch({
      type: ACTION_TYPES.ADD_BOARD,
      payload: {
        boardId: Math.random(),
        boardTitle: inputValue,
      },
    });
  };

  return (
    <>
      <MainHeader />
      <div className="Boards-page">
        <input
          className="new-board-creator"
          placeholder="Create a new board"
          value={inputValue}
          onChange={inputHandler}
        />
        <button className="board-add-button" onClick={handleClick}>
          Add a new board
        </button>

        <div className="all-boards-together">
          {state.boards.map((board) => {
            return (
              <div className="board">
                <h1> {board.boardTitle} </h1>

                <Link to={`/boards/${board.boardTitle}`}>
                  <button className="button-to-see-tasks">See the board</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
