import React, { useState } from "react";

import { ACTION_TYPES, useSmartContext } from "../state/state";
import "./../App.css";
import Input from "./Input";

export default function Modal({ category }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { state, dispatch } = useSmartContext();

  const createTaskHandler = () => {
    const task = {
      title,
      description,
      category,
      status: "todo",
      priority: "low",
    };
    dispatch({ type: ACTION_TYPES.ADD_TASK, task: task });
    dispatch({ type: ACTION_TYPES.TOGGLE_MODAL });
  };

  return (
    <div className="modal">
      <div className="modalContent">
        <label htmlFor="">
          title
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="title"
          />
        </label>

        <label htmlFor="">
          description
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="description"
          />
        </label>

        <label htmlFor="">
          Priority
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="high/low/medium"
          />
        </label>

        <button onClick={createTaskHandler}> Create a new task </button>
      </div>
    </div>
  );
}
