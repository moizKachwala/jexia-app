import {reduxForm} from 'redux-form';

const validate = ({bookName, pages}) => {
    const errors = {};

    if(!bookName) {
        errors.bookName = "Please enter bookName";
    }

    if(!pages) {
        errors.pages = "Please enter pages";
    }

    return errors;
};

export default reduxForm({
    form: 'book-create',
    validate,
});
