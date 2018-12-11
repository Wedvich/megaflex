import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route } from 'react-router';
import './app.scss';
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
