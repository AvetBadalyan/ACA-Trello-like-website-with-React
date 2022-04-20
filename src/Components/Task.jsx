import React from "react";
import "./Task.css";

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
    <div className="task" key={id}>
      <div className="row">Title: {title} </div>
      <div className="row">priority: {priority} </div>
      <div className="row">
        status:
        <select name="status" id="">
          <option value={status}>{status}</option>
          <option value={status}>DOING</option>
          <option value={status}>DONE</option>
        </select>
      </div>

      <div className="row">category: {category}</div>
      <div className="row">description: {description}</div>
      <button onClick={() => deleteTask(id)}> delete task </button>
      <button onClick={() => editTask(id)}> edit task </button>
    </div>
  );
}
