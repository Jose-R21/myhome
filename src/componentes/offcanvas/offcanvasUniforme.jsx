import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import C_azul from "../../assets/camisas/c-azul.png";
import C_negro from "../../assets/camisas/c-negro.png";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faTShirt } from '@fortawesome/free-solid-svg-icons'

  




export const OffcanvasUniforme = () => {
  library.add(fab, faCheckSquare, faCoffee, faTShirt)
  const [offcanvasuniforme, setOffcanvasUniforme] = useState(false);

  const uniformeClose = () => setOffcanvasUniforme(false);
  const uniformeShow = () => setOffcanvasUniforme(true);

  const dias = [
    {
      id: "1",
      dia: "Lunes",
      color: "Azul",
    },
    {
      id: "2",
      dia: "Martes",
      color: "Negro",
    },
    {
      id: "3",
      dia: "Miercoles",
      color: "Azul",
    },
    {
      id: "4",
      dia: "Jueves",
      color: "Negro",
    },
    {
      id: "5",
      dia: "Viernes",
      color: "Azul/Negro",
    },
  ];

  const imgN = <img src={C_negro} style={{ width: "5rem", height: "auto" }} />;
  const imgA = <img src={C_azul} style={{ width: "5rem", height: "auto" }} />;
  const imgNA = (
    <div className="d-flex justify-content-end">
      <div>
        <div className="border-bottom border-dark p-1">
          <img src={C_azul} style={{ width: "4.5rem", height: "auto" }} />
        </div>
        <div>
          <img src={C_negro} style={{ width: "5rem", height: "auto" }} />
        </div>
      </div>
    </div>
  );
  return (
    <>
      <Button
        variant="primary"
        id="btn-la"
        onClick={uniformeShow}
        className="mb-1 border-r "
      >
       <FontAwesomeIcon icon={faTShirt} />
      </Button>
      <Offcanvas show={offcanvasuniforme} onHide={uniformeClose} className={'text-dark'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <span className="text-center">Calendario de Uniforme</span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <div>
              {dias.map((dia) => {
                return (
                  <div
                    key={dia.id}
                    className="nota d-flex justify-content-between align-items-center"
                  >
                    <div className="p-4 text-center ">
                      <div className="border border-dark shadow mb-5 fs-5 p-4 fw-bold">
                        <label>{dia.dia}</label>
                      </div>
                      <div
                        className={`border border-dark shadow mb-5 fs-5 p-4 fw-bold  ${
                          dia.color == "Azul"
                            ? "bg-primary"
                            : dia.color == "Negro"
                            ? "bg-dark text-white"
                            : "bg-dark text-primary"
                        }`}
                      >
                        <label>{dia.color}</label>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center aling-items-center me-4 border border-dark rounded p-4">
                      {dia.color == "Azul/Negro"
                        ? imgNA
                        : (dia.color = "Azul" ? imgA : imgN)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export const LateralUniforme = () => {
  var fecha = new Date();
  var year = fecha.getFullYear();

  const date = new Date();
  const dia = date.getDay();
  var color =
    dia == 1 || dia == 3
      ? "Negro"
      : dia == 2 || dia == 5
      ? "Azul"
      : "Azul/Negro";

  var day =
    dia == 1
      ? "Lunes"
      : dia == 2
      ? "Martes"
      : dia == 3
      ? "Miercoles"
      : dia == 4
      ? "Jueves"
      : "Viernes";
  var ImgCamisa =
    dia == 1
      ? C_azul
      : dia == 2
      ? C_negro
      : dia == 3
      ? C_azul
      : dia == 4
      ? C_negro
      : C_azul;

  const imgN = <img src={C_negro} className="imgC" />;
  const imgA = <img src={C_azul} className="imgC" />;
  const imgNA = (
    <div className="d-flex justify-content-center">
      <div>
        <div className="border-bottom border-dark p-1">
          <img src={C_azul} className="imgNAA" />
        </div>
        <div>
          <img src={C_negro} className="imgNAN" />
        </div>
      </div>
    </div>
  );
  return (
    <>
      <div className="mb-3 h-75 ">
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
      </div>
    </>
  );
};
