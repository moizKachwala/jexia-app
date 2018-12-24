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
        const {label, type, readOnly, placeholder, input = {}} = this.props;
        return (
            <div className="form-group">
                <label>{label}</label>
                <input 
                    {...input}
                    className="form-control"
                    placeholder={placeholder}
                    readOnly={readOnly}
                    type={type}
                />
            </div>
        );
    }
}

export default TextInput;

// import React from 'react';
// export const TextInput = ({ label, input }) => {
//   return (
//     <div>
//       <div>
//         {label}
//       </div>
//       <div>
//         <input {...input} placeholder={label} type="text" />
//       </div>
//     </div>
//   );
// }
// export default TextInput;