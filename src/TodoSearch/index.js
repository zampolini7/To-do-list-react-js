import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';
import { useContext } from "react";


function TodoSearch() {

const {searchValue, setSearchValue} = useContext(TodoContext);


  const OnSearchValueChange = (event) =>{
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }


  return (
    <>
      <input 
        className="TodoSearch" 
        placeholder="Cebolla" 
        value={searchValue}
        onChange={OnSearchValueChange}
      />
      
    
    </>


  );
}

export { TodoSearch };
