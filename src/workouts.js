import React, { Component } from 'react';
import PageBar from './pageBar';
import ExerciseCard from './exerciseCard';

const exercises = [
  'Deadlifts',
  'Nordic hamstrings',
  'Squats'
];

export default class Workouts extends Component {
  render() {
    return (
      <div>
        <PageBar title="Workouts" goBack={this.props.history.goBack} />
        <div>
          {exercises.map(exercise => (
            <ExerciseCard
              key={exercise}
              name={exercise}
            />
          ))}
        </div>
      </div>
    );
  }
}
