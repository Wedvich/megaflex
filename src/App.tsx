import React, { useCallback } from 'react';
import { hot } from 'react-hot-loader/root';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';

import './app.scss';
import './app2.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Exercise, RootState } from './store/rootReducer';
import { pluralize } from './common/utils';

const ExerciseListItemDragHandle = SortableHandle(() => <span className="exercise-list-item__drag-handle">☰</span>);

const ExerciseListItem = SortableElement(({ value, prefix }: any) => {
  return (
    <li className="exercise-list-item">
      <ExerciseListItemDragHandle />
      <div>
        <div className="exercise-list-item__label">
          <span className="exercise-list-item__prefix">{prefix}</span>
          {pluralize(value.name)}
        </div>
        <div className="exercise-list-item__subtitle">{value.subtitle}</div>
      </div>
    </li>
  );
});

const ExerciseList = SortableContainer(({ items }: { items: Exercise[] }) => {
  return (
    <ul className="exercise-list">
      {items.map((item, index) => (
        <ExerciseListItem
          key={`exercise-${item.id}`}
          index={index}
          value={item}
          prefix={String.fromCodePoint(65 + index)}
        />
      ))}
    </ul>
  );
});

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
      <ExerciseList
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
