import React, { Component } from 'react';
import SimpleAlert from '../common/alert/alert';
import './style.css';

class AppTodoEl extends Component {
  // padaryti kad ikonele butu priklausoma nuo isDone savybes
  // fa-check-circle -done fa-circle-thin - kai ne done
  state = {
    editTitle: this.props.singleTodo.title,
    onOf: true,
  };

  handleChange = (event) => {
    this.setState({ editTitle: event.target.value });
  };
  hideAlert = () => {
    this.setState({ onOf: false });
  };
  showAlertAndSendProps = () => {
    const { _id: id, isEditOn } = this.props.singleTodo;
    this.setState({ onOf: true });
    this.props.onEdit(id, this.state.editTitle, isEditOn);
  };

  render() {
    const { title, isDone, _id: id, isEditOn } = this.props.singleTodo;

    const spanOrTodo = isEditOn ? (
      <input
        className={this.props.errors && 'is-invalid'}
        type="text"
        value={this.state.editTitle}
        onChange={this.handleChange}
      />
    ) : (
      <span className={isDone ? 'doneTitle' : ''}>{title}</span>
    );

    return (
      <li className="app-todo-el">
        {!isEditOn && (
          <i
            className={this.setCheckClasses(isDone)}
            onClick={() => this.props.onDoneUndone(id, !isDone)}
          ></i>
        )}

        {spanOrTodo}
        {!isDone && (
          <i onClick={this.showAlertAndSendProps} className="fa fa-pencil"></i>
        )}

        {isEditOn && this.props.errors && this.state.onOf && (
          <SimpleAlert hideAlert={this.hideAlert}>
            {this.props.errors}
          </SimpleAlert>
        )}

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
