import React, { Component } from 'react';
import './style.css';
class AppList extends Component {
  state = {};
  render() {
    return (
      <ul className="todo-list">
        {this.props.todos.map((t) => (
          <li key={t.id}>{t.title}</li>
        ))}
      </ul>
    );
  }
}

export default AppList;
