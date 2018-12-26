import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import classnames from 'classnames';
import {DATE_FORMAT} from '../../../store/constants/date';

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
        this.props.input.onChange(moment(date).format(DATE_FORMAT));
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
                    placeholderText={placeholder}
                    dateFormat={DATE_FORMAT}
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