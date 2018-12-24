import {reduxForm} from 'redux-form';

const validate = ({firstName, lastName, dateOfBirth, nationality}) => {
    const errors = {};

    if(!firstName) {
        errors.firstName = "Please enter fistName";
    }

    if(!lastName) {
        errors.lastName = "Please enter lastName";
    }

    if(!dateOfBirth) {
        errors.dateOfBirth = "Please enter date of birth";
    }

    if(!nationality) {
        errors.nationality = "Please select nationality";
    }

    return errors;
};

export default reduxForm({
    form: 'student-create',
    validate,
});
