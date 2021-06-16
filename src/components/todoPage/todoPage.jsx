import React, { Component } from 'react';
import AppAddTodo from '../appAddTodo/appAddTodo';
import AppHeader from '../appHeader/appHeader';
import AppList from '../appList/appList';
import './todo.css';
import { Link } from 'react-router-dom';

import GetSendData from './../../service/getSendData';

class TodoPage extends Component {
  state = {
    todos: [],
    //   { id: 1, isDone: true, title: 'Buy House', isEditOn: false },
    //   { id: 2, isDone: true, title: 'Buy TV', isEditOn: false },
    //   { id: 3, isDone: false, title: 'Go to Park', isEditOn: false },
    //   { id: 4, isDone: false, title: 'Learn React', isEditOn: false },
    // ],
    currentId: 5,
  };

  componentDidMount() {
    this.getTodos();
  }
  getTodos = () => {
    GetSendData.getAll((data) => this.setState({ todos: data }));
  };

  handleDoneUndone = (id, newState) => {
    // pasidaryti todos kopija
    console.log('change status to', newState);
    console.log('done undone', id);
  };

  handleDelete = (id) => {
    GetSendData.deleteTodo(id, (ats) => {
      console.log('deletePressed', ats);

      this.getTodos();
    });
  };
  handleAddTodo = (todoTitle) => {
    console.log('add new todo', todoTitle);
    GetSendData.createTodo(todoTitle, () => {
      this.getTodos();
      this.setState({ todoTitle: '' });
    });

    // const newTodo = {
    //   title: todoTitle,
    //   id: this.state.currentId,
    //   isDone: false,
    //   isEditOn: false,
    // };
    // this.setState({
    //   todos: [...this.state.todos, newTodo],
    //   currentId: this.state.currentId + 1,
    // });
  };

  handleEdit = (editId, newTitleVal) => {
    console.log('handleEdit', editId, newTitleVal);
    const todos = [...this.state.todos];
    const edit = todos.find((e) => e.id === editId);

    // patikrinti ar reikia issaugoti reiksme
    if (edit.isEditOn) {
      edit.title = newTitleVal;
    }

    edit.isEditOn = !edit.isEditOn;
    // edit.title = newTitleVal;
    this.setState({ todos });
  };

  render() {
    return (
      <div className="todo-page">
        <AppHeader />
        <AppList
          onDoneUndone={this.handleDoneUndone}
          onDelete={this.handleDelete}
          todos={this.state.todos}
          onEdit={this.handleEdit}
        />

        <AppAddTodo onAdd={this.handleAddTodo} />
        <Link to="/about">Go To About Us Page</Link>
      </div>
    );
  }
}

export default TodoPage;
