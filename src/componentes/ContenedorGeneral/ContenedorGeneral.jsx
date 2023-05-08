import React, { useEffect } from "react";
import PanelLateral from "../PanelLateral/PanelLateral";
import Contenedor from "../contenedor/contenedor";
import "react-toastify/dist/ReactToastify.css";
import "./ContenedorGeneral.css";
import { useNavigate } from "react-router-dom";
import { ModalFormNota } from "../modals/ModalformNota";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import ListaNotas from "../Notas/ListaNotas";
import { evaluate } from "mathjs";
import * as NotaServicio from "../Notas/NotaServicio";
import Cronograma from "../Cronograma/Cronograma";
import * as CronogramaServicio from "../Cronograma/CronogramaServicio";
import { ModalFormCronograma } from "../modals/ModalFormCronograma";

var fecha = new Date();
var year = fecha.getFullYear();

const ContenedorGeneral = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [offcanvascronograma, setOffcanvasCronograma] = useState(false);

  const cronogramaClose = () => setOffcanvasCronograma(false);
  const cronogramacaShow = () => setOffcanvasCronograma(true);

  const [notas, setNotas] = useState([]);
  const [cronogramas, setCronogramas] = useState([]);

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

  const cargarCronograma = async () => {
    const res = await CronogramaServicio.tomarCronogramas();

    const ordenCronograma = res.data
      .map((cronograma) => {
        return {
          ...cronograma,
          createdAt: cronograma.createdAt
            ? new Date(cronograma.fechafin)
            : new Date(),
          updatedAt: cronograma.updatedAt ? new Date() : new Date(),
        };
      })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    setCronogramas(ordenCronograma);
  };

  return (
    <>
      <div className="position-fixed" style={{ marginTop: "40vh" }}>
        <div className="d-grid ">
          <Button
            variant="primary"
            id="btn-la"
            onClick={handleShow}
            className="mb-1 border-r"
          >
            <span className="lbl-nota"></span>
          </Button>
          <Button
            variant="primary"
            id="btn-la"
            onClick={cronogramacaShow}
            className="mb-1 border-r "
          >
            <span className="lbl-cronograma"></span>
          </Button>
        </div>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
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
      <Offcanvas show={offcanvascronograma} onHide={cronogramaClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
          <ModalFormCronograma
            cargarCronograma={cargarCronograma}
          ></ModalFormCronograma>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Cronograma
            cronogramas={cronogramas}
            cargarCronograma={cargarCronograma}
            closeoffcanvas={cronogramaClose}
            openoffcanvas={cronogramacaShow}
          ></Cronograma>
        </Offcanvas.Body>
      </Offcanvas>
      <Contenedor></Contenedor>
    </>
  );
};

export default ContenedorGeneral;
