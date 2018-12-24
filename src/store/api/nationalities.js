import {
    METHOD_GET, HEADERS_JSON_RECEIVE
} from '../constants/api';
import {apiHandleResponse} from '../../util/api';

const getNationalities = () => {
    return fetch('http://localhost:8088/api/Nationalities', {
        method: METHOD_GET,
        headers: HEADERS_JSON_RECEIVE,
    }).then(apiHandleResponse);
};

export {
    getNationalities,
};