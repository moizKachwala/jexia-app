import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {formValueSelector} from 'redux-form';

import StudentCreatePageComponent from './StudentCreatePage.jsx';
import studentCreateForm from '../../../../store/forms/studentCreateForm';
import {create, get} from '../../../../store/actions/students';
import {list} from '../../../../store/actions/nationalities';

const selectSelectedStudent = (state) => state.students.selectedStudent;

// const selectedBook = (paramId, collection) => collection.find(({id}) => id === paramId);

export const StudentCreatePage = connect(
    (state, props) => ({
        formValueSelector: (field) => formValueSelector('student-create')(state, field),
        isEdit: selectSelectedStudent(state),
        nationalities: state.nationalities.data,
        // selectedBook: selectedBook(parseInt(props.params.id), state.books.data),
    }),
    (dispatch) => ({
        actions: bindActionCreators({
            nationalitiesList: list,
            studentCreate: create,
            studentGet: get,
        }, dispatch)
    })
)(studentCreateForm(StudentCreatePageComponent));
