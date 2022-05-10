import React from 'react'
import { Modal } from '@mui/material';
import "./ModalContainer.scss"

export default function ModalContainer(props) {
    const { isOpenModal, closeModal, children } = props;

    return (
        <Modal
            className="modal-container"
            open={isOpenModal}
            onClose={closeModal}
            closeAfterTransition
        >
            <div className='modal'>{children}</div>
        </Modal>
    )
}
