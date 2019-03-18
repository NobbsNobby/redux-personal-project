// Core
import { fromJS, List } from 'immutable';

// Reducer
import { tasksReducer } from '../reducer';

// Actions
import { tasksActions } from '../actions';

const initialState = List();

describe('tasks reducer:', () => {
    test('should return initial state by default', () => {
        expect(tasksReducer(void 0, {})).toEqual(initialState);
    });
    test('should handle FETCH_TASKS action', () => {
        expect(tasksReducer(void 0, tasksActions.fetchTasks(__.tasks))).toMatchSnapshot();
    });
    test('should handle CREATE_TASK action', () => {
        expect(tasksReducer(void 0, tasksActions.createTask(__.tasks[0].message))).toMatchSnapshot();
    });
    test('should handle REMOVE_TASK action', () => {
        // !многословно
        // expect(tasksReducer(fromJS(__.tasks), tasksActions.removeTask(__.tasks[0].id))).toEqual(fromJS(__.tasks.filter((task) => task.id !== __.tasks[0].id)));
        expect(tasksReducer(fromJS(__.tasks), tasksActions.removeTask(__.tasks[0].id))).toMatchSnapshot();
    });
    test('should handle UPDATE_TASK action', () => {
        expect(tasksReducer(fromJS(__.tasks), tasksActions.updateTask(__.tasks[0]))).toEqual(fromJS(__.tasks));
    });
    test('should handle COMPLETE_ALL_TASKS action', () => {
        expect(tasksReducer(fromJS(__.tasks), tasksActions.completeAllTasks(__.tasks[0]))).toMatchSnapshot();
    });
});
