import React, { useState } from 'react'
import Button from "../Button"
import "./index.css"

export default function TodoForm(props) {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addTask(userInput)
        setUserInput('')
    }
    return (
        <div>
            <form style={{ marginBottom: 10 }} onSubmit={handleSubmit}>
                <input class="todo-form" type="text" value={userInput} onChange={handleChange} placeholder="Enter task" />
                <Button isPrimary value="Add" />
            </form>
        </div>
    )
}
