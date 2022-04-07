import React from "react";
import MainHeader from "../../Components/MainHeader";
import Board from "../../Components/Board";
import { useSmartContext } from "../../state/state";
import "./SingleBoard.css";
import { ACTION_TYPES } from "../../state/state";
import { useParams } from "react-router";

export default function SingleBoard() {
  const { state, dispatch } = useSmartContext();
  const { boardId } = useParams();
  
  const data = state.boards.filter(item => {
    return item.boardId === boardId
  });

  return (
    <div>
      <MainHeader />
      <div className=" columns-page">
        <div className="add-new-task-box">
          <input
            className="add-new-task"
            type="text"
            placeholder="add a new task"
          />
          <button
            className="add-new-task"
            // onClick={() => dispatch({ type: ACTION_TYPES.ADD_TASK })}
          >
            Add a new task
          </button>
        </div>

        <div className="columns">
          <div className="column-to-do">
            <h1> Tasks To do </h1>
          </div>
          <div className="column-in-process">
            <h1> in Process </h1>
            {data.tasks.map((task) =>
              task.filter(() => task.status === "todo")
            )}
          </div>
          <div className="column-completed">
            <h1> Completed </h1>
            {data.tasks.map((task) =>
              task.filter(() => task.status === "todo")
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
