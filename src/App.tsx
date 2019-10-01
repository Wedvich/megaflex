import React, { useCallback } from 'react';
import { hot } from 'react-hot-loader/root';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/rootReducer';
import { WorkoutExerciseList, actions as workoutsActions } from './workouts';

import './app.scss';
import { WorkoutModel } from './workouts/types';

const App = () => {
  const workoutId = '2';
  const workout = useSelector<RootState, WorkoutModel>(state => state.workouts.byId[workoutId]);
  const dispatch = useDispatch();

  const onSortEnd = useCallback(
    ({ oldIndex, newIndex }) => {
      dispatch(workoutsActions.reorderExercise(workoutId, oldIndex, newIndex));
    },
    [dispatch],
  );

  const onResetClicked = () => {
    localStorage.clear();
    location.reload();
  };

  return (
    <>
      <WorkoutExerciseList
        items={workout.exercises}
        onSortEnd={onSortEnd}
        helperClass="workout-exercise dragging"
        lockAxis="y"
        useDragHandle
        useWindowAsScrollContainer
        workoutId={workoutId}
      />
      <button className="reset-button" onClick={onResetClicked}>
        Reset
      </button>
    </>
  );
};

export default hot(App);
