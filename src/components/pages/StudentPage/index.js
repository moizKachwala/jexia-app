import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import StudentPageComponent from './StudentPage.jsx';
import {list, select} from '../../../store/actions/students';
import {selectStudents} from '../../../store/selectors/students';

export const StudentPage = connect(
    (state) => ({
        students: selectStudents(state),
    }),
    (dispatch) => ({
        actions: bindActionCreators({
            studentList: list,
            studentSelect: select,
        }, dispatch)
    })
)(StudentPageComponent);