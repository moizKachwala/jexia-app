
export const STUDENTS_LIST = 'STUDENTS_LIST';
export const STUDENTS_LIST_PENDING = 'STUDENTS_LIST_PENDING';
export const STUDENTS_LIST_FULFILLED = 'STUDENTS_LIST_FULFILLED';
export const STUDENTS_LIST_REJECTED = 'STUDENTS_LIST_REJECTED';

export const STUDENT_SELECTED = 'STUDENT_SELECTED';
export const STUDENTS_CREATE = 'STUDENTS_CREATE';

export const list = () => ({
    type: STUDENTS_LIST,
});

// export const create = (book) => ({
//     type: BOOKS_CREATE,
//     payload: {book},
// });
