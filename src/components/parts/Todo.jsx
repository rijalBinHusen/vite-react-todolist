import React from 'react'
import Button from "../elements/Button"

export default function Todo(props) {
    // console.log(props)
    const { todo } = props;
    const handleClick = (e) => {
        e.preventDefault()
        props.toggle(e.currentTarget.id)
    }

    return (
        <div
            className={todo.complete ? "todo" : "todo complete"}
            onClick={handleClick}
            id={todo.id}
            value={todo.id}
        >
            {todo.task}
            <span style={{ marginLeft: "auto" }}>
                <Button isDanger={true} value="Delete" />
            </span>
        </div>
    )
}
