import React, { Component } from 'react';
import AppAddTodo from './components/appAddTodo/appAddTodo';
import AppHeader from './components/appHeader/appHeader';
import AppList from './components/appList/appList';

// app styles
import './app.css';
class App extends Component {
  state = {
    todos: [
      { id: 1, isDone: true, title: 'Buy House' },
      { id: 2, isDone: true, title: 'Buy TV' },
      { id: 3, isDone: false, title: 'Go to Park' },
      { id: 4, isDone: false, title: 'Learn React' },
    ],
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
  onSubmit = (e) => {
    e.preventDefault();
    console.log('press');
  };

  render() {
    return (
      <div className="App">
        <AppHeader />
        <AppList
          onSubmit={this.onSubmit}
          onDoneUndone={this.handleDoneUndone}
          onDelete={this.handleDelete}
          todos={this.state.todos}
        />

        <AppAddTodo />
      </div>
    );
  }
}

export default App;
