import {createReducer} from '../../util';
import * as actions from '../actions/nationalities';

const initialStatusState = {
    error: false,
    errorMessage: null,
    pending: false,
};

const initialState = {
    data: [],
    list: {
        ...initialStatusState,
    },
};

export default createReducer(initialState, {
    [actions.NATIONALITIES_LIST_PENDING]: (state) => ({ 
        ...state, 
        list: {
            pending: true,
        },
    }),
    [actions.NATIONALITIES_LIST_FULFILLED]: (state, nationalities) => ({
        ...state,
        list: {
            ...initialStatusState,
        },
        data: nationalities,
    }),
    [actions.NATIONALITIES_LIST_REJECTED]: (state, errorMessage) => ({
        ...state,
        list: {
            ...initialStatusState,
            error: true,
            errorMessage,
        },
    }),
});
