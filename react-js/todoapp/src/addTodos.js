import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodoP(this.state);
        this.setState({
            content: ''
        })
    }
    render() {
        return (
            <div>
                <form className="" onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <span className="helper-text" data-error="wrong" data-success="right">Add Todos</span>
                        <input id="todo_text" type="text" className="validate" onChange={this.handleChange} value={this.state.content}/>
                        <button type="submit" className="waves-effect waves-light btn">submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddTodo;