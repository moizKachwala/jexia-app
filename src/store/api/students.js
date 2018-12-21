import {METHOD_GET, HEADERS_JSON_SEND, METHOD_POST, HEADERS_JSON_SEND_RECEIVE} from '../constants/api';
import {apiHandleResponse} from '../../util/api';

const getStudents = () => {
    return fetch('http://localhost:8088/api/Students', {
        method: METHOD_GET,
        headers: HEADERS_JSON_SEND,
    }).then(apiHandleResponse);
};

const createStudent = (student) => {
    return fetch('http://localhost:8088/api/Students', {
        method: METHOD_POST,
        headers:HEADERS_JSON_SEND_RECEIVE,
        body: JSON.stringify(student)
    }).then(apiHandleResponse);
};

export {
    getStudents,
    createStudent,
};