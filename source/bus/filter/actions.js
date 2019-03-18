// Types
import { types } from "./types";

export const filterActions = {
    updateFilter: (text) => {
        return {
            type:    types.UPDATE_FILTER,
            payload: text,
        };
    },
};
