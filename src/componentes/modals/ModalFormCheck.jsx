import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormCheck from '../Checks/FormCheck'


export const ModalFormCheck = ({tipo, cargarCheck}) => {

  
  const [show, setShow] = useState(false);
    
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   
  

  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        Añadir check {tipo[0].toUpperCase()+tipo.substring(1)}
      </Button>
    
      <Modal show={show} onHide={handleClose}  >
        <Modal.Header closeButton>
        <Modal.Title> <h5>Agregar Check {tipo[0].toUpperCase()+tipo.substring(1)}</h5></Modal.Title> 
        </Modal.Header>
        
        <Modal.Body>
          
          <FormCheck  close={handleClose} cargarCheck={cargarCheck} tipo={tipo}></FormCheck>
          
        </Modal.Body>
        
      </Modal>
    </div>
  );
};
