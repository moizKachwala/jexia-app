import {reduxForm} from 'redux-form';

const validate = ({firstName, lastName}) => {
    const errors = {};

    if(!firstName) {
        errors.firstName = "Please enter fistName";
    }

    if(!lastName) {
        errors.lastName = "Please enter lastName";
    }

    return errors;
};

export default reduxForm({
    form: 'student-create',
    validate,
});
