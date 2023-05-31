import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Cronograma from "../Cronograma/Cronograma";
import * as CronogramaServicio from "../Cronograma/CronogramaServicio";
import { ModalFormCronograma } from "../modals/ModalFormCronograma";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'



const Offcanvascronograma = () =>{
  const [offcanvascronograma, setOffcanvasCronograma] = useState(false);

  const cronogramaClose = () => setOffcanvasCronograma(false);
  const cronogramacaShow = () => setOffcanvasCronograma(true);

  const [cronogramas, setCronogramas] = useState([]);

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

  return(
    <>
    <Button
            variant="primary"
            id="btn-la"
            onClick={cronogramacaShow}
            className="mb-1 border-r "
          >
           <FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon>
          </Button>
    <Offcanvas show={offcanvascronograma} onHide={cronogramaClose} className={'text-dark'}>
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
    </>
  )
}

export default Offcanvascronograma