import {createReducer} from '../../util';
import {USERS_LIST} from '../actions/users';

const initialState = {
    data:[
        { id: 1, title: 'Javascript The good parts', pages: 100 },
        { id: 2, title: 'Harry Potter', pages: 239 },
        { id: 3, title: 'The dark Hour', pages: 200 },
        { id: 4, title: 'Nothing Specific', pages: 789 },
    ],
    selectedBook: null,
};

export default createReducer(initialState, {
    [USERS_LIST]: (state, payload) => ({ 
        ...state, 
        data: [
            ]
        }),
});
