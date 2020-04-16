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
    }
    render() {
        return (
            <div>
                <form className="">
                    <div className="input-field">
                        <span className="helper-text" data-error="wrong" data-success="right">Add Todos</span>
                        <input id="email" type="email" className="validate" onChange={this.handleChange} />
                        <button className="waves-effect waves-light btn" onClick={this.handleSubmit}>submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddTodo;