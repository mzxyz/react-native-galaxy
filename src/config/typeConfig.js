// @flow
import _ from 'lodash';

// these are helper functions to create customised action type

const prefix = (name: string): string => {
  const formatted = name
    .split(' ')
    .map(i => _.lowerCase(i))
    .join('_');
  return `app/${formatted}`;
};

const apiActionTypes = (
  name: string
): {
  requested: string,
  completed: string,
  failed: string,
  cancelled: string
} => {
  const p = prefix(name);
  return {
    requested: `${p}/requested`,
    completed: `${p}/completed`,
    failed: `${p}/failed`,
    cancelled: `${p}/cancelled`
  };
};

const requestActionTypes = (
  name: string
): {
  requested: string,
  ready: string,
  granted: string,
  cancelled: string,
  failed: string,
  completed: string
} => {
  const p = prefix(name);
  return {
    requested: `${p}/requested`,
    ready: `${p}/ready`,
    granted: `${p}/granted`,
    cancelled: `${p}/cancelled`,
    failed: `${p}/failed`,
    completed: `${p}/completed`,
  };
};

const changedActionTypes = (name: string): { changed: string } => ({
  changed: `${prefix(name)}/changed`
});

const toggledActionTypes = (name: string): { toggled: string } => ({
  toggled: `${prefix(name)}/toggled`,
});

const navigateActionTypes = (name: string): string =>
  `${prefix(name)}/navigate`;

export {
  apiActionTypes,
  requestActionTypes,
  changedActionTypes,
  toggledActionTypes,
  navigateActionTypes,
};
