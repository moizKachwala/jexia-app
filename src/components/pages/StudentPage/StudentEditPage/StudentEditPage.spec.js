import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import StudentEditPage from './StudentEditPage.jsx';

describe('components/pages/StudentEditPage/StudentEditPage', () => {
    let component;

    const shallowComponent = (props) => {
        return shallow(
            <StudentEditPage
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