import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()
function TodoProvider(props) {
    
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', [])
      const [searchValue, setSearchValue] = useState('');
      const [openModal, setOpenModal] = useState(false)

      const todosCompleted= todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos = [];
    
      if (!searchValue.length >= 1) {
          searchedTodos = todos;
      } else {
        searchedTodos = todos.filter(todo => {
    
          const todoText = todo.text.toLowerCase()
          const searchText = searchValue.toLowerCase()
    
          return todoText.includes(searchText)
    
    
        })
      }
    
      const addTodo = (text)=>{
        const newTodos = [...todos]
        newTodos.push({
          text,
          completed: false,
        })
        saveTodos(newTodos)
       
        
      }
    
      const completedTodo = (text)=>{
        const findIndexTodo = todos.findIndex(todo => todo.text === text )
        const newTodos = [...todos]
        newTodos[findIndexTodo].completed = true;
        saveTodos(newTodos)
       
        
      }
    
      const deleteTodo = (text)=>{
        const findIndexTodo = todos.findIndex(todo => todo.text === text )
        const newTodos = [...todos]
        newTodos.splice( findIndexTodo,1)
        saveTodos(newTodos)
       
        
      }
    return(
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            todosCompleted,
            searchValue , 
            setSearchValue,
            searchedTodos,
            addTodo,
            completedTodo,
            deleteTodo,
            openModal, 
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}


export {TodoContext, TodoProvider}