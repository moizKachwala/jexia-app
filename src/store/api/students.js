import {METHOD_GET, HEADERS_JSON_SEND, METHOD_POST, HEADERS_JSON_SEND_RECEIVE} from '../constants/api';
import {apiHandleResponse} from '../../util/api';

const getStudents = () => {
    return fetch('http://demo5103770.mockable.io/users', {
        method: METHOD_GET,
        headers:{ HEADERS_JSON_SEND }
    }).then(apiHandleResponse);
};

const createStudent = () => {
    return fetch('http://demo5103770.mockable.io/users', {
        method: METHOD_POST,
        headers:{ HEADERS_JSON_SEND_RECEIVE }
    }).then(apiHandleResponse);
};

export {
    getStudents,
    createStudent,
};