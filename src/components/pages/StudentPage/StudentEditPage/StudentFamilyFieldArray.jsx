import React, { Component } from 'react';
import { Field } from 'redux-form';

import { TextInput } from '../../../common/TextInput';
import { Button } from '../../../common/Button';
import CustomDatePicker from '../../../common/DatePicker/DatePicker.jsx';
import SelectField from '../../../common/SelectField/SelectField.jsx';
import {Confirm} from '../../../common/Confirm';

const FAMILY_TEMPLATE = {
    firstName: '',
    lastName: '',
    relationship: '',
    dateOfBirth: '',
    nationality: '',
};

const relationshipOptions = ['Parent', 'Sibling', 'Spouse'];

class FamilyFieldArray extends Component {

    constructor() {
        super();

        this.state = {
            deleting: false,
            onDelete: null,
        };

        this.beginDelete = this.beginDelete.bind(this);
        this.handleDeleteCancel = this.handleDeleteCancel.bind(this);
        this.handleDeleteConfirm = this.handleDeleteConfirm.bind(this);
    }

    beginDelete(onDelete) {
        this.setState({
            deleting: true,
            onDelete,
        });
    }

    handleDeleteCancel() {
        this.setState({
            deleting: false,
            onDelete: null,
        });
    }

    handleDeleteConfirm() {
        const {deleting, onDelete} = this.state;
        if (deleting && onDelete) {
            onDelete();
        }
        this.setState({
            deleting: false,
            onDelete: null,
        });
    }

    renderConfirmDialog() {
        const {deleting} = this.state;
        const confirmTitle = 'Delete Family Member';
        const confirmMessage = 'Are you sure you want to delete this family member?';

        return (
            <Confirm
                title={confirmTitle}
                show={deleting}
                onHide={this.handleDeleteCancel}
                onAccept={this.handleDeleteConfirm}
            >
                {confirmMessage}
            </Confirm>
        );
    }

    renderFamilyMember(member, index) {
        const { formValueSelector, fields, nationalities, allowEdit } = this.props;
        const id = formValueSelector(`${member}.id`);
        const isNew = id === undefined;
        let handleDeleteClick;
        handleDeleteClick = () => {
            this.beginDelete(() => fields.remove(index), name);
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
                        disabled={!allowEdit}
                    />
                </div>
                <div className="col-md-4">
                    <Field
                        type="text"
                        label="Last Name"
                        name={`${member}.lastName`}
                        component={TextInput}
                        placeholder="Last Name"
                        disabled={!allowEdit}
                    />
                </div>
                <div className="col-md-4">
                    <Field
                        label="Date of birth"
                        component={CustomDatePicker}
                        name={`${member}.dateOfBirth`}
                        placeholder="Date of birth"
                        disabled={!allowEdit}
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
                        disabled={!allowEdit}
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
                        disabled={!allowEdit}
                    />
                </div>
                {allowEdit && (
                    <div className="col-md-4">
                        <span className="btn btn-danger"
                            onClick={handleDeleteClick}
                        >Delete</span>
                    </div>
                )}
            </div>
        );
    }

    render() {
        const { fields, formValueSelector, allowEdit } = this.props;
        return (
            <div className="col-md-12">
                {this.renderConfirmDialog()}
                <div className="row">
                    <div className="col-md-6 pull-right">
                        <Button theme="primary" disabled={!allowEdit} onClick={() => fields.push({ ...FAMILY_TEMPLATE })}>Add Family Member</Button>
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