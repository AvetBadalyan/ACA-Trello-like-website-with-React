import React, { useMemo } from "react";
import Task from "./Task";

export default function TaskColumn({ status, tasks }) {
  const filterTasks = useMemo(
    () => tasks.filter((item) => item.status === status),
    [tasks.status]
  );

  return (
    <div>
      {filterTasks.map((item) => (
        <Task key={item.id} {...item} />
      ))}
          <button> Add a new task </button>
    </div>
  );
}
