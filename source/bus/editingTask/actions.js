// Types
import { types } from "./types";

export const taskUpdateActions = {
    editStart: (id, message) => {
        return {
            type:    types.TASK_EDIT_START,
            payload: { id, message },
        };
    },
    editUpdate: (message) => {
        return {
            type:    types.TASK_EDIT_UPDATE,
            payload: message,
        };
    },
    editReset: () => {
        return {
            type: types.TASK_EDIT_RESET,
        };
    },
};
