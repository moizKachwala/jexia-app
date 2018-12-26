import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import {
    TextInput, Button, CustomDatePicker,
    SelectField, Confirm
} from '../../../common';

const FAMILY_TEMPLATE = {
    firstName: '',
    lastName: '',
    relationship: '',
    dateOfBirth: '',
    nationality: '',
};

const relationshipOptions = ['Parent', 'Sibling', 'Spouse'];

class FamilyFieldArray extends Component {

    static propTypes = {
        allowEdit: PropTypes.bool,
        nationalities: PropTypes.array,
    }

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
        const { deleting, onDelete } = this.state;
        if (deleting && onDelete) {
            onDelete();
        }
        this.setState({
            deleting: false,
            onDelete: null,
        });
    }

    renderConfirmDialog() {
        const { deleting } = this.state;
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
        const id = formValueSelector(`${member}.ID`);
        const isNew = id === undefined;
        let handleDeleteClick;
        handleDeleteClick = () => {
            if (isNew) {
                const firstName = formValueSelector(`${member}.firstName`);
                const lastName = formValueSelector(`${member}.lastName`);
                const dateOfBirth = formValueSelector(`${member}.dateOfBirth`);
                if (!firstName && !lastName && !dateOfBirth) {
                    fields.remove(index);
                    return;
                }
            }
            this.beginDelete(() => fields.remove(index), name);
        };
        return (
            <div className="studenteditpage-family-item" key={`${(id === undefined) ? index : id}`}>
                <div className="row">
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
                    <div className="col-md-3">
                        <Field
                            label="Date of birth"
                            component={CustomDatePicker}
                            name={`${member}.dateOfBirth`}
                            placeholder="Date of birth"
                            disabled={!allowEdit}
                        />
                    </div>
                    {allowEdit && (
                        <span className="studenteditpage-familylist-item-remover">
                            <button onClick={handleDeleteClick} type="button" className="close" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </span>
                    )}
                </div>
                <div className="row">
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
                </div>
            </div>
        );
    }

    render() {
        const { fields, formValueSelector, allowEdit } = this.props;
        return (
            <div className="col-md-12">
                {this.renderConfirmDialog()}
                <div className="studenteditpage-family-item-list">
                    <label>Family Member(s)</label>
                    {
                        (fields.length === 0) && (
                            <div className="alert alert-danger">Atleast one family member is required!</div>
                        )
                    }
                    {fields.map((member, index) => this.renderFamilyMember(member, index))}
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <button
                            type="button"
                            onClick={() => fields.push({ ...FAMILY_TEMPLATE })}
                            disabled={!allowEdit}
                            className="btn btn-link"
                        >
                           + Add Family Member
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default FamilyFieldArray;