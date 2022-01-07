import React from "react";
import { useState, useEffect} from 'react'

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = useState(false);
    const [loading, setloading] = useState(true);
    const [item, setItem] = useState(initialValue);
  
    useEffect(() => {
      setTimeout(()=>{
        try {
        const localStorageItem= localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem=[];
        } else{
          parsedItem= JSON.parse(localStorageItem)
        }
        
        setItem(parsedItem)
        setloading(false)
        }catch (error){
          setError(error);
        }
      }, 3000)
     } );
    
  
    const saveItem = (newItem) =>{
      try {
        const stringifyedItem = JSON.stringify(newItem)
        localStorage.setItem(itemName, stringifyedItem)
        setItem(newItem)
      } catch (error) {
        setError(error);
      }
  
    }
  
    return{
      item,
      saveItem,
      loading,
      error,
    };
}

export {useLocalStorage}