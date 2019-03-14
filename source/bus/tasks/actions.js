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
};
