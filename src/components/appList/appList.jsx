import React, { Component } from 'react';
import './style.css';
import TodoEl from '../appTodoEl/appTodoEl';
class AppList extends Component {
  state = {};
  render() {
    const { onDelete, onDoneUndone, onEdit, errors } = this.props;
    return (
      <ul className="todo-list">
        {this.props.todos.map((t) => (
          <TodoEl
            errors={errors}
            onDoneUndone={onDoneUndone}
            singleTodo={t}
            key={t._id}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </ul>
    );
  }
}

export default AppList;
