import React, {useState,useEffect} from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import videos from './video/videos.mp4'

function App() {
  const [todos, setTodos] = useState(()=>{
    const localData = localStorage.getItem('myTodo');
    return localData ? JSON.parse(localData) : [];
  })

  useEffect(()=> {
    localStorage.setItem('myTodo', JSON.stringify(todos))
  },[todos])
    
     const addTodo = task => {
      const newTodos = [...todos, {task}]
      setTodos(newTodos)
     }

     const deleteTodo = index => {
       const newTodos = [...todos]
       newTodos.splice(index,1)
       setTodos(newTodos)
     }

     const completeTodo = index => {
       const newTodos = [...todos]
       newTodos[index].isCompleted = newTodos[index].isCompleted ? false : true
       setTodos(newTodos)

     }

  return (
    <div className="App">

      <video
        autoPlay
        loop
        muted
        style={{
         objectFit: "cover",
         width:"100%",
         height:"100%",
         position:"fixed",
         zIndex: "-1"

        }}>
        <source  src= {videos} type="video/mp4"/>
      </video>






      <div className="todo-list">
      <h1 style={{margin:"20px 35%", color:"white"}}>TO-DO LIST</h1>
        {todos.map((todo, index)=>(
          <Todo key={index} index={index} todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
        ))}
        <TodoForm addTodo={addTodo}/>
      </div>
      
    </div>
  );
}

export default App;
