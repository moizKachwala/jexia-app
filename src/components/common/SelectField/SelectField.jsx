import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class SelectField extends Component {

    static propTypes = {

        label: PropTypes.string.isRequired,

        value: PropTypes.string,

        disabled: PropTypes.bool,

        valid: PropTypes.bool,

        error: PropTypes.string,

        options: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.int,
            label: PropTypes.string.isRequired,
        })),
    };

    static defaultProps = {
        type: 'text',
        valid: true,
        error: null,
        disabled: false,
    };

    render() {
        const { options, label, disabled, meta: { touched, error } } = this.props;
        return (
            <div className={classnames('form-group', {
                'has-error': Boolean(touched && error),
            })}>
                <label>{label}</label>
                <select
                    {...this.props.input}
                    className="form-control"
                    disabled={disabled}
                >
                    <option value="">Select</option>
                    {options.map((opt, i) => (
                        <option key={`${opt}-${i}`} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
                {touched && error && <span className="error text-danger">{error}</span>}
            </div>
        );
    }
}

export default SelectField;
