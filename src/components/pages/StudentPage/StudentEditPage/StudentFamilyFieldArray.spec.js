import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import StudentFamilyFieldArray from './StudentFamilyFieldArray.jsx';

describe('components/pages/StudentEditPage/StudentFamilyFieldArray', () => {
    let component, instance;

    const shallowComponent = (props) => {
        return shallow(
            <StudentFamilyFieldArray
                {...props}
                fields={[]}
            />
        );
    };

    beforeEach(() => {
        component = shallowComponent();
        instance = component.instance();
    });
    
    it('should render without any error', () => {
        expect(component).to.exist;
    });

    it('should change state when delete begins', () => {
        instance.beginDelete((s) => s);
        expect(instance.state.deleting).to.be.true;
    });

    it('should change state when handleDeleteCancel is called', () => {
        instance.handleDeleteCancel();
        expect(instance.state.deleting).to.be.false;
    });
});