import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {

    static propTypes = {
        label: PropTypes.string,
        placeholder: PropTypes.string,
        readonly: PropTypes.bool,
        input: PropTypes.shape({
            name: PropTypes.string,
            onChange: PropTypes.func,
        }),
        meta: PropTypes.shape({
            touched: PropTypes.bool,
            error: PropTypes.string,
        }),
    }

    static defaultProps = {
        type: "text"
    }

    render() {
        const { label, type, disabled, placeholder,
            input = {}, meta: { touched, error } } = this.props;
        return (
            <div className="form-group">
                <label>{label}</label>
                <input
                    {...input}
                    className="form-control"
                    placeholder={placeholder}
                    readOnly={disabled}
                    type={type}
                    autoComplete="off"
                />
                {touched && error && <span className="error text-danger">{error}</span>}
            </div>
        );
    }
}

export default TextInput;