import React from 'react'
import Todo from "./Todo"
import propTypes from "prop-types";

export default function TodoList(props) {
    const { list } = props;
    // console.log(list.map((todo) => todo))
    return (
        <div className="todo-list-board">
            {list.length > 0 && list.map((todo) => {
                return (
                    <div key={todo.id}>
                        <Todo todo={todo} delete={props.deleteTodo} toggle={props.handleToggle} />
                    </div>
                )
            })
            }
            {list.length < 1 && <div>
                <Todo todo={{
                    id: false,
                    task: "Nothing todo",
                    complete: false
                }} />
            </div>}
        </div>
    )
}


TodoList.defaultProps = [{
    id: "kosong",
    task: "nothing todo",
    complete: false
}]

Todo.propTypes = {
    list: propTypes.object,
    handleToggle: propTypes.func,
    deleteAllTodo: propTypes.func,
    deleteTodo: propTypes.func
}