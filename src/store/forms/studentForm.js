import {
    reduxForm
} from 'redux-form';

const validate = (student) => {
    const {
        firstName,
        lastName,
        dateOfBirth,
        nationality,
        familyMembers = []
    } = student;
    const errors = {};

    if (!firstName) {
        errors.firstName = "Please enter fistName";
    }

    if (!lastName) {
        errors.lastName = "Please enter lastName";
    }

    if (!dateOfBirth) {
        errors.dateOfBirth = "Please enter date of birth";
    }

    if (!nationality) {
        errors.nationality = "Please select nationality";
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
                nationality
            } = familyMember;

            if (!firstName) {
                errors['firstName'] = 'FirstName must not be empty.';
            }
            if (!lastName) {
                errors['lastName'] = 'LastName must not be empty.';
            }
            if (!dateOfBirth) {
                errors['dateOfBirth'] = 'Date of Birth must not be empty.';
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
    form: 'student',
    validate,
});
