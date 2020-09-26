import React from 'react'

function Todo({todo,index, deleteTodo,completeTodo}) {
    return (
        <div className="todo" style={{textDecoration : todo.isCompleted ? "line-through"  : ""}}>
            {todo.task}
            <div className="button">
                <button onClick={()=>deleteTodo(index)}>Delete</button>
                <button onClick={()=>completeTodo(index)}>Complete</button>
            </div>
        </div>
    )
}

export default Todo
