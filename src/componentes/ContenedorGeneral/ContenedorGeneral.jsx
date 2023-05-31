import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "./ContenedorGeneral.css";
import { useState } from "react";
import {
  OffcanvasUniforme,
  LateralUniforme,
} from "../offcanvas/OffcanvasUniforme";
import NavBar from "../Navbar/Navbar";
import Offcanvascronograma from "../offcanvas/OffcanvasCronograma";
import OffcanvasNotas from "../offcanvas/OffcanvasNotas";
import Contenedor from "../contenedor/contenedor";
import Cookie from "universal-cookie";
import io from "socket.io-client";


import "./ContenedorGeneral.css";
const cookie = new Cookie();
const socket = io("http://localhost:3000", {autoConnect: false, query:{
  userID: cookie.get("id")
}});

const ContenedorGeneral = () => {
  
  const [login, setLogin] = useState("");


  const actuLogin = (datosLogin) => {
    setLogin(datosLogin);
  };


  return (
    <>
      <NavBar login={login} actuLogin={actuLogin} socket={socket}></NavBar>
      {/*---------------------------- Comienzo Fix Derecha--------------------------- */}
      <div
        className="position-fixed z-ofc "
        style={{ marginTop: "20vh", right: "0px" }}
      >
        <LateralUniforme></LateralUniforme>
        <div className="d-flex justify-content-end">
        <div className="d-grid" >
          <OffcanvasNotas></OffcanvasNotas>
          <Offcanvascronograma></Offcanvascronograma>
          <OffcanvasUniforme></OffcanvasUniforme>
          </div>
          </div>
      </div>
      {/*----------------------------Fin Fix Derecha--------------------------- */}
      {/*----------------------------Comienzo Fix izquierda--------------------------- */}
      <div className="position-fixed z-ofc" style={{ marginTop: "40vh" }}>
        
        <div className="d-grid ">
          
        </div>
        
      </div>
      {/*----------------------------Fin Fix izquierda--------------------------- */}
      
      <Contenedor cont={2} socket={socket}></Contenedor>
      
    </>
  );
};

export default ContenedorGeneral;
