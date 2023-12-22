import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { test, expect } from "vitest";
import TodoTask from "../components/TodoTask";

test('menguji tombol "Edit" dengan properti false', () => {
  const task = {
    task: "Tugas Baru",
    completed: false,
  };

  let isEditTaskCalled = false;

  const { getByText } = render(
    <TodoTask
      task={task}
      onCompleteToggle={() => {}}
      onEditTask={() => (isEditTaskCalled = true)}
      onDeleteTask={() => {}}
    />
  );
  const editButton = getByText("Edit");
  fireEvent.click(editButton);

  expect(isEditTaskCalled).toBe(true);
});

test('menguji tombol "Edit" dengan properti true', () => {
  const task = {
    task: "Tugas Baru",
    completed: true,
  };

  let isEditTaskCalled = false;

  const { getByText } = render(
    <TodoTask
      task={task}
      onCompleteToggle={() => {}}
      onEditTask={() => (isEditTaskCalled = true)}
      onDeleteTask={() => {}}
    />
  );

  const editButton = getByText("Edit");
  fireEvent.click(editButton);

  expect(isEditTaskCalled).toBe(true);
});
