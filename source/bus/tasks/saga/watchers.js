// Core
import { takeEvery, all, call } from "redux-saga/effects";

// Types
import { types } from "../types";

// Workers
import { fetchTasks, createTask, removeTask, updateTask } from './workers';

export function* watchFetchTasks () {
    yield takeEvery(types.FETCH_TASKS_ASYNC, fetchTasks);
}
export function* watchCreateTask () {
    yield takeEvery(types.CREATE_TASK_ASYNC, createTask);
}
export function* watchRemoveTask () {
    yield takeEvery(types.REMOVE_TASK_ASYNC, removeTask);
}
export function* watchUpdateTask () {
    yield takeEvery(types.UPDATE_TASK_ASYNC, updateTask);
}

export function* watchTasks () {
    yield all([
        call(watchFetchTasks),
        call(watchCreateTask),
        call(watchRemoveTask),
        call(watchUpdateTask)
    ]);
}
