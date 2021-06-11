import React, { Component } from 'react';
import AppAddTodo from './components/appAddTodo/appAddTodo';
import AppHeader from './components/appHeader/appHeader';
import AppList from './components/appList/appList';
class App extends Component {
  state = {};
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
