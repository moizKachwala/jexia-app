import React, {Component} from 'react';
import { Field } from 'redux-form';
import {noop} from 'lodash';

import {TextInput} from '../../../common/TextInput';
import {Button} from '../../../common/Button';

class StudentCreatePage extends Component {

    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    submit(props) {
        const {bookName, pages} = props;
        const {actions: {pushHistory, bookCreate}} = this.props;

        bookCreate({id:5, title: bookName, pages});
        alert(`Book ${bookName} saved successfully`);

        pushHistory('/books');
    }

    handleCancel() {
        const {actions: {pushHistory}} = this.props;
        pushHistory('/books');
    }

    render() {
        const {pristine, handleSubmit, submitting} = this.props;
        return (
            <form onSubmit={handleSubmit(props => this.submit(props))}>
                <h1>Add new Book</h1>
                <div className="col-md-6">
                    <Field 
                        type="text"
                        label="Book Name" 
                        component={TextInput} 
                        name="bookName"
                        placeholder="Book Name"
                    />
                    <Field
                        type="text"
                        label="Page Count"
                        component={TextInput}
                        name="pages"
                    />
                    <Button 
                        type="submit"
                        disabled={pristine || submitting} 
                        theme="primary"
                        onClick={noop}
                    >
                        Submit
                    </Button>
                    <Button
                        onClick={this.handleCancel}
                    >
                        Cancel 
                    </Button>
                </div>
            </form>
        );
    }
}

export default StudentCreatePage;
