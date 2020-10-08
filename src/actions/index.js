import ACTION_TYPES from './types';

// COUNTER
export const createCounterIncrementAction = () => ({
  type: ACTION_TYPES.COUNTER_INCREMENT,
});

export const createCounterDecrementAction = () => ({
  type: ACTION_TYPES.COUNTER_DECREMENT,
});

export const createCounterSetStepAction = stepValue => ({
  type: ACTION_TYPES.COUNTER_SET_STEP,
  step: stepValue,
});

// TODO

export const createAddTaskAction = task => ({
  type: ACTION_TYPES.ADD_TASK_ACTION,
  task,
});

export const createUpdateTaskAction = (taskIndex, values) => ({
  type: ACTION_TYPES.UPDATE_TASK_ACTION,
  taskIndex,
  values,
});

export const createRemoveTaskAction = taskIndex => ({
  type: ACTION_TYPES.REMOVE_TASK_ACTION,
  taskIndex,
});
