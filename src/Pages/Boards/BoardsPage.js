import React, { useContext } from "react";
import MainHeader from "../../Components/MainHeader";
import { ACTION_TYPES, useSmartContext } from "../../state/state";

export default function Boards() {
  const { state, dispatch } = useSmartContext();

  return (
    <>
      <MainHeader />
      <div className="Boards-Container">
        <input className="new-board-creator" placeholder="Create a new board" />
        <button
          className="board-add-button"
          onClick={dispatch({
            type: ACTION_TYPES.ADD_BOARD,
            boardName: "New Board",
            boardId: Math.random(),
          })}
        >
          Add a new board
        </button>

        <div className="boardContainer">
          {state.boards.map((item) => (
            <Boards
              key={Math.random()}
              title={item.boardTitle}
              boardId={item.boardId}
            />
          ))}
        </div>
      </div>
    </>
  );
}
