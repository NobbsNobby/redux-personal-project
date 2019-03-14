// Core
import { fromJS, List } from 'immutable';

// Types
import { types } from './types';

const initialState = List();

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_TASKS_SUCCESS:
            return fromJS(action.payload);
        default:
            return state;
    }
};
