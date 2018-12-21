import React, { Component } from 'react';
import { Field } from 'redux-form';
import { noop } from 'lodash';

import { TextInput } from '../../../common/TextInput';
import { Button } from '../../../common/Button';

class StudentCreatePage extends Component {

    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);

        this.state = {
            familyMembers: [],
        };
    }

    submit(props) {
        const { firstName, lastName, dateOfBirth, nationality } = props;
        const { actions: { studentCreate } } = this.props;

        studentCreate({ firstName, lastName, dateOfBirth, nationality });
        alert(`Book ${firstName} saved successfully`);
    }

    render() {
        const { pristine, handleSubmit, submitting, handleCancel } = this.props;
        return (
            <form onSubmit={handleSubmit(props => this.submit(props))}>
                <div className="row">
                    <div className="col-md-12">
                        <Field
                            type="text"
                            label="First Name"
                            component={TextInput}
                            name="firstName"
                            placeholder="First Name"
                        />
                        <Field
                            type="text"
                            label="Last Name"
                            component={TextInput}
                            name="lastName"
                            placeholder="Last Name"
                        />
                        <Field
                            type="text"
                            label="Date of birth"
                            component={TextInput}
                            name="dateOfBirth"
                            placeholder="Date of birth"
                        />
                        <Field
                            type="text"
                            label="Nationality"
                            component={TextInput}
                            name="nationality"
                            placeholder="Nationality"
                        />
                    </div>
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

export default StudentCreatePage;
