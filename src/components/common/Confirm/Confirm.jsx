import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {Modal} from 'react-bootstrap';
import Button from '../Button/Button.jsx';

class Confirm extends Component {

    static propTypes = {
        
        title: PropTypes.string,
        
        show: PropTypes.bool,
        
        onHide: PropTypes.func,
        
        onAccept: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
        
        labelCancel: PropTypes.string,
        
        labelAccept: PropTypes.string,
    }

    static defaultProps = {
        labelCancel: 'Cancel',
        labelAccept: 'Delete',
    }

    render() {
        const {title, show, onHide, onAccept, labelCancel, labelAccept, children} = this.props;        
        return (
            <Modal
            show={show}
            onHide={onHide}
            >
                <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>{children}</Modal.Body>

                <Modal.Footer>
                <Button onClick={onHide}>{labelCancel}</Button>
                <Button theme="danger" onClick={onAccept}>{labelAccept}</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default Confirm;
