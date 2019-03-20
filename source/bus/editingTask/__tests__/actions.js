// Actions
import { taskUpdateActions } from '../actions';

// Types
import { types } from '../types';

describe('editingTask actions:', () => {
    test('editStart', () => {
        expect(taskUpdateActions.editStart(__.tasks[0].id, __.tasks[0].message)).toEqual(
            {
                type:    types.TASK_EDIT_START,
                payload: { id: __.tasks[0].id, message: __.tasks[0].message },
            }
        );
    });
    test('editUpdate', () => {
        expect(taskUpdateActions.editUpdate(__.tasks[0].message)).toEqual(
            {
                type:    types.TASK_EDIT_UPDATE,
                payload: __.tasks[0].message,
            }
        );
    });
    test('editReset', () => {
        expect(taskUpdateActions.editReset()).toEqual(
            {
                type: types.TASK_EDIT_RESET,
            }
        );
    });
});
