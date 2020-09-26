import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Content from "./components/Content";
import About from "./components/About";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Favorites from "./components/Favorites";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />{" "}
          {/* exact means this specific path */}
          <Route path="/content" exact component={Content} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/about" component={About} />
          <Route path="/content/:id" component={MovieDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
