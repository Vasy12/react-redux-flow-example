import ACTION_TYPES from '../actions/types';

const initialState = {
  tasks: [],
};

let serial = 0;

function todoReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case ACTION_TYPES.ADD_TASK_ACTION: {
      const { tasks } = state;
      const { task } = action;
      return {
        ...state,
        tasks: [...tasks, { ...task, id: ++serial }],
      };
    }
    case ACTION_TYPES.UPDATE_TASK_ACTION: {
      const { tasks } = state;
      const { taskIndex, values } = action;

      const newTasks = [...tasks];
      newTasks[taskIndex] = {
        ...newTasks[taskIndex],
        ...values,
      };

      return {
        ...state,
        tasks: newTasks,
      };
    }
    case ACTION_TYPES.REMOVE_TASK_ACTION: {
      const { tasks } = state;
      const { taskIndex } = action;
      const newTasks = [...tasks];
      newTasks.splice(taskIndex, 1);

      return {
        ...state,
        tasks: newTasks,
      };
    }

    default:
      return state;
  }
}

export default todoReducer;
