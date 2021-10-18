import React from 'react'
import Button from "../elements/Button"

export default function Todo(props) {
    // console.log(props)
    const { todo } = props;
    const handleClick = (e) => {
        e.preventDefault()
        // toggle complete
        if (e.currentTarget.className.includes("warning")) {
            props.toggle(e.currentTarget.id)
        }
        // delete todo
        else if (e.currentTarget.className.includes("danger")) {
            props.delete(e.currentTarget.id)
        }
    }

    return (
        <div
            className={todo.complete ? "todo complete" : "todo"}
        >
            {todo.task}
            {todo.id && <span style={{ marginLeft: "auto" }}>

                <Button
                    isWarning
                    value={todo.complete ? "Completed" : "Incompleted"}
                    onClick={handleClick}
                    id={todo.id}
                />

                <Button
                    isDanger
                    value="Delete"
                    onClick={handleClick}
                    id={todo.id}
                />
            </span>}
        </div>
    )
}
