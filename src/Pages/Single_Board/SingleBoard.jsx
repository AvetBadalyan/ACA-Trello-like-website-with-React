import React, { useEffect, useState } from "react";
import MainHeader from "../../Components/MainHeader";
import { useSmartContext } from "../../state/state";
import "./SingleBoard.css";
import { ACTION_TYPES } from "../../state/state";
import { useParams } from "react-router";
import Modal from "../../Components/Modal";
import Task from "../../Components/Task";

export default function SingleBoard() {
  const [inputValue, setInputValue] = useState("");
  const { state, dispatch } = useSmartContext();
  const { boardId } = useParams();

  const STATUSES = {
    TODO: "TODO",
    DOING: "DOING",
    DONE: "DONE",
  };

  const openModal = () => {
    dispatch({ type: ACTION_TYPES.TOGGLE_MODAL });
  };

  const deleteTask = () => {};

  const editTask = () => {};

  const data = state.boards.find((item) => item.boardTitle === boardId).tasks;

  return (
    <div>
      <MainHeader />
      {state.isModalOpen && <Modal category={boardId} />}
      <div className=" columns-page">
        <div className="add-new-task-box">
          <button
            className="add-new-task"
            onClick={() => dispatch({ type: ACTION_TYPES.TOGGLE_MODAL })}
          >
            Add a new task
          </button>
        </div>

        <div className="columns">
          <div className="column-to-do">
            <h1> Tasks To do </h1>
            {data?.length &&
              data
                .filter((task) => task.status === "todo")
                .map((task) => (
                  <Task
                    key={task.id}
                    title={task.title}
                    id={task.id}
                    description={task.description}
                    category={task.category}
                    priority={task.priority}
                    status={task.status}
                  />
                ))}
          </div>
          <div className="column-in-process">
            <h1> in Process </h1>
            {data?.length &&
              data
                .filter((task) => task.status === "doing")
                .map((task) => <div key={task.id}>{task.title}</div>)}
          </div>
          <div className="column-completed">
            <h1> Completed </h1>
            {data?.length &&
              data
                .filter((task) => task.status === "done")
                .map((task) => <div key={task.id}>{task.title}</div>)}
          </div>
        </div>
      </div>
      :
    </div>
  );
}
