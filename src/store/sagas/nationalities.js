import { delay } from 'redux-saga';
import {takeEvery, put, call, all} from 'redux-saga/effects';

import * as actions from '../actions/nationalities';
import * as API from '../api/nationalities';

function *list() {
    try {
        yield put({type: actions.NATIONALITIES_LIST_PENDING});
        const payload = yield call(API.getNationalities);
        yield put({type: actions.NATIONALITIES_LIST_FULFILLED, payload});
    }
    catch (error) {
        yield put({type: actions.NATIONALITIES_LIST_REJECTED});
    }
}

export default function *() {
    yield takeEvery(actions.NATIONALITIES_LIST, list)    
}