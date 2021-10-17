import React from 'react'
import Todo from "./Todo"
import propTypes from "prop-types";

export default function TodoList({ list }) {
    // const { list } = props;
    // console.log(list.map((todo) => todo))
    return (
        <div>
            {list.map((todo) => {
                return (
                    <div key={todo.id}>
                        <Todo todo={todo} />
                    </div>
                )
            }
            )}
        </div>
    )
}


TodoList.defaultProps = {
    list: [{
        id: "kosong",
        task: "nothing todo",
        complete: false
    }]
}

Todo.propTypes = {
    list: propTypes.object
}