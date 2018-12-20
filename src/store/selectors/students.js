import {createSelector} from 'reselect';

export const selectStudentList = (state) => state.students.data;

export const selectStudents = createSelector(
    selectStudentList,
    (students) => students,
);