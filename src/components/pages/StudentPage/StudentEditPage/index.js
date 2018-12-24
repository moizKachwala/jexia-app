import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {formValueSelector} from 'redux-form';

import StudentEditPageComponent from './StudentEditPage.jsx';
import studentCreateForm from '../../../../store/forms/studentCreateForm';
import {create, get, update, reset} from '../../../../store/actions/students';
import {list} from '../../../../store/actions/nationalities';
import { createSelector } from 'reselect';
import {createStudentSelector} from '../../../../store/selectors/students';

const selectSelectedStudent = (state) => state.students.selectedStudentId;

//TODO change the way null check is done.
const selectIsEdit = createSelector(
    selectSelectedStudent,
    (studentId) => (studentId !== null)
);

//const selectStudent = createStudentSelector(selectSelectedStudent);

const selectStudentForm = createSelector(
    //selectStudent,
    (state) => state.students.selectedStudent,
    (student) => {
        let form = {
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            nationality: '',
            familyMembers: [
                {firstName: '', lastName: '', dateOfBirth:'', nationality:''},
            ],
        };

        //TODO change the id how we check for edit.
        if(student.ID) {
            form = {
                ...student
            };
        }
        
        return form;
    }
);

export const StudentEditPage = connect(
    (state, props) => ({
        formValueSelector: (field) => formValueSelector('student-create')(state, field),
        isEdit: selectIsEdit(state),
        studentId: selectSelectedStudent(state, props),
        nationalities: state.nationalities.data,
        initialValues: selectStudentForm(state, props),
    }),
    (dispatch) => ({
        actions: bindActionCreators({
            nationalitiesList: list,
            studentCreate: create,
            studentGet: get,
            studentUpdate: update,
            studentsReset: reset,
        }, dispatch)
    })
)(studentCreateForm(StudentEditPageComponent));
