// Core
import { fromJS, Map } from 'immutable';

// Reducer
import { filterReducer } from '../reducer';

// Actions
import { filterActions } from '../actions';

const initialState = Map({
    tasksFilter: '',
});

describe('filter reducer:', () => {
    test('should return initial state by default', () => {
        expect(filterReducer(void 0, {})).toEqual(initialState);
    });
    test('should handle UPDATE_FILTER action', () => {
        expect(filterReducer(void 0, filterActions.updateFilter(__.tasks[0].message))).toMatchSnapshot();
    });
});
