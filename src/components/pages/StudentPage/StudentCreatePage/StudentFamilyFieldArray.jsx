import React, {Component} from 'react';

class FamilyFieldArray extends Component {

    constructor() {
        super();

        this.renderFields = this.renderFields.bind(this);
    }

    renderFields() {
        return (
            <div>
                moiz
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderFields()}
            </div>
        )
    }
}