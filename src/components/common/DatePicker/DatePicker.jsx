import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import classnames from 'classnames';
import { DATE_FORMAT } from '../../../store/constants/date';

import './DatePicker.scss';

const CustomDatePicker = ({ input, label, disabled, placeholder, defaultValue, meta: { touched, error } }) => (
    <div className={classnames('form-group', {
        'has-error': Boolean(touched && error),
    })}>
        <label>{label}</label>
        <DatePicker
            {...input}
            dateFormat={DATE_FORMAT}
            selected={input.value ? moment(input.value) : null}
            autoComplete="off"
            className="form-control"
            placeholderText={placeholder}
            disabled={disabled}
            showYearDropdown
        />
        {touched && error && <span>{error}</span>}
    </div>
);

export default CustomDatePicker;