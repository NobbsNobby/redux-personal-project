// Types
import { types } from "./types";

export const taskUpdateActions = {
    editStart: (taskId) => {
        return {
            type:    types.TASK_EDIT_START,
            payload: taskId,
        };
    },
    editDone: () => {
        return {
            type: types.TASK_EDIT_DONE,
        };
    },
    editReset: () => {
        return {
            type: types.TASK_EDIT_RESET,
        };
    },
};
