import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Link to="/workouts">Workouts</Link>
        <div>This is the dashboard page</div>
      </div>
    );
  }
}
