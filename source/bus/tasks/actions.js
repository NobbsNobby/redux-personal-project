// Types
import { types } from "./types";

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
    removeTaskAsync: (taskId) => {
        return {
            type:    types.REMOVE_TASK_ASYNC,
            payload: taskId,
        };
    },
    removeTask: (taskId) => {
        return {
            type:    types.REMOVE_TASK,
            payload: taskId,
        };
    },
    updateTaskAsync: (task) => {
        return {
            type:    types.UPDATE_TASK_ASYNC,
            payload: task,
        };
    },
    updateTask: (task) => {
        return {
            type:    types.UPDATE_TASK,
            payload: task,
        };
    },
};
