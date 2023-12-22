import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    tasks: [],
    task: "",
    editIndex: null,
    filterStatus: "all",
  },
  reducers: {
    setTask: (state, action) => {
      state.task = action.payload;
    },
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    setEditIndex: (state, action) => {
      state.editIndex = action.payload;
    },
    setFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
    addTask: (state) => {
      if (state.task.trim() !== "") {
        if (state.editIndex !== null) {
          state.tasks[state.editIndex] = { task: state.task, completed: false };
          state.editIndex = null;
        } else {
          state.tasks.push({ task: state.task, completed: false });
        }
        state.task = "";
      }
    },
    editTask: (state, action) => {
      state.task = state.tasks[action.payload].task;
      state.editIndex = action.payload;
    },
    deleteTask: (state, action) => {
      state.tasks.splice(action.payload, 1);
      state.editIndex = null;
    },
    toggleComplete: (state, action) => {
      state.tasks[action.payload].completed =
        !state.tasks[action.payload].completed;
    },
  },
});

export const {
  setTask,
  setTasks,
  setEditIndex,
  setFilterStatus,
  addTask,
  editTask,
  deleteTask,
  toggleComplete,
} = todoSlice.actions;

export default todoSlice.reducer;
