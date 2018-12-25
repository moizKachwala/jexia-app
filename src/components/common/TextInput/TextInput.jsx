import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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
            <div className={classnames('form-group', {
                'has-error': Boolean(touched && error),
            })}>
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