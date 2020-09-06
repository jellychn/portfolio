import React from 'react';
import cv from '../assets/cscv.PDF';

class Modal extends React.Component {
    render () {
        return (
            <div className='modal' onClick={this.props.closeModal} style={{display: this.props.modal ? 'block':'none'}}>
                <embed src={cv} type="application/pdf"/>
            </div>
        )
    }
}

export default Modal;