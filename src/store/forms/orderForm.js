import {reduxForm} from 'redux-form';
import moment from 'moment';

export const validate = (values = {}, props = {}) => {
    const { firstName, lastName, dateOfBirth, nationality, familyMembers = []} = values;
    const errors = {};

    if (!firstName) {
        errors.firstName = "First Name must not be empty.";
    }

    if (!lastName) {
        errors.lastName = "Last Name must not be empty.";
    }

    if (!dateOfBirth) {
        errors.dateOfBirth = "Date of birth must not be empty.";
    }

    if (!nationality) {
        errors.nationality = "Nationality must not be empty.";
    }

    if (familyMembers.length === 0) {
        errors['familyMembers'] = {
            _error: 'You must have at least one family member.',
        };
    } else {
        errors['familyMembers'] = familyMembers.map((familyMember, index) => {
            const errors = {};

            const {
                firstName,
                lastName,
                dateOfBirth,
                relationship,
                nationality
            } = familyMember;

            if (!firstName) {
                errors['firstName'] = 'Firstname must not be empty.';
            }
            if (!lastName) {
                errors['lastName'] = 'Lastname must not be empty.';
            }
            if (!dateOfBirth) {
                errors['dateOfBirth'] = 'Date of birth must not be empty.';
            }
            if (!relationship) {
                errors['relationship'] = 'Relationship must not be empty.';
            }
            if (!nationality) {
                errors['nationality'] = 'Nationality must not be empty.';
            }
            return errors;
        });
    }

    return errors;
};

export default reduxForm({
    form: 'order',
    validate,
});
