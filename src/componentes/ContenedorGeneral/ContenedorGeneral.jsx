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
import OffcanvasUniforme from "../offcanvas/offcanvasUniforme";
import C_azul from "../../assets/camisas/c-azul.png";
import C_negro from "../../assets/camisas/c-negro.png";
import { toast } from "react-toastify";
import addNotification from 'react-push-notification';
import './ContenedorGeneral.css'

var fecha = new Date();
var year = fecha.getFullYear();

const ContenedorGeneral = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [offcanvascronograma, setOffcanvasCronograma] = useState(false);

  const cronogramaClose = () => setOffcanvasCronograma(false);
  const cronogramacaShow = () => setOffcanvasCronograma(true);

  const [offcanvasuniforme, setOffcanvasUniforme] = useState(false);

  const uniformeClose = () => setOffcanvasUniforme(false);
  const uniformeShow = () => setOffcanvasUniforme(true);

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

  const date = new Date();
  const dia = date.getDay();
  var color =
    dia == 1 || dia == 3
      ? "Negro"
      : dia == 2 || dia == 5
      ? "Azul"
      : "Azul/Negro";

  var day = dia == 1 ? 'Lunes' : dia == 2 ? 'Martes' : dia == 3? 'Miercoles': dia == 4? 'Jueves' : 'Viernes';
  var ImgCamisa = dia == 1 ? C_azul : dia == 2 ? C_negro : dia == 3? C_azul: dia == 4? C_negro : C_azul;

  const imgN = <img src={C_negro} className="imgC"/>;
  const imgA = <img src={C_azul} className="imgC"/>;
  const imgNA = (
    <div className="d-flex justify-content-center">
      <div>
        <div className="border-bottom border-dark p-1">
          <img src={C_azul} className="imgNAA"/>
        </div>
        <div>
          <img src={C_negro} className="imgNAN"/>
        </div>
      </div>
    </div>
  );

  const noti = () => {

    const options = {
      title: day,
      message: `Hoy toca usar la camisa de color ${color == 'Azul' && day == 'Viernes'? `Azul/Negro`: color}`, //optional
      theme: 'red', //optional, default: undefined
     
      backgroundTop: 'green', //optional, background color of top container.
      backgroundBottom: 'darkgreen', //optional, background color of bottom container.
      colorTop: 'green', //optional, font color of top container.
      colorBottom: 'darkgreen', //optional, font color of bottom container.
      closeButton: 'Go away', //optional, text or html/jsx element for close text. Default: Close,
      native: true, //optional, makes the push notification a native OS notification
      icon: ImgCamisa, // optional, Native only. Sets an icon for the notification.
      vibrate: 1, // optional, Native only. Sets a vibration for the notification.
      
    }
  
    addNotification(options)
  }

  const [num , setNum] = useState(0)
  const toastId = React.useRef(null);
  
  const notify = async () => {
     await setNum(num + 1)
    
    if(! toast.isActive(toastId.current)) {
      toastId.current = toast(`Hoy toca usar una camisa de color ${color}`, {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        
        draggable: true,

        theme: "light",
        });
        
    }
    
    
  }
  const f = () => {
      
    setNum(num + 1)
   
  }

  setInterval( () => {
   // notify().then(console.log(num))
     
   }, 10000)
  

  return (
    <>
      {/*---------------------------- Comienzo Fix Derecha--------------------------- */}
      <div
        className="position-fixed z-ofc "
        style={{ marginTop: "20vh", right: "0px"}}
      >
        <div className="mb-3 h-75 " >
          <div className="mb-5 bg-light border border-dark h-100 d-flex justify-content-center align-items-center rounded-start p-2">
            <div className="text-center fw-bold">
              <div className="form-text text-dark ds">
                <span>Prox</span>
              </div>
              <div>
                {color == "Azul" ? imgA : color == "Negro" ? imgN : imgNA}

                <div className="form-text text-dark text-capitalize ds">
                  {color}
                </div>
              </div>
            </div>
          </div>
          <button type="button" onClick={f} className="btn btn-primary me-2">L {num}</button>

        </div>
        
 
      </div>
      {/*----------------------------Fin Fix Derecha--------------------------- */}
      {/*----------------------------Comienzo Fix izquierda--------------------------- */}
      <div className="position-fixed z-ofc" style={{ marginTop: "20vh" }}>
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
          <Button
            variant="primary"
            id="btn-la"
            onClick={uniformeShow}
            className="mb-1 border-r "
          >
            <span className="lbl-uniforme"></span>
          </Button>
        </div>
      </div>
      {/*----------------------------Comienzo Fix izquierda--------------------------- */}
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
      <OffcanvasUniforme
        offcanvasuniforme={offcanvasuniforme}
        uniformeClose={uniformeClose}
      ></OffcanvasUniforme>

      <Contenedor></Contenedor>
    </>
  );
};

export default ContenedorGeneral;
