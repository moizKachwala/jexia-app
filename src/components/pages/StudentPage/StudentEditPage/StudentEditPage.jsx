import React, { Component } from 'react';
import { Field, FieldArray } from 'redux-form';
import { noop } from 'lodash';
import {createSelector} from 'reselect';

import DatePicker from "react-datepicker";
import moment from 'moment';
import { TextInput } from '../../../common/TextInput';
import { Button } from '../../../common/Button';
import FamilyFieldArray from './StudentFamilyFieldArray.jsx';
import CustomDatePicker from '../../../common/DatePicker/DatePicker.jsx';
import SelectField from '../../../common/SelectField/SelectField.jsx';

class StudentEditPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            startDate: moment(),
        };

        this.submit = this.submit.bind(this);

        this.selectInitialize = createSelector(
            (props) => props.initialValues,
            (initialValues) => {
                const {initialize} = this.props;
                initialize({...initialValues});
            }
        );
    }

    componentDidMount() {
        const {actions: {studentGet, nationalitiesList}, isEdit, studentId} = this.props;
        if(isEdit) {
            studentGet(studentId);
        }
        nationalitiesList();
        this.selectInitialize(this.props);
    }

    componentDidUpdate() {
        this.selectInitialize(this.props);
    }

    componentWillUnmount() {
        const {actions} = this.props;
        actions.studentsReset();
    }

    submit(props) {
        const { ID, firstName, lastName, dateOfBirth, nationality, familyMembers } = props;
        const { actions: { studentCreate, studentUpdate },  isEdit} = this.props;

        if(isEdit) {
            studentUpdate(ID, { ID, firstName, lastName, dateOfBirth, nationality, familyMembers });
        }
        else {
            studentCreate({ firstName, lastName, dateOfBirth, nationality, familyMembers });
        }
    }

    render() {
        const { 
            pristine, handleSubmit, submitting, 
            handleCancel, formValueSelector, nationalities, hasEditRights, isEdit
        } = this.props;

        const allowEdit = ((isEdit && hasEditRights) || !isEdit);
        return (
            <form onSubmit={handleSubmit(props => this.submit(props))}>
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

                    <div className="col-md-6">
                        <Field
                            label="Date of birth"
                            component={CustomDatePicker}
                            name="dateOfBirth"
                            placeholder="Date of birth"
                            disabled={!allowEdit}
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
                    />
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Button
                            type="submit"
                            disabled={pristine || submitting}
                            theme="primary"
                            onClick={noop}
                        >
                            Submit
                        </Button>
                        <Button
                            onClick={handleCancel}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </form>
        );
    }
}

export default StudentEditPage;
