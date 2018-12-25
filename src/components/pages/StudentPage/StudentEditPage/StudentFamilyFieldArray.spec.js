import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import StudentFamilyFieldArray from './StudentFamilyFieldArray.jsx';

describe('components/pages/StudentEditPage/StudentFamilyFieldArray', () => {
    let component;

    const shallowComponent = (props) => {
        return shallow(
            <StudentFamilyFieldArray
                {...props}
            />
        );
    };

    beforeEach(() => {
        component = shallowComponent();
    });
    
    it('should render without any error', () => {
        expect(component).to.exist;
    });
});