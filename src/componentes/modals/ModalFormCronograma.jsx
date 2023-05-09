import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormCrograma from "../Cronograma/FormCronogama";


export const ModalFormCronograma = ({cargarCronograma}) => {

  
  const [show, setShow] = useState(false);
    
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   


  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        Agregar Proyecto
      </Button>
    
      <Modal show={show} onHide={handleClose} animation={false} >
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
          
          <FormCrograma cargarCronograma={cargarCronograma} close={handleClose}></FormCrograma>
        </Modal.Body>
        
      </Modal>
    </div>
  );
};
