import {
    METHOD_GET, HEADERS_JSON_SEND, METHOD_POST, 
    METHOD_PUT, HEADERS_JSON_SEND_RECEIVE, METHOD_DELETE,
    HEADERS_JSON_RECEIVE, SERVER_URL
} from '../constants/api';
import {apiHandleResponse} from '../../util/api';

const getStudents = () => {
    return fetch(`${SERVER_URL}/api/Students`, {
        method: METHOD_GET,
        headers: HEADERS_JSON_RECEIVE,
    }).then(apiHandleResponse);
};

const getStudentById = (studentId) => {
    return fetch(`${SERVER_URL}/api/Students/${studentId}`, {
        method: METHOD_GET,
        headers: HEADERS_JSON_RECEIVE,
    }).then(apiHandleResponse);
};

const createStudent = (student) => {
    return fetch(`${SERVER_URL}/api/Students`, {
        method: METHOD_POST,
        headers:HEADERS_JSON_SEND_RECEIVE,
        body: JSON.stringify(student)
    }).then(apiHandleResponse);
};

const updateStudent = (studentId, student) => {
    return fetch(`${SERVER_URL}/api/Students/${studentId}`, {
        method: METHOD_PUT,
        headers:HEADERS_JSON_SEND_RECEIVE,
        body: JSON.stringify(student)
    }).then(apiHandleResponse);
};

const getStudentNationality = (studentId) => {
    return fetch(`${SERVER_URL}/api/Students/${studentId}/Nationality`, {
        method: METHOD_GET,
        headers:HEADERS_JSON_RECEIVE,
    }).then(apiHandleResponse);
};

const setStudentNationality = (studentId, nationalityId) => {
    return fetch(`${SERVER_URL}/api/Students/${studentId}/Nationality/${nationalityId}`, {
        method: METHOD_PUT,
        headers:HEADERS_JSON_SEND_RECEIVE,
    }).then(apiHandleResponse);
};

const getFamilyMembersByStudentId = (studentId) => {
    return fetch(`${SERVER_URL}/api/Students/${studentId}/FamilyMembers`, {
        method: METHOD_GET,
        headers: HEADERS_JSON_RECEIVE,
    }).then(apiHandleResponse);
};

const getFamilyMemberById = (familyMemberId) => {
    return fetch(`${SERVER_URL}/api/FamilyMembers/${familyMemberId}`, {
        method: METHOD_GET,
        headers: HEADERS_JSON_RECEIVE,
    }).then(apiHandleResponse);
};

const createFamilyMember = (studentId, familyMember) => {
    return fetch(`${SERVER_URL}/api/Students/${studentId}/familyMembers`, {
        method: METHOD_POST,
        headers:HEADERS_JSON_SEND_RECEIVE,
        body: JSON.stringify(familyMember)
    }).then(apiHandleResponse);
};

const updateFamilyMember = (familyMemberId, familyMember) => {
    return fetch(`${SERVER_URL}/api/FamilyMembers/${familyMemberId}`, {
        method: METHOD_PUT,
        headers:HEADERS_JSON_SEND_RECEIVE,
        body: JSON.stringify(familyMember)
    }).then(apiHandleResponse);
};

const setFamilyMemberNationality = (familyMemberId, nationalityId) => {
    return fetch(`${SERVER_URL}/api/FamilyMembers/${familyMemberId}/Nationality/${nationalityId}`, {
        method: METHOD_PUT,
        headers:HEADERS_JSON_SEND_RECEIVE,
    }).then(apiHandleResponse);
};

const deleteFamilyMember = (familyMemberId) => {
    return fetch(`${SERVER_URL}/api/FamilyMembers/${familyMemberId}`, {
        method: METHOD_DELETE,
    });
};

export {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    getStudentNationality,
    setStudentNationality,
    createFamilyMember,
    updateFamilyMember,
    getFamilyMembersByStudentId,
    getFamilyMemberById,
    setFamilyMemberNationality,
    deleteFamilyMember,
};