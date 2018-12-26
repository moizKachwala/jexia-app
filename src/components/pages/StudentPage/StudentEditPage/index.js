import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {formValueSelector, change} from 'redux-form';

import StudentEditPageComponent from './StudentEditPage.jsx';
import studentForm from '../../../../store/forms/studentForm';
import {create, get, update, reset} from '../../../../store/actions/students';
import {list} from '../../../../store/actions/nationalities';
import { createSelector } from 'reselect';
import {createStudentSelector} from '../../../../store/selectors/students';

const selectSelectedStudent = (state) => state.students.selectedStudentId;
const selectStudent = (state) => state.students.selectedStudent;

const selectIsEdit = createSelector(
    selectSelectedStudent,
    (studentId) => studentId
);

const selectStudentForm = createSelector(    
    selectStudent,
    selectIsEdit,
    (student, isEdit) => {
        let form = {
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            nationality: '',
            familyMembers: [
                {firstName: '', lastName: '', dateOfBirth:'', nationality:''},
            ],
        };

        if(isEdit) {
            form = {
                ...student
            };
        }
        return form;
    }
);

export const StudentEditPage = connect(
    (state, props) => ({
        formValueSelector: (field) => formValueSelector('student')(state, field),
        isEdit: selectIsEdit(state),
        studentId: selectSelectedStudent(state, props),
        nationalities: state.nationalities.data,
        initialValues: selectStudentForm(state, props),
        studentGetPending: state.students.get.pending,
    }),
    (dispatch) => ({
        actions: bindActionCreators({
            nationalitiesList: list,
            studentCreate: create,
            studentGet: get,
            studentUpdate: update,
            studentsReset: reset,
            change: (field, value) => change('student', field, value),
        }, dispatch)
    })
)(studentForm(StudentEditPageComponent));
