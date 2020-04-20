import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './addTodos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        content: 'learn React'
      },
      {
        id: 2,
        content: 'learn React native'
      }
    ]
  }

  deleteTodo = (todoId) => {
    let todosNew = this.state.todos.filter((todo) => {
      return todo.id !== todoId;
    })
    this.setState({
      todos: todosNew
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="App container" >
        <h2 className="center blue-text">Todos</h2>
        <Todos todosP={this.state.todos} deleteTodoP={this.deleteTodo} />
        <AddTodo addTodoP={this.addTodo} />
      </div>
    )
  }
}

export default App;
