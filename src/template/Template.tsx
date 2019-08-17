import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TemplateModel } from './model';
import { RootState } from '../store/rootReducer';
import { addExercise } from './actions';

let exerciseKey = 0;

const Template = () => {
  const dispatch = useDispatch();
  const templates = useSelector<RootState, TemplateModel[]>(s => s.template.templates);

  const currentTemplate = templates[0];

  const onAddExercise = () => dispatch(addExercise());

  return (
    <div className="template">
      <div className="template__controls">
        <button type="button" onClick={onAddExercise}>
          Add exercise
        </button>
      </div>
      {currentTemplate.exercises.map(exercise => (
        <div key={exerciseKey++} className="template__exercise">
          <div className="template__exercise--name">{exercise.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Template;
