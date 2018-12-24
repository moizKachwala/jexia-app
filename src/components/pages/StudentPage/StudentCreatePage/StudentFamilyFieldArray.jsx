import React, { Component } from 'react';
import { Field } from 'redux-form';

import { TextInput } from '../../../common/TextInput';
import { Button } from '../../../common/Button';
import CustomDatePicker from '../../../common/DatePicker/DatePicker.jsx';
import SelectField from '../../../common/SelectField/SelectField.jsx';

const FAMILY_TEMPLATE = {
    name: '',
    relationship: '',
    nationality: '',
};

const relationshipOptions = ['Parent', 'Sibling', 'Spouse'];

class FamilyFieldArray extends Component {

    constructor() {
        super();
    }

    renderFamilyMember(member, index) {
        const { formValueSelector, fields, nationalities } = this.props;
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
                <div className="col-md-4">
                    <Field
                        type="text"
                        label="First Name"
                        name={`${member}.firstName`}
                        component={TextInput}
                        placeholder="First Name"
                    />
                </div>
                <div className="col-md-4">
                    <Field
                        type="text"
                        label="Last Name"
                        name={`${member}.lastName`}
                        component={TextInput}
                        placeholder="Last Name"
                    />
                </div>
                <div className="col-md-4">
                    <Field
                        label="Date of birth"
                        component={CustomDatePicker}
                        name={`${member}.dateOfBirth`}
                        placeholder="Date of birth"
                    />
                </div>
                <div className="col-md-4">
                    <Field
                        label="Relationship"
                        component={SelectField}
                        options={relationshipOptions.map((relationship) => ({
                            label: relationship,
                            value: relationship,
                        }))}
                        name={`${member}.relationship`}
                        placeholder="Relationship"
                    />
                </div>
                <div className="col-md-4">
                    <Field
                        label="Nationality"
                        component={SelectField}
                        options={nationalities.map((nationality) => ({
                            label: nationality.Title,
                            value: nationality.ID,
                        }))}
                        name={`${member}.nationality`}
                        placeholder="Nationality"
                    />
                </div>
                <div className="col-md-4">
                    <span className="btn btn-danger"
                        onClick={handleDeleteClick}
                    >Delete</span>
                </div>
            </div>
        );
    }

    render() {
        const { fields, formValueSelector } = this.props;
        return (
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-6 pull-right">
                        <Button theme="primary" onClick={() => fields.push({ ...FAMILY_TEMPLATE })}>Add Family Member</Button>
                    </div>
                </div>
                <div>
                    {fields.map((member, index) => this.renderFamilyMember(member, index))}
                </div>
            </div>
        );
    }
}

export default FamilyFieldArray;