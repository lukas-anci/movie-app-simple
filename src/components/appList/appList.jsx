import React, { Component } from 'react';
import './style.css';
import TodoEl from '../appTodoEl/appTodoEl';
class AppList extends Component {
  state = {};
  render() {
    return (
      <ul className="todo-list">
        {this.props.todos.map((t) => (
          <TodoEl
            onDoneUndone={this.props.onDoneUndone}
            singleTodo={t}
            key={t.id}
            onDelete={this.props.onDelete}
          />
        ))}
      </ul>
    );
  }
}

export default AppList;
