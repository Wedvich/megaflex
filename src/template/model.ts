import { generateId } from '../common/utils';

export class TemplateModel {
  id = generateId();
  name = 'New template';
  exercises: ExerciseModel[] = [];
}

export class ExerciseModel {
  id = generateId();
  name = 'New exercise';
}
