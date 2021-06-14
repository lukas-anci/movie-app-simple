import React, { Component } from 'react';
import AppAddTodo from './components/appAddTodo/appAddTodo';
import AppHeader from './components/appHeader/appHeader';
import AppList from './components/appList/appList';

// app styles
import './app.css';
class App extends Component {
  state = {
    todos: [
      { id: 1, isDone: true, title: 'Buy House', isEditOn: true },
      { id: 2, isDone: true, title: 'Buy TV', isEditOn: false },
      { id: 3, isDone: false, title: 'Go to Park', isEditOn: false },
      { id: 4, isDone: false, title: 'Learn React', isEditOn: false },
    ],
    currentId: 3,
  };

  handleDoneUndone = (id) => {
    // pasidaryti todos kopija
    const todos = [...this.state.todos];
    // surasti todo kuris paspaude ir pakeiisti jo busena
    const toggle = todos.find((e) => e.id === id);

    toggle.isDone = !toggle.isDone;

    this.setState({ todos });
  };

  handleDelete = (id) => {
    const removeDelete = this.state.todos.filter((e) => e.id !== id);
    this.setState({ todos: removeDelete });
  };
  handleAddTodo = (todoTitle) => {
    console.log('add new todo', todoTitle);

    const newTodo = {
      title: todoTitle,
      id: this.state.currentId,
      isDone: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      currentId: this.state.currentId + 1,
    });
  };

  handleEdit = (editId, newTitleVal) => {
    console.log('handleEdit', editId, newTitleVal);
  };

  render() {
    return (
      <div className="App">
        <AppHeader />
        <AppList
          onDoneUndone={this.handleDoneUndone}
          onDelete={this.handleDelete}
          todos={this.state.todos}
          onEdit={this.handleEdit}
        />

        <AppAddTodo onAdd={this.handleAddTodo} />
      </div>
    );
  }
}

export default App;
