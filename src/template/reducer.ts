import { Reducer } from 'redux';
import { actionTypes } from './actions';
import { TemplateModel } from './model';

interface TemplateState {
  templates: TemplateModel[];
}

const initialState: TemplateState = {
  templates: [
    {
      name: 'Test Template',
      exercises: [],
    },
  ],
};

const templateReducer: Reducer<TemplateState> = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AddExercise: {
      const templateIndex = 0;
      const template = state.templates[templateIndex];
      const exercises = [...template.exercises, { name: 'New Exercise' }];

      return {
        ...state,
        templates: [
          ...state.templates.slice(0, templateIndex),
          {
            ...template,
            exercises,
          },
          ...state.templates.slice(templateIndex + 1),
        ],
      };
    }

    default:
      return state;
  }
};

export default templateReducer;
