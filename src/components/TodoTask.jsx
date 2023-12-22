import React from "react";
import "../App.css";

const TodoTask = ({ task, onCompleteToggle, onEditTask, onDeleteTask }) => {
  return (
    <li className="flex items-center mb-2">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={onCompleteToggle}
        className="mr-2"
      />
      <span className={`flex-1 ${task.completed ? "line-through" : ""}`}>
        {task.task}
      </span>
      <div className="my-1 flex gap-2">
        <button onClick={onEditTask} className="btn">
          Edit
        </button>
        <button onClick={onDeleteTask} className="btn">
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoTask;
