import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import ListaNotas from "../Notas/ListaNotas";
import * as NotaServicio from "../Notas/NotaServicio";
import { ModalFormNota } from "../modals/ModalformNota";


const OffcanvasNotas = () => {
  const [show, setShow] = useState(false);

  const [notas, setNotas] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cargarNotas = async () => {
    const res = await NotaServicio.tomarNotas();

    const ordenNota = res.data
      .map((nota) => {
        return {
          ...nota,
          createdAt: nota.createdAt ? new Date(nota.createdAt) : new Date(),
          updatedAt: nota.updatedAt ? new Date(nota.updatedAt) : new Date(),
        };
      })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    setNotas(ordenNota);
  };

  return (
    <>
      <Button
        variant="primary"
        id="btn-la"
        onClick={handleShow}
        className="mb-1 border-r"
      >
        <i className="bi bi-card-list"></i>
      </Button>

      <Offcanvas show={show} onHide={handleClose} className={'text-dark'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
          <ModalFormNota cargarNotas={cargarNotas}></ModalFormNota>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListaNotas
            notas={notas}
            cargarNotas={cargarNotas}
            closeoffcanvas={handleClose}
            openoffcanvas={handleShow}
          ></ListaNotas>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffcanvasNotas;
