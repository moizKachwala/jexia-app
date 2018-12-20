import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {

    static propTypes = {
        label: PropTypes.string,
        placeholder: PropTypes.string,
        readonly: PropTypes.bool,
        input: PropTypes.shape({
            name: PropTypes.string,
            onChange: PropTypes.func,
        })
    }

    static defaultProps = {
        type: "text"
    }

    render() {
        const {label, type, readOnly, placeholder, input ={}} = this.props;
        const {name: inputName, onChange} = input;
        return (
            <div className="form-group">
                <label>{label}</label>
                <input
                    type={type}
                    readOnly={readOnly}
                    placeholder={placeholder}
                    className="form-control"
                    name={inputName}
                    onChange={onChange}
                />
            </div>
        );
    }
}

export default TextInput;
