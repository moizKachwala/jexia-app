import {createReducer} from '../../util';
import * as actions from '../actions/students';

const initialStatusState = {
    error: false,
    errorMessage: null,
    pending: false,
};

const initialState = {
    data: [],
    selectedStudentId: null,
    selectedStudent: {},
    list: {
        ...initialStatusState,
    },
    get: {
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
    [actions.STUDENTS_LIST_PENDING]: (state) => ({ 
        ...state, 
        list: {
            pending: true,
        },
    }),
    [actions.STUDENTS_LIST_FULFILLED]: (state, students) => ({
        ...state,
        list: {
            ...initialStatusState,
        },
        data: students,
    }),
    [actions.STUDENTS_LIST_REJECTED]: (state, errorMessage) => ({
        ...state,
        list: {
            ...initialStatusState,
            error: true,
            errorMessage,
        },
    }),

    [actions.STUDENTS_GET_PENDING]: (state) => ({ 
        ...state, 
        get: {
            pending: true,
        },
    }),
    [actions.STUDENTS_GET_FULFILLED]: (state, student) => ({
        ...state,
        selectedStudent: student,
    }),
    [actions.STUDENTS_GET_REJECTED]: (state, errorMessage) => ({
        ...state
    }),

    [actions.STUDENTS_CREATE_PENDING]: (state) => ({ 
        ...state, 
        create: {
            pending: true,
        },
    }),
    [actions.STUDENTS_CREATE_FULFILLED]: (state) => ({
        ...state,
        create: {
            ...initialStatusState,
        }
    }),
    [actions.STUDENTS_CREATE_REJECTED]: (state, errorMessage) => ({
        ...state,
        create: {
            ...initialStatusState,
            error: true,
            errorMessage,
        },
    }),

    [actions.STUDENTS_UPDATE_PENDING]: (state) => ({ 
        ...state, 
        update: {
            pending: true,
        },
    }),
    [actions.STUDENTS_UPDATE_FULFILLED]: (state) => ({
        ...state,
        update: {
            ...initialStatusState,
        }
    }),
    [actions.STUDENTS_UPDATE_REJECTED]: (state, errorMessage) => ({
        ...state,
        update: {
            ...initialStatusState,
            error: true,
            errorMessage,
        },
    }),

    [actions.STUDENTS_SELECTED]: (state, payload) => ({
        ...state, selectedStudentId: payload.ID
    }),

    [actions.STUDENTS_RESET]: (state) => ({
        ...state, selectedStudentId: null, selectedStudent: {}
    }),
});
