//Core
import { Map } from "immutable";

// Types
import { types } from "./types";

const initialState = Map({
    tasksFilter: '',
});

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_FILTER:
            return state.set("tasksFilter", action.payload);

        default:
            return state;
    }
};
