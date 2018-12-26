import React, { Component } from 'react';
import { Field, FieldArray } from 'redux-form';
import { noop } from 'lodash';
import { createSelector } from 'reselect';
import moment from 'moment';
import PropTypes from 'prop-types';

import { TextInput, Button, CustomDatePicker, SelectField } from '../../../common';
import FamilyFieldArray from './StudentFamilyFieldArray.jsx';
import {formatDateForInput} from '../../../../util/date';

import './StudentEditPage.scss';

class StudentEditPage extends Component {

    static propTypes = {
        hasEditRights: PropTypes.bool,
        handleCancel: PropTypes.func,
        handleCallback: PropTypes.func,
    }

    constructor(props) {
        super(props);

        this.state = {
            startDate: moment(),
        };

        this.submit = this.submit.bind(this);

        this.selectInitialize = createSelector(
            (props) => props.initialValues,
            (initialValues) => {
                const { initialize } = this.props;
                initialize({ ...initialValues });
            }
        );
    }

    componentDidMount() {
        const { actions: { studentGet, nationalitiesList }, isEdit, studentId } = this.props;
        if (isEdit) {
            studentGet(studentId);
        }
        nationalitiesList();
        this.selectInitialize(this.props);
    }

    componentDidUpdate() {
        this.selectInitialize(this.props);
    }

    componentWillUnmount() {
        const { actions } = this.props;
        actions.studentsReset();
    }

    submit(form) {
        const { ID } = form;
        const {
            isEdit, invalid, pristine, handleCallback,
            actions: { studentCreate, studentUpdate },
        } = this.props;

        if (pristine || invalid) {
            return;
        }

        if (isEdit) {
            studentUpdate(ID, form, handleCallback);
        }
        else {
            studentCreate(form, handleCallback);
        }
    }

    render() {
        const {
            pristine, handleSubmit, submitting, studentGetPending,
            handleCancel, formValueSelector, nationalities, hasEditRights, isEdit, invalid
        } = this.props;

        const allowEdit = ((isEdit && hasEditRights) || !isEdit);
        const pageTitle = isEdit ? 'Edit Student' : 'Add Student';

        return (
            <form onSubmit={handleSubmit(props => this.submit(props))}>
                <div className="studenteditpage">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>{pageTitle}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Field
                                type="text"
                                label="First Name"
                                component={TextInput}
                                name="firstName"
                                placeholder="First Name"
                                disabled={!allowEdit}
                            />
                        </div>
                        <div className="col-md-6">
                            <Field
                                type="text"
                                label="Last Name"
                                component={TextInput}
                                name="lastName"
                                placeholder="Last Name"
                                disabled={!allowEdit}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Field
                                label="Date of birth"
                                component={CustomDatePicker}
                                name="dateOfBirth"
                                placeholder="Date of birth"
                                disabled={!allowEdit}
                                format={formatDateForInput}
                            />
                        </div>
                        <div className="col-md-6">
                            <Field
                                label="Nationality"
                                component={SelectField}
                                options={nationalities.map((nationality) => ({
                                    label: nationality.Title,
                                    value: nationality.ID,
                                }))}
                                name="nationality"
                                placeholder="Nationality"
                                disabled={!allowEdit}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <FieldArray
                            name="familyMembers"
                            component={FamilyFieldArray}
                            formValueSelector={formValueSelector}
                            nationalities={nationalities}
                            allowEdit={allowEdit}
                            studentGetPending={studentGetPending}
                        />
                    </div>

                    <div className="row">
                        <hr />
                        <div className="col-md-3 pull-right">
                            <Button
                                type="submit"
                                disabled={pristine || submitting || invalid}
                                theme="primary"
                                onClick={noop}
                            >
                                Save Changes
                        </Button>&nbsp;
                            <Button
                                onClick={handleCancel}
                            >
                                Close
                        </Button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default StudentEditPage;
