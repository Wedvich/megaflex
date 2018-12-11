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
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/workouts" component={Workouts} />
      </Switch>
    );
  }
}

export default hot(module)(App);
