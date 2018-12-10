import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import './app.css';
import Dashboard from './dashboard';
import Workouts from './workouts';

class App extends Component {
  render() {
    return (
      <>
        <ul className="top-menu">
          <li><Link to="/">Dashboard</Link></li>
          <li></li>
          <li><Link to="/workouts">Workouts</Link></li>
        </ul>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/workouts" component={Workouts} />
        </Switch>
      </>
    );
  }
}

export default hot(module)(App);
