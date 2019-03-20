// Core
import { fromJS, Map } from 'immutable';

// Reducer
import { editingTaskReducer } from '../reducer';

// Actions
import { taskUpdateActions } from '../actions';

const initialState = Map({
    id:         '',
    newMessage: '',
});

describe('editingTask reducer:', () => {
    test('should return initial state by default', () => {
        expect(editingTaskReducer(void 0, {})).toEqual(initialState);
    });
    test('should handle TASK_EDIT_START action', () => {
        expect(editingTaskReducer(void 0, taskUpdateActions.editStart(__.tasks[0].id, __.tasks[0].message))).toMatchSnapshot();
    });
    test('should handle TASK_EDIT_UPDATE action', () => {
        expect(editingTaskReducer(void 0, taskUpdateActions.editUpdate(__.tasks[0].message))).toMatchSnapshot();
    });
    test('should handle TASK_EDIT_RESET action', () => {
        expect(editingTaskReducer(void 0, taskUpdateActions.editReset())).toEqual(initialState);
    });
});
