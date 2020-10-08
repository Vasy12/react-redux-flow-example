import React from 'react';
import TaskForm from './../components/TaskForm';
import TasksList from './../components/TasksList';

function Todo() {
  return (
    <>
      <TaskForm />
      <TasksList />
    </>
  );
}

export default Todo;
