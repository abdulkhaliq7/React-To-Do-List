import React, {useState} from 'react'

function TodoForm({addTodo}) {
    const [value ,setValue] = useState("")
    
    const handleSubmit = e => {
        e.preventDefault()
        if(!value) return
        addTodo(value)
        setValue("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" className="input" placeholder="Add todo..."  value={value} onChange={e=>setValue(e.target.value)}></input>
            </form>
        </div>
    )
}
    
export default TodoForm
