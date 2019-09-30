import { v4 as uuid } from 'uuid';

export const generateId = () => uuid().replace(/\-/g, '');

const arrayMoveMutate = (array: any[], from: number, to: number) => {
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
};

export const arrayMove = (array: any[], from: number, to: number) => {
  array = array.slice();
  arrayMoveMutate(array, from, to);
  return array;
};

export const pluralize = (word: string): string => {
  if (/(ss|y)$/.test(word)) {
    return word + 'es';
  } else {
    return word + 's';
  }
};
