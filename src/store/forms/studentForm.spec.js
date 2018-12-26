import {expect} from 'chai';

import {validate} from './studentForm';

describe('src/forms/studentForm.js', () => {

    it('validate if general information is empty', () => {
        const empty = validate({}, {});
        expect(empty.firstName).to.eql('First Name must not be empty.');
        expect(empty.lastName).to.eql('Last Name must not be empty.');
        expect(empty.dateOfBirth).to.eql('Date of birth must not be empty.');
        expect(empty.nationality).to.eql('Nationality must not be empty.');
        expect(empty.familyMembers._error).to.eql('You must have at least one family member.');
    });
});
