import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormCrograma from "../Cronograma/FormCronogama";


export const ModalFormCheck = ({num}) => {

  
  const [show, setShow] = useState(false);
    
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   


  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        Añadir check {num}
      </Button>
    
      <Modal show={show} onHide={handleClose}  >
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
          
          <FormCrograma  close={handleClose}></FormCrograma>
        </Modal.Body>
        
      </Modal>
    </div>
  );
};
