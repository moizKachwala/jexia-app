import { delay } from 'redux-saga';
import {takeEvery, put, call} from 'redux-saga/effects';

import * as actions from '../actions/students';
import * as API from '../api/students';

function *list() {
    try {
        yield put({type: actions.STUDENTS_LIST_PENDING});
        const payload = yield call(API.getStudents);
        yield put({type: actions.STUDENTS_LIST_FULFILLED, payload});
    }
    catch (error) {
        yield put({type: actions.STUDENTS_LIST_REJECTED});
    }
}

export default function *() {
    yield takeEvery(actions.STUDENTS_LIST, list);
}