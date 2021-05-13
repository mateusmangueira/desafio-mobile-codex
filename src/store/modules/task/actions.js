export function createTaskRequest(name, priority) {
  return {
    type: '@task/CREATE_TASK_REQUEST',
    payload: {name, priority},
  };
}

export function createTaskSuccess(task) {
  return {
    type: '@task/CREATE_TASK_SUCCESS',
    payload: {task},
  };
}

export function getTasksRequest(userId) {
  return {
    type: '@task/GET_TASKS_REQUEST',
    payload: {userId},
  };
}

export function getTasksSuccess(tasks) {
  return {
    type: '@task/GET_TASKS_SUCCESS',
    payload: {tasks},
  };
}

export function getTasksFailed() {
  return {
    type: '@task/GET_TASKS_FAILURE',
  };
}

export function createTaskFailure() {
  return {
    type: '@task/CREATE_TASK_FAILURE',
  };
}

export function updateTaskRequest(name, priority, id) {
  return {
    type: '@task/UPDATE_TASK_REQUEST',
    payload: {name, priority, id},
  };
}

export function updateTaskSuccess(task) {
  return {
    type: '@task/UPDATE_TASK_SUCCESS',
    payload: {task},
  };
}

export function updateTaskFailure() {
  return {
    type: '@task/UPDATE_TASK_FAILURE',
  };
}

export function deleteTaskRequest(id) {
  return {
    type: '@task/DELETE_TASK_REQUEST',
    payload: {id},
  };
}

export function deleteTaskSuccess(id) {
  return {
    type: '@task/DELETE_TASK_SUCCESS',
    payload: {id},
  };
}

export function deleteTaskFailure() {
  return {
    type: '@task/DELETE_TASK_FAILURE',
  };
}

export function sortTasks(sortedTasks) {
  return {
    type: '@task/SORT_TASKS',
    payload: {sortedTasks},
  };
}
