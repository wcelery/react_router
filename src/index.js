import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from "./About";
import Content from "./Content"

ReactDOM.render(
  <React.StrictMode>
    <App />
    <About />
    <Content />
  </React.StrictMode>,
  document.getElementById('root')
);

