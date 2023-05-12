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
import {getAuth, signInAnonymously} from  'firebase/auth'
import { getToken, onMessage  } from 'firebase/messaging';
import {messaging} from '../../firebase'
import { toast } from "react-toastify";
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




const loguear = () =>{
  signInAnonymously(getAuth()).then((usuario) => {console.log(usuario.user.uid)}).catch(error => console.log('error al autenticar'))
}
const activarMensajes = async () => {
  const token = await getToken(messaging, {vapidKey:'BCI614C0FAYu4jSi3xayvBMq1U9Z4hGMPV2x5j9a1xZEdvfIW7_D_MCPxnJOnGgeo2v6ctJ2KBWbzu7_HPrAaiE'}).catch(error => console.log('error en el token'))
  
  if(token) console.log('token:',token)
  if(!token) console.log('error:',token)  
}

const noti = async () =>{
 await loguear()

 await  activarMensajes()

 
} 

useEffect(()=>{
  
  onMessage(messaging, message => {
  console.log('tu mensaje:',message)
  toast(`Titulo: ${message.notification.title}`)
  toast(`Body: ${message.notification.body}`)
   })

   setTimeout(() => {
    noti()
   }, 5000)

   },[])


  const date = new Date();
  const dia = date.getDay();
  var color =
    dia == 1 || dia == 3
      ? "Negro"
      : dia == 2 || dia == 5
      ? "Azul"
      : "azul/negro";

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
          <button type="button" onClick={loguear} className="btn btn-primary me-2">L</button>
          <button type="button" onClick={activarMensajes} className="btn btn-primary">M</button>
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
