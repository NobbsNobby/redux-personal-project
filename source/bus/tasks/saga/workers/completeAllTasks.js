//Core
import { put, apply, select } from "redux-saga/effects";

// Instruments
import { api } from "../../../../REST";
import { tasksActions } from "../../actions";
import { uiActions } from "../../../ui/actions";

export function* completeAllTasks () {
    try {
        yield put(uiActions.startFetching());

        const allTasks = yield select((state) => state.tasks);
        const tasksComplete = allTasks.map((task) => task.set('completed', true)).toJS();

        const response = yield apply(api, api.tasks.update, [tasksComplete]);
        const { message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(tasksActions.completeAllTasks());
    } catch (error) {
        yield put(uiActions.emitError(error, "completeAllTasks worker"));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
