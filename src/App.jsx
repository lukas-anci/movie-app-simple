import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import TodoPage from './components/todoPage/todoPage';
// app styles
import './app.css';
import Navbar from './components/navbar/navbar';
import ContactsPage from './components/pages/contact';
import AboutPage from './components/pages/about';
import HomePage from './components/pages/home';
import SingleTodo from './components/pages/singleTodo';
class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          {/* sutikes pirma atitikusi route jis nebeiesko toliau, svarbi eiles tvarka */}
          <Switch>
            <Route path="/todos/:id" component={SingleTodo}></Route>
            <Route path="/todos" component={TodoPage}></Route>
            <Route path="/about" component={AboutPage}></Route>
            <Route path="/contact" component={ContactsPage}></Route>
            <Route path="/" component={HomePage}></Route>
          </Switch>
          {/* <Route path="/" exact component={HomePage}></Route> */}
        </div>
        {/* <TodoPage /> */}
        {/* <AboutPage />
        <ContactsPage /> */}
      </div>
    );
  }
}

export default App;
