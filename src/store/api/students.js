import {METHOD_GET, HEADERS_JSON_SEND} from '../constants/api';
import {apiHandleResponse} from '../../util/api';

const getStudents = () => {
    return fetch('http://demo5103770.mockable.io/users', {
        method: METHOD_GET,
        headers:{ HEADERS_JSON_SEND }
    }).then(apiHandleResponse);
};

export {
    getStudents,
};