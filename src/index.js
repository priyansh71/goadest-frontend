import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Header from './components/Header';
import App from './App';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Header />
      </Switch>
    </Router>

    <App />
  </React.StrictMode>,
  document.getElementById('root')
);