import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import App from './App.jsx';

describe('src/components/App.jsx', () => {
    let component, instance;

    const shallowComponent = (props) => {
        return shallow( 
            <App {...props} />
        );
    };

    it('should render without any error', () => {
        expect(component).to.exist;
    });
});
