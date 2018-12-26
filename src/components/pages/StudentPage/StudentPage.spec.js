import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import StudentPage from './StudentPage.jsx';

describe('components/pages/StudentPage.jsx', () => {
    let component, instance;
    const studentList = sinon.spy();
    const studentSelect = sinon.spy();

    const shallowComponent = (props) => {
        return shallow( <
            StudentPage 
                {...props}
            />
        );
    };

    beforeEach(() => {
        component = shallowComponent({
            actions: {
                studentList,
                studentSelect,
            }
        });
        instance = component.instance();
    });

    it('should render without any error', () => {
        expect(component).to.exist;
    });

    it('should call componentDidMount', () => {
        instance.componentDidMount();
        expect(studentList.called).to.equal(true);
    });

    it('should change state when handleShow is called', () => {
        instance.handleShow();
        expect(instance.state.show).to.be.true;
    });

    it('should change state when handleClose is called', () => {
        instance.handleClose();
        expect(instance.state.show).to.be.false;
    });

    it('should call selectStudent', () => {
      instance.selectStudent();
      expect(studentSelect.called).to.equal(true);
    });
});
