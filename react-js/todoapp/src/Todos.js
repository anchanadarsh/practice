import React from 'react';

const Todos = ({ todosP, deleteTodoP }) => {
    const todosList = todosP.length ? (
        todosP.map((todo) => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span>{todo.content}</span>
                    <span className="material-icons delete_icon" onClick = {() => deleteTodoP(todo.id)}>delete</span>
                </div>
            )
        })
    ) : (
            <p className="center">There are no todos left</p>
        );
    return (
        <div className="todos collection">
            {todosList}
        </div>
    );
}

export default Todos;
