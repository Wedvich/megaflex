import { Reducer } from 'redux';
import { actionTypes } from './actions';
import { ExerciseModel, TemplateModel } from './model';

interface TemplateState {
  currentTemplate: TemplateModel;
  templates: TemplateModel[];
}

const initialTemplate = new TemplateModel();
const initialState: TemplateState = {
  currentTemplate: { ...initialTemplate },
  templates: [initialTemplate],
};

initialState.currentTemplate = initialState.templates[0];

const templateReducer: Reducer<TemplateState> = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AddExercise: {
      const { currentTemplate } = state;
      const exercises = [...currentTemplate.exercises, new ExerciseModel()];

      return {
        ...state,
        currentTemplate: {
          ...currentTemplate,
          exercises,
        },
      };
    }

    default:
      return state;
  }
};

export default templateReducer;
