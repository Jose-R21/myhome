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

import "./ContenedorGeneral.css";

const ContenedorGeneral = () => {
  const [login, setLogin] = useState("");

  const actuLogin = (datosLogin) => {
    setLogin(datosLogin);
  };

  return (
    <>
      <NavBar login={login} actuLogin={actuLogin}></NavBar>
      {/*---------------------------- Comienzo Fix Derecha--------------------------- */}
      <div
        className="position-fixed z-ofc "
        style={{ marginTop: "20vh", right: "0px" }}
      >
        <LateralUniforme></LateralUniforme>
      </div>
      {/*----------------------------Fin Fix Derecha--------------------------- */}
      {/*----------------------------Comienzo Fix izquierda--------------------------- */}
      <div className="position-fixed z-ofc" style={{ marginTop: "20vh" }}>
        <div className="d-grid ">
          <OffcanvasNotas></OffcanvasNotas>
          <Offcanvascronograma></Offcanvascronograma>
          <OffcanvasUniforme></OffcanvasUniforme>
        </div>
      </div>
      {/*----------------------------Fin Fix izquierda--------------------------- */}

      <Contenedor cont={2}></Contenedor>
    </>
  );
};

export default ContenedorGeneral;
