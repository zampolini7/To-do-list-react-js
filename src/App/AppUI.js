import React from 'react';
import { useContext } from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoContext } from '../TodoContext';

import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from "./modal";
import { TodoForm } from '../TodoForm';
import { TodoError } from "../TodoError";
import { TodoLoading } from "../TodoLoading";
import { EmptyTodo } from "../EmptyTodo";


function AppUi(){
const { error,
  loading, 
  searchedTodos, 
  completedTodo, 
  deleteTodo,
  openModal, 
  setOpenModal } = useContext(TodoContext);


    return(
        <React.Fragment>
      <TodoCounter  />
      <TodoSearch   />

   
          <TodoList>

          {error && <TodoError error={error}/>}
          {loading && new Array(3).fill(1).map((a, i) => <TodoLoading key={i} />)}
          {!(loading && !searchedTodos.length) && <EmptyTodo/>}
  
          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete= {()=> completedTodo(todo.text)}
              onDelete= {()=> deleteTodo(todo.text)}
  
            />
          ))}
        </TodoList>
        {!!openModal &&(
          <Modal>
          
            <TodoForm>
              
            </TodoForm>
          
        </Modal>  
        )}  
 

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
    )
}

export{ AppUi }