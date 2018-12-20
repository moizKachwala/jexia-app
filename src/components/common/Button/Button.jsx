import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {noop} from 'lodash';

class Button extends Component {
    static propTypes = {
        size: PropTypes.string,
        disabled: PropTypes.bool,
        type: PropTypes.oneOf(['button', 'submit']),
        theme: PropTypes.string,
        onClick: PropTypes.func.isRequired,
    }

    static defaultProps = {
        theme: 'default',
        type: 'button',
        disabled: false,
    }
    
    render() {
        const {children, disabled, theme, onClick, type} = this.props;
        return (
            <button 
                className={classnames('btn', `btn-${theme}`)}
                disabled={disabled}
                onClick={onClick ? onClick : noop}
                type={type}
            >
                {children}
            </button>
        );
    }
}

export default Button;