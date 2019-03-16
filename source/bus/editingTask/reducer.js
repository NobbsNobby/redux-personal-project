// Core
import { Map } from 'immutable';

// Types
import { types } from "./types";

const initialState = Map({
    id:         '',
    newMessage: '',
});

export const editingTaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TASK_EDIT_START:
            return state.set('id', action.payload);
        case types.TASK_EDIT_RESET:
            return state.set('id', '');
        default:
            return state;
    }
};
