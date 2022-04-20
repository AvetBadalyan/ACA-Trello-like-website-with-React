import React from "react";

export default function Task({
  id,
  status,
  category,
  description,
  title,
  priority,
}) {
  const deleteTask = () => {};
  const editTask = () => {};

  return (
    <div className="task" key={task.id}>
      <span>{title} </span>
      <span>{priority} </span>
      <button onClick={() => deleteTask(id)}> delete task </button>
      <button onClick={() => editTask(id)}> edit task </button>
    </div>
  );
}
