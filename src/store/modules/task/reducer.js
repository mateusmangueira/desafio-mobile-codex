/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = {
  task: null,
  tasks: [],
};

export default function task(state = INITIAL_STATE, action) {
  return produce(state, draftState => {
    switch (action.type) {
      case '@task/CREATE_TASK_SUCCESS': {
        draftState.task = action.payload.task;
        break;
      }

      case '@task/UPDATE_TASK_SUCCESS': {
        draftState.task = action.payload.task;
        break;
      }

      case '@task/GET_TASKS_SUCCESS': {
        draftState.tasks = action.payload.tasks;
        break;
      }

      case '@task/DELETE_TASK_SUCCESS': {
        draftState.tasks = draftState.tasks.filter(item => {
          return item._id !== action.payload._id;
        });
        break;
      }

      case '@task/SORT_TASKS': {
        draftState.tasks = action.payload.sortedTasks;
        break;
      }
      default:
    }
  });
}
