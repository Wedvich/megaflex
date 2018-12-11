import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageBar from '../pageBar';
import Button from '../common/button';
import { deleteWorkout } from './index';

const mapDispatchToProps = {
  deleteWorkout
};

@connect(undefined, mapDispatchToProps)
export default class WorkoutsPage extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <PageBar title="Workout" />
        <div style={{ 'padding': '0 1em' }}>
          <Button label="Cancel" clickHandler={() => this.props.deleteWorkout(this.props.match.params.workoutId)} />
        </div>
      </>
    );
  }
}
