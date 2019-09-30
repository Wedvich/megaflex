import { Reducer, combineReducers } from 'redux';

import template from '../template/reducer';
import { arrayMove } from '../common/utils';
import { reducer as modal } from '../modal';

export interface Exercise {
  id: string;
  name: string;
  subtitle: string;
}

const initialExercises: Exercise[] = [
  {
    id: 'db squat',
    name: 'Dumbbell squat',
    subtitle: '3 sets · 15 reps · 50 kg',
  },
  {
    id: 'leg extension',
    name: 'Leg extension',
    subtitle: '3 sets · 25-20-15 reps · 50 kg',
  },
  {
    id: 'hack squat',
    name: 'Hack squat',
    subtitle: '3 sets · 15 reps · 50 kg',
  },
  {
    id: 'leg press',
    name: 'Leg press',
    subtitle: '3 sets · 8 reps · 150 kg',
  },
  {
    id: 'standing leg curl',
    name: 'Standing leg curl',
    subtitle: '3 sets · 25 reps · 40 kg',
  },
  {
    id: 'standing calf raise',
    name: 'Standing calf raise',
    subtitle: '4 sets · 20 reps · 20 kg',
  },
  {
    id: 'seated calf raise',
    name: 'Seated calf raise',
    subtitle: '3 sets · 15 reps · 40 kg',
  },
];

const exercises: Reducer<Exercise[]> = (state = initialExercises, action) => {
  switch (action.type) {
    case 'reorder': {
      return arrayMove(state, action.oldIndex, action.newIndex);
    }

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  exercises,
  modal,
  template,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
