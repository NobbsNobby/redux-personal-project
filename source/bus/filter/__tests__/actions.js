// Actions
import { filterActions } from '../actions';

// Types
import { types } from '../types';

describe('filter actions', () => {
    test('updateFilter', () => {
        expect(filterActions.updateFilter(__.tasks[0].message)).toEqual(
            {
                type:    types.UPDATE_FILTER,
                payload: __.tasks[0].message,
            }
        );
    });
});
