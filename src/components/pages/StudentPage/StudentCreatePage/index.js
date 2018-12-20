import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import StudentCreatePageComponent from './StudentCreatePage.jsx';
import studentCreateForm from '../../../../store/forms/studentCreateForm';
import {create} from '../../../../store/actions/students';

// const selectedBook = (paramId, collection) => collection.find(({id}) => id === paramId);

export const StudentCreatePage = connect(
    (state, props) => ({
        // selectedBook: selectedBook(parseInt(props.params.id), state.books.data),
    }),
    (dispatch) => ({
        actions: bindActionCreators({
            studentCreate: create,
        }, dispatch)
    })
)(studentCreateForm(StudentCreatePageComponent));
