import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route } from 'react-router';
import './app.scss';
import Dashboard from './dashboard';
import WorkoutsPage from './workouts/page';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/workouts/:workoutId" component={WorkoutsPage} />
      </Switch>
    );
  }
}

export default hot(module)(App);
