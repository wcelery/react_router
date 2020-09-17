import React, { Component } from 'react';
import './App.css';
import Nav from "./Nav";
import Content from "./Content";
import About from './About';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/content' component={Content}/>
          <Route path='/about' component={About}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
