import React, { useCallback } from 'react';
import { hot } from 'react-hot-loader/root';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/rootReducer';
import { WorkoutExerciseList, actions as workoutsActions } from './workouts';

import './app.scss';
import { WorkoutModel } from './workouts/types';
import { pluralize } from './common/utils';

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

  // TODO: Refactor this into something sensible
  const onCopyClicked = useCallback(() => {
    if ('clipboard' in navigator) {
      const data = workout.exercises
        .map((exercise, index) => {
          const prefix = String.fromCodePoint(65 + index);
          const name = pluralize(exercise.name).toLowerCase();
          return `${prefix}: ${exercise.sets}x${exercise.reps} ${name}`;
        })
        .join('\n');
      navigator.clipboard.writeText(data);
    }
  }, [workout]);

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
      <div className="button-group">
        <button className="reset-button" onClick={onResetClicked}>
          Reset
        </button>
        <button className="reset-button" onClick={onCopyClicked}>
          Clipboard
        </button>
      </div>
    </>
  );
};

export default hot(App);
