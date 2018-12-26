import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import StudentEditPage from './StudentEditPage.jsx';

describe('components/pages/StudentEditPage/StudentEditPage', () => {
    let component, instance;

    const nationalitiesList = sinon.spy();
    const studentGet = sinon.spy();
    const studentCreate = sinon.spy();
    const studentUpdate = sinon.spy();    

    const shallowComponent = (props) => {
        return shallow(
            <StudentEditPage
                {...props}
                handleSubmit={(s) => s}
                nationalities= {[]}
                initialize={(s) => s}                
                actions= {{
                    nationalitiesList,
                    studentGet,
                    studentCreate,
                    studentUpdate,
                }}
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

    it('should call nationalitiesList while calling componentDidMount', () => {
        instance.componentDidMount();
        expect(nationalitiesList.called).to.equal(true);
    });

    it('should call studentGet while calling componentDidMount on Edit', () => {
        component.setProps({isEdit: true});
        instance.componentDidMount();
        expect(studentGet.called).to.equal(true);
    });

    it('should not save student if form is invalid', () => {
        component.setProps({invalid: true});
        instance.submit({});
        expect(studentCreate.called).to.equal(false);
        expect(studentUpdate.called).to.equal(false);
    });

    it('should save student if form is valid', () => {
        instance.submit({});
        expect(studentCreate.called).to.equal(true);
    });

    it('should update student if form is valid', () => {
        component.setProps({isEdit: true});
        instance.submit({});
        expect(studentUpdate.called).to.equal(true);
    });
});