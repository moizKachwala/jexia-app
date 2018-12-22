import React, { Component } from 'react';
import { Field } from 'redux-form';

import { TextInput } from '../../../common/TextInput';
import { Button } from '../../../common/Button';

const FAMILY_TEMPLATE = {
    name: '',
    relationship: '',
    nationality: '',
};

class FamilyFieldArray extends Component {

    constructor() {
        super();
    }

    render() {
        const { fields, formValueSelector } = this.props;
        return (
            <div>
                <Button onClick={() => fields.push({...FAMILY_TEMPLATE})}>Create Family</Button>
                {
                    fields.map((member, index) => {
                        const id = formValueSelector(`${member}.id`);
                        const isNew = id === undefined;
                        return (
                            <div className="row" key={`${(id === undefined) ? index : id}`}>
                                <div className="col-md-3">
                                    <Field
                                        type="text"
                                        label="Name"
                                        name={`${member}.name`}
                                        component={TextInput}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <Field
                                        type="text"
                                        label="Relationship"
                                        name={`${member}.relationship`}
                                        component={TextInput}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <Field
                                        type="text"
                                        label="Nationality"
                                        name={`${member}.nationality`}
                                        component={TextInput}
                                    />
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default FamilyFieldArray;