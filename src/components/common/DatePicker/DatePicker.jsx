import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import classnames from 'classnames';

import './DatePicker.scss';

class CustomDatePicker extends Component {
    static propTypes = {
        input: PropTypes.shape({
            onChange: PropTypes.func.isRequired,
            value: PropTypes.string.isRequired,
        }).isRequired,
        meta: PropTypes.shape({
            touched: PropTypes.bool,
            error: PropTypes.string,
        }),
        placeholder: PropTypes.string,
    }

    static defaultProps = {
        placeholder: '',
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.props.input.onChange(moment(date).format('MM-DD-YYYY'));
    }

    render() {
        const {
            input, placeholder, label, disabled,
            meta: { touched, error }
        } = this.props;

        return (
            <div className={classnames('form-group', {
                'has-error': Boolean(touched && error),
            })}>
                <label>{label}</label>
                <DatePicker
                    className="form-control"
                    {...input}
                    placeholder={placeholder}
                    dateFormat="MM-DD-YYYY"
                    selected={input.value ? moment(input.value) : null}
                    onChange={this.handleChange}
                    autoComplete="off"
                    showYearDropdown
                    scrollableYearDropdown
                    disabled={disabled}
                />
                {touched && error && <span className="error text-danger">{error}</span>}
            </div>
        );
    }
}

export default CustomDatePicker;