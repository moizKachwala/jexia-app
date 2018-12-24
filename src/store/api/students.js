import {
    METHOD_GET, HEADERS_JSON_SEND, METHOD_POST, 
    METHOD_PUT, HEADERS_JSON_SEND_RECEIVE, 
    HEADERS_JSON_RECEIVE
} from '../constants/api';
import {apiHandleResponse} from '../../util/api';

const getStudents = () => {
    return fetch('http://localhost:8088/api/Students', {
        method: METHOD_GET,
        headers: HEADERS_JSON_RECEIVE,
    }).then(apiHandleResponse);
};

const getStudentById = (studentId) => {
    return fetch(`http://localhost:8088/api/Students/${studentId}`, {
        method: METHOD_GET,
        headers: HEADERS_JSON_RECEIVE,
    }).then(apiHandleResponse);
};

const createStudent = (student) => {
    return fetch('http://localhost:8088/api/Students', {
        method: METHOD_POST,
        headers:HEADERS_JSON_SEND_RECEIVE,
        body: JSON.stringify(student)
    }).then(apiHandleResponse);
};

const getStudentNationality = (studentId) => {
    return fetch(`http://localhost:8088/api/Students/${studentId}/Nationality`, {
        method: METHOD_GET,
        headers:HEADERS_JSON_RECEIVE,
    }).then(apiHandleResponse);
};

const setStudentNationality = (studentId, nationalityId) => {
    return fetch(`http://localhost:8088/api/Students/${studentId}/Nationality/${nationalityId}`, {
        method: METHOD_PUT,
        headers:HEADERS_JSON_SEND_RECEIVE,
    }).then(apiHandleResponse);
};

const getFamilyMembersByStudentId = (studentId) => {
    return fetch(`http://localhost:8088/api/Students/${studentId}/FamilyMembers`, {
        method: METHOD_GET,
        headers: HEADERS_JSON_RECEIVE,
    }).then(apiHandleResponse);
};

const getFamilyMemberById = (familyMemberId) => {
    return fetch(`http://localhost:8088/api/FamilyMembers/${familyMemberId}`, {
        method: METHOD_GET,
        headers: HEADERS_JSON_RECEIVE,
    }).then(apiHandleResponse);
};

const createFamilyMember = (studentId, familyMember) => {
    return fetch(`http://localhost:8088/api/Students/${studentId}/familyMembers`, {
        method: METHOD_POST,
        headers:HEADERS_JSON_SEND_RECEIVE,
        body: JSON.stringify(familyMember)
    }).then(apiHandleResponse);
};

export {
    getStudents,
    getStudentById,
    createStudent,
    getStudentNationality,
    setStudentNationality,
    createFamilyMember,
    getFamilyMembersByStudentId,
    getFamilyMemberById,
};