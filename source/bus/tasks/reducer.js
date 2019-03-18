// Core
import { fromJS, List } from "immutable";

// Types
import { types } from "./types";

const initialState = List();

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_TASKS:
            return fromJS(action.payload);

        case types.CREATE_TASK:
            return state.unshift(fromJS(action.payload));

        case types.REMOVE_TASK:
            return state.filter((task) => task.get("id") !== action.payload);

        case types.UPDATE_TASK:
            return state.update(
                state.findIndex((task) => {
                    return task.get('id') === action.payload.id;
                }),
                (task) => task.merge(action.payload)

            );

        case types.COMPLETE_ALL_TASKS:
            return state.map((task) => task.set("completed", true));

        default:
            return state;
    }
};
