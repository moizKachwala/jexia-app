import {createSelector} from 'reselect';

export const selectStudentList = (state) => state.students.data;

export const selectStudents = createSelector(
    selectStudentList,
    (students) => students,
);

export const createStudentSelector = (selectStudentId) => createSelector(
    selectStudents,
    selectStudentId,
    (students, studentId) => students.find((student) => student.ID === studentId)
);