import React, { Component } from 'react';
import AppAddTodo from './components/appAddTodo/appAddTodo';
import AppHeader from './components/appHeader/appHeader';
import AppList from './components/appList/appList';

// app styles
import './app.css';
class App extends Component {
  state = {
    todos: [
      { id: 1, isDone: false, title: 'Buy House' },
      { id: 2, isDone: true, title: 'Buy TV' },
      { id: 3, isDone: false, title: 'Go to Park' },
      { id: 4, isDone: false, title: 'Learn React' },
    ],
  };
  render() {
    return (
      <div className="App">
        <AppHeader />
        <AppList />
        <AppAddTodo />
      </div>
    );
  }
}

export default App;
