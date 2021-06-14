import React, { Component } from 'react';
import './style.css';

class AppTodoEl extends Component {
  // padaryti kad ikonele butu priklausoma nuo isDone savybes
  // fa-check-circle -done fa-circle-thin - kai ne done
  state = {
    editTitle: this.props.singleTodo.title,
  };

  handleChange = (event) => {
    this.setState({ editTitle: event.target.value });
  };

  render() {
    const { title, isDone, id, isEditOn } = this.props.singleTodo;

    const spanOrTodo = isEditOn ? (
      <input
        type="text"
        value={this.state.editTitle}
        onChange={this.handleChange}
      />
    ) : (
      <span className={isDone ? 'doneTitle' : ''}>{title}</span>
    );

    return (
      <li className="app-todo-el">
        <i
          className={this.setCheckClasses(isDone)}
          onClick={() => this.props.onDoneUndone(id)}
        ></i>
        {spanOrTodo}
        <i onClick={this.props.onEdit} className="fa fa-pencil"></i>
        <i onClick={() => this.props.onDelete(id)} className="fa fa-trash"></i>
      </li>
    );
  }

  setCheckClasses(isDone) {
    let checkClasses = 'fa fa-circle-thin';
    if (isDone) checkClasses = 'fa fa-check-circle';
    return checkClasses;
  }
}
// fa-circle-thin
export default AppTodoEl;

// {!isEditOn ? (
//     <span className={isDone ? 'doneTitle' : ''}>{title}</span>
//   ) : (
//     <input type="text" />
//   )}
