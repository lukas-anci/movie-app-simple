import './App.css';

import HomePage from './components/newComponents/home';
import AboutPage from './components/newComponents/about';
import ContactPage from './components/newComponents/contact';
import NavbarPage from './components/newComponents/navbar';
import { Route, Switch, Redirect } from 'react-router';

function App() {
  return (
    <div className="App  mt-3">
      <NavbarPage />
      <div className="container">
        <Switch>
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/contact" component={ContactPage}></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/" exact component={HomePage}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
