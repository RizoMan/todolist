import React from 'react'

export default function TodoItem(props) {
    const { _id, text, completed } = props.item;

    const completedStyle = {
        fontStyle: 'italic',
        color: '#cdcdcd',
        textDecoration: 'line-through'
    }
    
    return (
        <div className="todo-item">
            <input type="checkbox" checked={completed} onChange={() => props.handleChange(_id)}/>
            <p style={completed ? completedStyle : null}>{text}</p>
        </div>
    )
}