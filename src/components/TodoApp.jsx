import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setTask,
  setFilterStatus,
  addTask,
  editTask,
  deleteTask,
  toggleComplete,
} from "../redux/Slice/todoSlice";
import TaskList from "./TaskList";
import FilterButtons from "./FilterButtons";
import PropTypes from "prop-types";

const TodoApp = () => {
  const dispatch = useDispatch();
  const { task, tasks, editIndex, filterStatus } = useSelector(
    (state) => state.todo
  );

  const handleInputChange = (e) => {
    dispatch(setTask(e.target.value));
  };

  const handleAddTask = () => {
    dispatch(addTask());
  };

  const handleEditTask = (index) => {
    dispatch(editTask(index));
  };

  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index));
  };

  const handleToggleComplete = (index) => {
    dispatch(toggleComplete(index));
  };

  const handleFilterChange = (status) => {
    dispatch(setFilterStatus(status));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filterStatus === "all") {
      return true;
    } else if (filterStatus === "completed") {
      return task.completed;
    } else if (filterStatus === "incomplete") {
      return !task.completed;
    }
    return true;
  });

  return (
    <div className="max-w-lg mx-auto mt-8 p-4 border rounded">
      <h3 className="text-xl font-semibold mb-4 text-center">My Todo List :</h3>
      <div className="mb-4 flex">
        <input
          type="text"
          placeholder="Add a task"
          value={task}
          onChange={handleInputChange}
          className="w-full p-2 border rounded mr-2"
        />
        <button onClick={handleAddTask} className="btn">
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>
      <FilterButtons onFilterChange={handleFilterChange} />
      <TaskList
        tasks={filteredTasks}
        onCompleteToggle={handleToggleComplete}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

TodoApp.propTypes = {
  task: PropTypes.string,
};
export default TodoApp;
