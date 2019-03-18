// Core
import { fromJS, Map } from 'immutable';

// Types
import { types } from "./types";

const initialState = Map({
    id:         '',
    newMessage: '',
});

export const editingTaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TASK_EDIT_START:
            return state.merge(
                fromJS({
                    id:         action.payload.id,
                    newMessage: action.payload.message,
                })
            );
        case types.TASK_EDIT_UPDATE:
            return state.set('newMessage', action.payload);

        case types.TASK_EDIT_RESET:
            return initialState;

        default:
            return state;
    }
};
