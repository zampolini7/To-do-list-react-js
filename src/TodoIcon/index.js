import React from 'react';
import  { ReactComponent as CompleteIcon } from "../TodoIcon/check.svg";
import './todoIcon.css';

const iconTypes= {
    "check": color =>(
        <CompleteIcon className="Icon-container Icon-svg Icon-container--check" fill={color}/>
    ),
}

const TodoIcon = ({ type, color= "gray", onClick})=>{
    return(
        <span
        className={`Icon-container Icon-container--${type}`}
        onClick={onClick}
        >
        {iconTypes[type](color)}
        </span>

    )
}

export { TodoIcon }