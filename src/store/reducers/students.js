import {createReducer} from '../../util';
import {STUDENTS_LIST} from '../actions/students';

const initialState = {
    data:[],
    selectedBook: null,
};

export default createReducer(initialState, {
    [STUDENTS_LIST]: (state, payload) => ({ 
        ...state, 
        data: [
            { id: 1, name: 'Javascript The good parts', pages: 100 },
            { id: 2, name: 'Harry Potter', pages: 239 },
            { id: 3, name: 'The dark Hour', pages: 200 },
            { id: 4, name: 'Nothing Specific', pages: 789 },
            ]
        }),
});
