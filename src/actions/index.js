import ACTION_TYPES from './types';

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
