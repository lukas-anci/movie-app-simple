import React, { Component } from 'react';
class fetchTest extends Component {
  state = {
    todoTitle: '',
  };

  syncTitle = (event) => {
    this.setState({ todoTitle: event.target.value });
  };

  handleNewTodo = () => {
    console.log('veikia funkcija');
    const newTodo = {
      title: this.state.todoTitle,
    };
    fetch('http://localhost:3002/api/todos/new', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    })
      .then((resp) => resp.json())
      .then((ats) => console.log(ats))
      .catch((err) => console.warn(err));
  };

  render() {
    return (
      <div>
        <h1>Fetch test</h1>
        <input
          onChange={this.syncTitle}
          value={this.state.todoTitle}
          type="text"
          placeholder="add new todo"
        />
        <button onClick={this.handleNewTodo}>Save New Todo</button>
      </div>
    );
  }
}

export default fetchTest;
