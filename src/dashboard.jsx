import React, { Component } from 'react';
import Button from './common/button';
import TopBar from './common/topBar';
import { createWorkout } from './workouts';
import { hotConnect } from './common/utils';

const mapDispatchToProps = {
  createWorkout
};

@hotConnect(() => ({}), mapDispatchToProps)
export default class Dashboard extends Component {
  render() {
    return (
      <>
        <TopBar />
        <div style={{ 'padding': '0 1em' }}>
          <Button label="New workout" />{/* clickHandler={this.props.createWorkout} */}
        </div>
      </>
    )
  }
}
