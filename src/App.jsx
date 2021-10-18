import './App.css'
import { useState } from 'react'
// import Button from "./components/elements/Button";
import Header from "./components/parts/Header";
import TodoList from "./components/parts/TodoList"

import todoList from "./json/data.json"

function App() {
  const [todo, setTodo] = useState(todoList);

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

  return (
    <div className="App">
      <div className="container">
        <Header />
        {/* <Button /> */}
        <TodoList list={todo} handleToggle={handleToggle} deleteAllTodo={deleteAllTodo} deleteTodo={deleteTodo} />
      </div>
    </div>
  )
}
export default App
