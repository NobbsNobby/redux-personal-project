import { combineReducers } from "redux";

// Reducers
import { tasksReducer as tasks } from "../bus/tasks/reducer";
import { uiReducer as ui } from "../bus/ui/reducer";
import { formsReducer as forms } from "../bus/forms/reducer";
import { editingTaskReducer as editingTask } from "../bus/editingTask/reducer";

export const rootReducer = combineReducers({
    tasks,
    ui,
    forms,
    editingTask,
});
