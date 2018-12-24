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

        /**
         * Select drop down options
         */
        options: PropTypes.arrayOf(PropTypes.shape({
            /**
             * option value
             */
            value: PropTypes.int,
            /**
             * Visible option label
             */
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
        const { options, label, disabled } = this.props;
        return (
            <div className="form-group">
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
            </div>
        );
    }
}

export default SelectField;
