
export const STUDENTS_LIST = 'STUDENTS_LIST';
export const STUDENTS_LIST_PENDING = 'STUDENTS_LIST_PENDING';
export const STUDENTS_LIST_FULFILLED = 'STUDENTS_LIST_FULFILLED';
export const STUDENTS_LIST_REJECTED = 'STUDENTS_LIST_REJECTED';

export const STUDENTS_CREATE = 'STUDENTS_CREATE';
export const STUDENTS_CREATE_PENDING = 'STUDENTS_CREATE_PENDING';
export const STUDENTS_CREATE_FULFILLED = 'STUDENTS_CREATE_FULFILLED';
export const STUDENTS_CREATE_REJECTED = 'STUDENTS_CREATE_REJECTED';

export const STUDENTS_GET = 'STUDENTS_GET';
export const STUDENTS_GET_PENDING = 'STUDENTS_GET_PENDING';
export const STUDENTS_GET_FULFILLED = 'STUDENTS_GET_FULFILLED';
export const STUDENTS_GET_REJECTED = 'STUDENTS_GET_REJECTED';

export const STUDENTS_SELECTED = 'STUDENTS_SELECTED';

export const list = () => ({
    type: STUDENTS_LIST,
});

export const create = (student) => ({
    type: STUDENTS_CREATE,
    payload: {student},
});

export const select = (student) => ({
    type: STUDENTS_SELECTED,
    payload: student
});

export const get = (studentId) => ({
    type: STUDENTS_GET,
    payload: {studentId},
});
