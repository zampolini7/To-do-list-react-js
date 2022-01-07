import React from 'react'
import { TodoContext } from '../TodoContext';
import { useState } from 'react';
import './todoForm.css'

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = useState('');
    const {
        addTodo,
        setOpenModal,
    }= React.useContext(TodoContext);

    const onChange = (e) => {
        setNewTodoValue(e.target.value) 
    }
    const onCancel = () => {
        setOpenModal(false)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false)
    }

    return(
        <form className='form-onSub' onSubmit={onSubmit}>
            <label className='form-label'>Escribe tu nuevo TODO  </label>
            <textarea 
                className='form-text-area'
                value ={newTodoValue}
                onChange={onChange}
                placeholder='Cortar la cebolla para el almuerzo'
            />
            <div className='form-div-buttons'>
                <button
                    className='form-div-on-cancel'
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className='form-div-on-submit'

                    type='submit'
                    
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm}