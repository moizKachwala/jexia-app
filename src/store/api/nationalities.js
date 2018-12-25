import {
    METHOD_GET, HEADERS_JSON_RECEIVE, SERVER_URL
} from '../constants/api';
import {apiHandleResponse} from '../../util/api';

const getNationalities = () => {
    return fetch(`${SERVER_URL}/api/Nationalities`, {
        method: METHOD_GET,
        headers: HEADERS_JSON_RECEIVE,
    }).then(apiHandleResponse);
};

export {
    getNationalities,
};