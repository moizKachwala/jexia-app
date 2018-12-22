import { delay } from 'redux-saga';
import {takeEvery, put, call, all} from 'redux-saga/effects';

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

function *create(action) {
    try {
        yield put({type: actions.STUDENTS_CREATE_PENDING});
        const {student} = action.payload;
        const {familyMembers} = student; //TODO
        //creating new student
        const newStudent = yield call(API.createStudent, student);        
        //setting nationality
        yield call(API.setStudentNationality, newStudent.ID, 1);
        //creating family member.
        const calls = [];
        familyMembers.forEach(familyMember => {
            calls.push(call(API.createFamilyMember, newStudent.ID, familyMember));
        });
        yield all(calls);
        yield put({type: actions.STUDENTS_CREATE_FULFILLED, newStudent});
    }
    catch (error) {
        yield put({type: actions.STUDENTS_CREATE_REJECTED});
    }
}

export default function *() {
    yield takeEvery(actions.STUDENTS_LIST, list);
    yield takeEvery(actions.STUDENTS_CREATE, create);
}