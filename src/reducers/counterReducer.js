import ACTION_TYPES from '../actions/types';

const initialState = {
  value: 0,
  step: 1,
};

function counterReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case ACTION_TYPES.COUNTER_INCREMENT:
      return {
        ...state,
        value: state.value + state.step,
      };
    case ACTION_TYPES.COUNTER_DECREMENT:
      return {
        ...state,
        value: state.value - state.step,
      };
    case ACTION_TYPES.COUNTER_SET_STEP:
      return {
        ...state,
        step: action.step,
      };
    default:
      return state;
  }
}

export default counterReducer;
