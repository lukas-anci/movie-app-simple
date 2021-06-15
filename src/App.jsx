import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import TodoPage from './components/todoPage/todoPage';
// app styles
import './app.css';
import Navbar from './components/navbar/navbar';
import ContactsPage from './components/pages/contact';
import AboutPage from './components/pages/about';
import HomePage from './components/pages/home';
import SingleTodo from './components/pages/singleTodo';
import NotFound from './components/pages/404';
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
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/buble" to="/todos"></Redirect>
            <Route path="/todos" component={TodoPage}></Route>
            <Route path="/about" component={AboutPage}></Route>
            <Route path="/contact" component={ContactsPage}></Route>
            <Route path="/" exact component={HomePage}></Route>
            <Redirect from="/" to="/todos"></Redirect>
            <Redirect to="/not-found"></Redirect>
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
