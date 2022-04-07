import React, { useEffect, useState } from "react";
import MainHeader from "../../Components/MainHeader";
import Board from "../../Components/Board";
import { useSmartContext } from "../../state/state";
import "./SingleBoard.css";
import { ACTION_TYPES } from "../../state/state";
import { useParams } from "react-router";
import { projectFireStore } from "../../firebase/index";

export default function SingleBoard() {
  const [isLoading, setIsLoading] = useState(false);
  const { state, dispatch } = useSmartContext();
  const { boardId } = useParams();

  useEffect(() => {
    let results = [];
    setIsLoading(true);
    projectFireStore
      .collection("/tasks")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() });
        });
        dispatch({ type: ACTION_TYPES.SET_TASKS, tasks: results });
        setIsLoading(false);
      });
  }, []);

  const data = state.boards.filter((item) => {
    return item.boardId === boardId;
  });

  return (
    <div>
      <MainHeader />

      {isLoading ? (
        <div>...loading</div>
      ) : (
        state.tasks.map((task) => (
          <div key={task.id}>
            <span>{task.title} </span>
            <span>{task.priority} </span>
          </div>
        ))
      )}

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
