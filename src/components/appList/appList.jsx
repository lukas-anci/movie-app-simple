import React, { Component } from 'react';
import './style.css';
import TodoEl from '../appTodoEl/appTodoEl';
class AppList extends Component {
  state = {};
  render() {
    return (
      <ul className="todo-list">
        {this.props.todos.map((t) => (
          <TodoEl singleTodo={t} key={t.id} />
        ))}
      </ul>
    );
  }
}

export default AppList;
