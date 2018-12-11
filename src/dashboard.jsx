import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageBar from './pageBar';
import Button from './common/button';
import { createWorkout } from './workouts';

const mapDispatchToProps = {
  createWorkout
};

@connect(undefined, mapDispatchToProps)
export default class Dashboard extends Component {
  render() {
    return (
      <>
        <PageBar title="Dashboard" />
        <div style={{ 'padding': '0 1em' }}>
          <Button label="New workout" clickHandler={this.props.createWorkout} />
        </div>
      </>
    )
  }
}
