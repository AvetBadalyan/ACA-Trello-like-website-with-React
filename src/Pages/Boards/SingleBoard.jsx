import React from "react";
import MainHeader from "../../Components/MainHeader";
import Board from "../../Components/Board";
import { useSmartContext } from "../../state/state";
import "./SingleBoard.css";
import { ACTION_TYPES } from "../../state/state";

export default function SingleBoard() {
  const { state, dispatch } = useSmartContext();

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
            {/* state.boards.map((board) => {
           return board.tasks.map((task) => {
            return task.filter(() => task.status === "todo");
           });
        }) */}
          </div>
          <div className="column-in-process">
            <h1> in Process </h1>
            {/* state.boards.map((board) => {
           return board.tasks.map((task) => {
            return task.filter(() => task.status === "doing");
           });
        }) */}
          </div>
          <div className="column-completed">
            <h1> Completed </h1>
            {/* state.boards.map((board) => {
           return board.tasks.map((task) => {
            return task.filter(() => task.status === "done");
           });
        }) */}
          </div>
        </div>
      </div>
    </div>
  );
}
