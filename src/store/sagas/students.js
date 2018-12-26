import {takeEvery, put, call, all} from 'redux-saga/effects';

import * as actions from '../actions/students';
import * as API from '../api/students';

function* list() {
    try {
        yield put({type: actions.STUDENTS_LIST_PENDING});
        const payload = yield call(API.getStudents);
        yield put({type: actions.STUDENTS_LIST_FULFILLED, payload});
    } catch (error) {
        yield put({type: actions.STUDENTS_LIST_REJECTED});
    }
}

function* get(action) {
    const {studentId} = action.payload;
    try {
        yield put({type: actions.STUDENTS_GET_PENDING});
        const student = yield call(API.getStudentById, studentId);
        const {nationality} = yield call(API.getStudentNationality, studentId);
        const familyMembers = yield call(API.getFamilyMembersByStudentId, studentId);

        const familyMembersWithNationality = familyMembers.map((family) => {
            return {
                ...family,
                nationality: family.nationality.ID
            };
        });

        const payload = {
            ...{
                ...student,
                nationality: nationality.ID,
            },
            familyMembers: [...familyMembersWithNationality],
        };
        yield put({type: actions.STUDENTS_GET_FULFILLED, payload});

    } catch (error) {
        
        yield put({type: actions.STUDENTS_GET_REJECTED});
    }
}

function* create(action) {
    try {
        yield put({type: actions.STUDENTS_CREATE_PENDING});
        const {
            student,
            callback
        } = action.payload;
        const {
            familyMembers,
            nationality
        } = student;

        //creating new student
        const newStudent = yield call(API.createStudent, student);

        //setting nationality
        yield call(API.setStudentNationality, newStudent.ID, nationality);

        //creating family members with nationality
        const calls = [];
        familyMembers.forEach(familyMember => {
            calls.push(call(createFamilyMember, newStudent.ID, familyMember));
        });
        yield all(calls);

        yield put({type: actions.STUDENTS_CREATE_FULFILLED,newStudent});

        if (callback) {
            callback();
        }
    } catch (error) {
        yield put({
            type: actions.STUDENTS_CREATE_REJECTED
        });
    }
}

function* update(action) {
    try {
        yield put({
            type: actions.STUDENTS_UPDATE_PENDING
        });
        const {student, callback} = action.payload;
        
        const { familyMembers, nationality, deletingMembers = [] } = student;

        //update student
        yield call(API.updateStudent, student.ID, student);

        //setting nationality
        yield call(API.setStudentNationality, student.ID, nationality);

        //creating family members with nationality
        const calls = [];
        familyMembers.forEach(familyMember => {
            if (familyMember.ID) {
                calls.push(call(updateFamilyMember, familyMember));
            } else {
                calls.push(call(createFamilyMember, student.ID, familyMember));
            }
        });
        yield all(calls);

        if (deletingMembers.length) {
            //delete family members
            const deleteCalls = [];
            deletingMembers.forEach(id => {
                deleteCalls.push(call(API.deleteFamilyMember, id));
            });
            yield all(deleteCalls);
        }

        yield put({type: actions.STUDENTS_UPDATE_FULFILLED, student});

        if (callback) {
            callback();
        }
    } catch (error) {
        yield put({
            type: actions.STUDENTS_UPDATE_REJECTED
        });
    }
}

function* createFamilyMember(studentId, familyMember) {
    try {
        const {
            nationality
        } = familyMember;
        const newFamilyMember = yield call(API.createFamilyMember, studentId, familyMember);
        yield call(API.setFamilyMemberNationality, newFamilyMember.ID, nationality);
    } catch (error) {
        yield put({
            type: actions.STUDENTS_CREATE_REJECTED
        });
    }
}

function* updateFamilyMember(familyMember) {
    try {
        const {
            nationality
        } = familyMember;
        yield call(API.updateFamilyMember, familyMember.ID, familyMember);
        yield call(API.setFamilyMemberNationality, familyMember.ID, nationality);
    } catch (error) {
        yield put({
            type: actions.STUDENTS_UPDATE_REJECTED
        });
    }
}

export default function* () {
    yield takeEvery(actions.STUDENTS_LIST, list);
    yield takeEvery(actions.STUDENTS_GET, get);
    yield takeEvery(actions.STUDENTS_CREATE, create);
    yield takeEvery(actions.STUDENTS_UPDATE, update);
}
