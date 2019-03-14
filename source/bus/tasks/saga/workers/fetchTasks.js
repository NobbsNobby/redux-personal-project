//Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';
import { tasksActions } from '../../actions';

export function* fetchTasks () {
    try {
        const response = yield apply(api, api.tasks.fetch);
        const { data: tasks, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(tasksActions.fetchTasksSuccess(tasks));
    } catch (error) {
        // yield put(uiActions.emitError(error, ' worker'));
    } finally {
        // yield put(uiActions.stopFetching());
    }
}
