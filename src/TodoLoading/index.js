import React from 'react';
import './todoLoading.css'


const  TodoLoading= (props)=> {

    return (
        
        <div className="container-loading-todo">
            <span className='span-loading-todo-completed'></span>
            <p className='p-loading-todo'>Estamos cargando, en breve estaremos contigo :)</p>
            <span className='span-loading-todo-erase'></span>

        </div>

            
        

    )
}

export { TodoLoading }