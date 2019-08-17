import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { TemplateModel } from './model';
import { RootState } from '../store/rootReducer';
import { addExercise } from './actions';

const Template = () => {
  const dispatch = useDispatch();
  const currentTemplate = useSelector<RootState, TemplateModel>(s => s.template.currentTemplate);

  const onAddExercise = () => dispatch(addExercise());

  return (
    <div className="template">
      <div className="template__controls">
        <button className="button--primary" type="button" onClick={onAddExercise}>
          Add exercise
        </button>
        <button className="button--primary" type="button">
          Save changes
        </button>
      </div>
      {currentTemplate.exercises.map(exercise => (
        <div key={exercise.id} className="template__exercise">
          <div className="template__exercise--name">{exercise.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Template;
