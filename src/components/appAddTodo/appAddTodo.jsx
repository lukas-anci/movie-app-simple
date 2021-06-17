import React, { Component } from 'react';
import './style.css';
import { validateTitle } from './../../service/validate';
class AppAddTodo extends Component {
  state = {
    newTodo: '',
  };

  handleChange = (event) => {
    // console.log(event.target.value);
    this.setState({ newTodo: event.target.value });
  };
  sendAddTodo = () => {
    const { newTodo } = this.state;

    if (validateTitle(newTodo)) {
      this.props.onErrorFeedback({ addTodo: validateTitle(newTodo) });
      return;
    }
    this.props.onAdd(newTodo);
    this.setState({ newTodo: '' });
  };
  handleEnter = (e) => {
    // console.log(e.keyCode); // 13 === enter
    // if (e.keyCode === 13) this.sendAddTodo();

    // jeiSalygaTrue && vygdomSita
    e.keyCode === 13 && this.sendAddTodo();
  };
  render() {
    return (
      <div className="add-todo-container">
        <i
          onClick={this.sendAddTodo}
          className="fa fa-plus-circle add-icon"
        ></i>
        <input
          className={this.props.errors && 'is-invalid'}
          onChange={this.handleChange}
          onKeyUp={this.handleEnter}
          value={this.state.newTodo}
          type="text"
          placeholder="Add new Todo"
        />
        {this.props.errors && <p className="error-msg">{this.props.errors}</p>}
      </div>
    );
  }
}

export default AppAddTodo;
