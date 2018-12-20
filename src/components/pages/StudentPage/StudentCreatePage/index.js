import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {push as pushHistory} from 'react-router-redux';

import StudentCreatePageComponent from './StudentCreatePage.jsx';
import bookCreateForm from '../../../../store/forms/bookCreateForm';
// import {create} from '../../../../store/actions/books';

// const selectedBook = (paramId, collection) => collection.find(({id}) => id === paramId);

export const StudentCreatePage = connect(
    (state, props) => ({
        // selectedBook: selectedBook(parseInt(props.params.id), state.books.data),
    }),
    (dispatch) => ({
        actions: bindActionCreators({
            //bookCreate: create,
            pushHistory,
        }, dispatch)
    })
)(bookCreateForm(StudentCreatePageComponent));
