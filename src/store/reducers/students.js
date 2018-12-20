import {createReducer} from '../../util';
import {
    STUDENTS_LIST_PENDING,
    STUDENTS_LIST_FULFILLED,
    STUDENTS_LIST_REJECTED
} from '../actions/students';

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
    create: {
        ...initialStatusState,
    },
    update: {
        ...initialStatusState,
    },
};

export default createReducer(initialState, {
    [STUDENTS_LIST_PENDING]: (state) => ({ 
        ...state, 
        list: {
            pending: true,
        },
    }),
    [STUDENTS_LIST_FULFILLED]: (state, students) => ({
        ...state,
        list: {
            ...initialStatusState,
        },
        data: students,
    }),
    [STUDENTS_LIST_REJECTED]: (state, errorMessage) => ({
        ...state,
        list: {
            ...initialStatusState,
            error: true,
            errorMessage,
        },
    }),
});
