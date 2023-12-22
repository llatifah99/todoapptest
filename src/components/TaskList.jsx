import React from "react";
import TodoTask from "./TodoTask";
import "../App.css";

const TaskList = ({ tasks, onCompleteToggle, onEditTask, onDeleteTask }) => {
  return (
    <ul className="list-none">
      {tasks.map((task, index) => (
        <TodoTask
          key={index}
          task={task}
          onCompleteToggle={() => onCompleteToggle(index)}
          onEditTask={() => onEditTask(index)}
          onDeleteTask={() => onDeleteTask(index)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
