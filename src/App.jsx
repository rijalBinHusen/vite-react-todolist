import './App.css'
import { useState } from 'react'
import Button from "./components/elements/Button";
import Header from "./components/elements/Header";
import TodoList from "./components/parts/TodoList";
import TodoForm from "./components/elements/Form";

function App() {
  const [todo, setTodo] = useState('');

  // Toggle comoplete todo
  const handleToggle = (id) => {
    // console.log(id)
    let mapped = todo.map((task) => {
      return task.id === + id ? { ...task, complete: !task.complete } : { ...task }
    })
    setTodo(mapped)
  }

  // Delete all todo that completed
  function deleteAllTodo() {
    let filtered = todo.filter((task) => {
      return !task.complete
    })
    setTodo(filtered);
  }

  // delete particular todo
  function deleteTodo(id) {
    let filter = todo.filter((task) => {
      return task.id !== +id
    })
    setTodo(filter)
  }

  const addTask = (userInput) => {
    let copy = [...todo];
    copy = [...copy, { id: todo.length + 1, task: userInput, complete: false }]
    setTodo(copy)
  }

  return (
    <div className="App">
      <div className="container">
        <Header />
        <TodoForm addTask={addTask} />
        <span style={{ display: 'flex', marginBottom: 15 }}>
          {
            todo.length > 1 && <Button onClick={deleteAllTodo} isDanger style={{ marginLeft: 'auto' }} value="Delete all completed" />
          }
        </span>
        <TodoList list={todo} handleToggle={handleToggle} deleteAllTodo={deleteAllTodo} deleteTodo={deleteTodo} />
      </div>
    </div>
  )
}
export default App
