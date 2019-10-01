import React, { useCallback } from 'react';
import { hot } from 'react-hot-loader/root';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/rootReducer';
import { WorkoutExerciseList } from './workouts';

import './app.scss';

const App = () => {
  const exercises = useSelector<RootState, any[]>(state => state.exercises);
  const dispatch = useDispatch();

  const onSortEnd = useCallback(
    ({ oldIndex, newIndex }) => {
      dispatch({ type: 'reorder', oldIndex, newIndex });
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
        items={exercises}
        onSortEnd={onSortEnd}
        helperClass="exercise-list-item dragging"
        lockAxis="y"
        useDragHandle
        useWindowAsScrollContainer
      />
      <button className="reset-button" onClick={onResetClicked}>
        Reset
      </button>
    </>
  );
};

export default hot(App);
