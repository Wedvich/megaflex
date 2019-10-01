import React from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import { pluralize } from '../common/utils';

import './WorkoutExercise.scss';

export interface WorkoutExerciseProps {
  description: string;
  name: string;
  prefix: string;
  onClick: (event: any) => void;
}

const WorkoutExerciseDragHandle = SortableHandle(() => <span className="workout-exercise__drag-handle">☰</span>);

export const WorkoutExercise: React.FC<WorkoutExerciseProps> = ({ onClick, prefix, name, description }) => (
  <li className="workout-exercise">
    <WorkoutExerciseDragHandle />
    <div className="workout-exercise__content" onClick={onClick}>
      <div className="workout-exercise__name">
        <span className="workout-exercise__prefix">{prefix}</span>
        {pluralize(name)}
      </div>
      <div className="workout-exercise__description">{description}</div>
    </div>
  </li>
);

export default SortableElement(WorkoutExercise);
