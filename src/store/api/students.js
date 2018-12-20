import {METHOD_GET} from '../constants/api';

const getStudents = () => {
    fetch('http://demo5103770.mockable.io/users', {
        method: METHOD_GET
    });
};

export {
    getStudents,
};