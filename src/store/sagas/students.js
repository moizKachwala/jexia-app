import { delay } from 'redux-saga';
import {takeEvery, put, call, select} from 'redux-saga/effects';

import * as actions from '../actions/students';
import * as API from '../api/students';

export function* list() {
    const students = yield call(API.getStudents);
}

export default function *() {
    yield takeEvery(actions.STUDENTS_LIST, list);
}