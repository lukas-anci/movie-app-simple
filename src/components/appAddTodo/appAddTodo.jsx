import React, { Component } from 'react';
class AppAddTodo extends Component {
  state = {
    newTodo: '',
  };

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ newTodo: event.target.value });
  };
  // handleAddTodo = () => {
  //   console.log(this.state.newTodo);
  // };
  render() {
    return (
      <div className="add-todo-container">
        <i
          onClick={() => this.props.onAdd(this.state.newTodo)}
          className="fa fa-plus-circle"
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
