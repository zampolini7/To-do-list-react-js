import React from 'react';
import './TodoCounter.css';
import { TodoContext } from "../TodoContext";
import { useContext } from 'react';

function TodoCounter() {
  const {totalTodos,
    todosCompleted} = useContext(TodoContext);
  return (
    <h2 className="TodoCounter">Has completado {todosCompleted} de {totalTodos} TODOs</h2>
  );
}

export { TodoCounter };
