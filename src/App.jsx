import './App.css'
import { useState } from 'react'
import Button from "./components/elements/Button";
import Header from "./components/parts/Header";
import TodoList from "./components/parts/TodoList"

import todoList from "./json/data.json"

function App() {
  const [todo, setTodo] = useState(todoList);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Button />
        <TodoList list={todoList} />
      </div>
    </div>
  )
}
export default App
