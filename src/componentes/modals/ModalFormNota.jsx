import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormNota from "../Notas/FormNota";

export const ModalFormNota = ({cargarNotas}) => {

  
  const [show, setShow] = useState(false);
    
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   


  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        Agregar Nota
      </Button>
    
      <Modal show={show} onHide={handleClose} animation={false} >
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
          <FormNota cargarNotas={cargarNotas} close={handleClose}></FormNota>
        </Modal.Body>
        
      </Modal>
    </div>
  );
};
