import React, { Component } from 'react';
import './style.css';
class AppAddTodo extends Component {
  state = {
    newTodo: '',
  };

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ newTodo: event.target.value });
  };
  sendAddTodo = () => {
    this.props.onAdd(this.state.newTodo);
    this.setState({ newTodo: '' });
  };
  render() {
    return (
      <div className="add-todo-container">
        <i
          onClick={this.sendAddTodo}
          className="fa fa-plus-circle add-icon"
        ></i>
        <input
          onChange={this.handleChange}
          value={this.state.newTodo}
          type="text"
          placeholder="Add new Todo"
        />
      </div>
    );
  }
}

export default AppAddTodo;
