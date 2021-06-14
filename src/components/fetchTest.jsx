import React, { Component } from 'react';
class fetchTest extends Component {
  state = {
    todoTitle: '',
  };

  syncTitle = (event) => {
    this.setState({ todoTitle: event.target.value });
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
      </div>
    );
  }
}

export default fetchTest;
