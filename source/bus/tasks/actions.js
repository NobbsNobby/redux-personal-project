// Types
import { types } from './types';

export const tasksActions = {
    fetchTasksAsync: () => {
        return {
            type: types.FETCH_TASKS_ASYNC,
        };
    },
    fetchTasks: (tasks) => {
        return {
            type:    types.FETCH_TASKS,
            payload: tasks,
        };
    },
    createTaskAsync: (task) => {
        return {
            type:    types.CREATE_TASK_ASYNC,
            payload: task,
        };
    },
    createTask: (task) => {
        return {
            type:    types.CREATE_TASK,
            payload: task,
        };
    },
};
