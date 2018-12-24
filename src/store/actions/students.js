
export const STUDENTS_LIST = 'STUDENTS_LIST';
export const STUDENTS_LIST_PENDING = 'STUDENTS_LIST_PENDING';
export const STUDENTS_LIST_FULFILLED = 'STUDENTS_LIST_FULFILLED';
export const STUDENTS_LIST_REJECTED = 'STUDENTS_LIST_REJECTED';

export const STUDENTS_CREATE = 'STUDENTS_CREATE';
export const STUDENTS_CREATE_PENDING = 'STUDENTS_CREATE_PENDING';
export const STUDENTS_CREATE_FULFILLED = 'STUDENTS_CREATE_FULFILLED';
export const STUDENTS_CREATE_REJECTED = 'STUDENTS_CREATE_REJECTED';

export const STUDENTS_UPDATE = 'STUDENTS_UPDATE';
export const STUDENTS_UPDATE_PENDING = 'STUDENTS_UPDATE_PENDING';
export const STUDENTS_UPDATE_FULFILLED = 'STUDENTS_UPDATE_FULFILLED';
export const STUDENTS_UPDATE_REJECTED = 'STUDENTS_UPDATE_REJECTED';

export const STUDENTS_GET = 'STUDENTS_GET';
export const STUDENTS_GET_PENDING = 'STUDENTS_GET_PENDING';
export const STUDENTS_GET_FULFILLED = 'STUDENTS_GET_FULFILLED';
export const STUDENTS_GET_REJECTED = 'STUDENTS_GET_REJECTED';

export const STUDENTS_SELECTED = 'STUDENTS_SELECTED';
export const STUDENTS_RESET = 'STUDENTS_RESET';

export const list = () => ({
    type: STUDENTS_LIST,
});

export const create = (student, callback) => ({
    type: STUDENTS_CREATE,
    payload: {student, callback},
});

export const update = (id, student, callback) => ({
    type: STUDENTS_UPDATE,
    payload: {id, student, callback},
});

export const select = (student) => ({
    type: STUDENTS_SELECTED,
    payload: student
});

export const get = (studentId) => ({
    type: STUDENTS_GET,
    payload: {studentId},
});

export const reset = () => ({
    type: STUDENTS_RESET,
});
