import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import StudentPageComponent from './StudentPage.jsx';
import {list} from '../../../store/actions/students';

export const StudentPage = connect(
    (state) => ({
        students: state.students.data
    }),
    (dispatch) => ({
        actions: bindActionCreators({
            studentList: list,
        }, dispatch)
    })
)(StudentPageComponent);