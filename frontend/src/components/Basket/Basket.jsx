import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import './Basket.scss'

function Basket({isOpen, closeModal}) {
    return (
        <Modal show={isOpen} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Заголовок модального окна</Modal.Title>
            </Modal.Header>
            <Modal.Body>Текст внутри модального окна...</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Basket;
