import './App.css'
import { useState } from 'react'
import Button from "../src/components/elements/Button";
import Header from "../src/components/elements/Header";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Button />
      </div>
    </div>
  )
}

export default App
