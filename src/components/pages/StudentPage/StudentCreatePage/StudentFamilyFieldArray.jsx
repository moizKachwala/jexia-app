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

    renderFamilyMember(member, index) {
        const {formValueSelector, fields} = this.props;
        const id = formValueSelector(`${member}.id`);
        const isNew = id === undefined;
        let handleDeleteClick;
        handleDeleteClick = () => {
            fields.remove(index);

            // const name = formValueSelector(`${member}.name`);
            // if (isNew) {
            //     const description = formValueSelector(`${member}.description`);
            //     const value = formValueSelector(`${member}.value`);
            //     if (!name && !description && !value) {
            //         fields.remove(index);
            //         return;
            //     }
            // }
            // this.beginDelete(() => fields.remove(index), name);
        };
        return (
            <div className="row" key={`${(id === undefined) ? index : id}`}>
                <div className="col-md-3">
                    <Field
                        type="text"
                        label="Name"
                        name={`${member}.name`}
                        component={TextInput}
                        placeholder="Name"
                    />
                </div>
                <div className="col-md-3">
                    <Field
                        type="text"
                        label="Relationship"
                        name={`${member}.relationship`}
                        component={TextInput}
                        placeholder="Name"
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
                <div className="col-md-3">
                <span className="family-item-remover"
                    onClick={handleDeleteClick}
                >Delete</span>
                </div>
            </div>
        );
    }

    render() {
        const { fields, formValueSelector } = this.props;
        return (
            <div>
                <Button onClick={() => fields.push({...FAMILY_TEMPLATE})}>Add Family Member</Button>
                {fields.map((member, index) => this.renderFamilyMember(member, index))}
            </div>
        );
    }
}

export default FamilyFieldArray;