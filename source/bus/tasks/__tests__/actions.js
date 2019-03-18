// Actions
import { tasksActions } from '../actions';

// Types
import { types } from '../types';

describe('tasks actions:', () => {
    test('fetchTasksAsync', () => {
        expect(tasksActions.fetchTasksAsync()).toEqual({
            type: types.FETCH_TASKS_ASYNC,
        });
    });
    test('fetchTasks', () => {
        expect(tasksActions.fetchTasks( __.tasks)).toEqual({
            type:    types.FETCH_TASKS,
            payload: __.tasks,
        });
    });
    test('createTaskAsync', () => {
        expect(tasksActions.createTaskAsync(__.tasks[0])).toEqual({
            type:    types.CREATE_TASK_ASYNC,
            payload: __.tasks[0],
        });
    });
    test('createTask', () => {
        expect(tasksActions.createTask(__.tasks[0])).toEqual({
            type:    types.CREATE_TASK,
            payload: __.tasks[0],
        });
    });
    test('removeTaskAsync', () => {
        expect(tasksActions.removeTaskAsync(__.tasks[0].id)).toEqual({
            type:    types.REMOVE_TASK_ASYNC,
            payload: __.tasks[0].id,
        });
    });
    test('removeTask', () => {
        expect(tasksActions.removeTask(__.tasks[0].id)).toEqual({
            type:    types.REMOVE_TASK,
            payload: __.tasks[0].id,
        });
    });
    test('updateTaskAsync', () => {
        expect(tasksActions.updateTaskAsync(__.tasks[0])).toEqual({
            type: types.UPDATE_TASK_ASYNC,
            payload: __.tasks[0],
        });
    });
    test('updateTask', () => {
        expect(tasksActions.updateTask(__.tasks[0])).toEqual({
            type: types.UPDATE_TASK,
            payload: __.tasks[0],
        });
    });
    test('completeAllTasksAsync', () => {
        expect(tasksActions.completeAllTasksAsync()).toEqual({
            type: types.COMPLETE_ALL_TASKS_ASYNC,
        });
    });
    test('completeAllTasks', () => {
        expect(tasksActions.completeAllTasks()).toEqual({
            type: types.COMPLETE_ALL_TASKS,
        });
    });
});
