import React from 'react';
import './App.css';
import Nav from "./Nav";
import Content from "./Content";
import About from './About';
import Home from './Home';
import MovieDetail from './MovieDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home}/>        {/* exact means this specific path */}
          <Route path='/content' exact component={Content}/>
          <Route path='/about' component={About}/>
          <Route path='/content/:id' component={MovieDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
