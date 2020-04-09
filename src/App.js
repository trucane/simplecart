import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from  './components/Login';
import AdminDash from './components/admin/Admin-dash'
//create a router
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/nav/main-nav';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route  path='/login' component={Login} />
        <Route  path='/admin' component={AdminDash} />
      </Router>
    </div>
  );
}

export default App;
