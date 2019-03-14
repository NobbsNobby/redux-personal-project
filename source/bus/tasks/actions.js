// Types
import { types } from './types';

export const tasksActions = {
    fetchTasks: () => {
        return {
            type: types.FETCH_TASKS,
        };
    },
    fetchTasksSuccess: (tasks) => {
        return {
            type:    types.FETCH_TASKS_SUCCESS,
            payload: tasks,
        };
    },
    fetchTasksFail: (error) => {
        return {
            type:    types.FETCH_TASKS_FAIL,
            payload: error,
        };
    },
};
