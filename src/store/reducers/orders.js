import {createReducer} from '../../util';
import * as actions from '../actions/orders';

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
    [actions.ORDERS_LIST_PENDING]: (state) => ({ 
        ...state, 
        list: {
            pending: true,
        },
    }),
    [actions.ORDERS_LIST_FULFILLED]: (state, students) => ({
        ...state,
        list: {
            ...initialStatusState,
        },
        data: students,
    }),
    [actions.ORDERS_LIST_REJECTED]: (state, errorMessage) => ({
        ...state,
        list: {
            ...initialStatusState,
            error: true,
            errorMessage,
        },
    })
});
