import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import C_azul from '../../assets/camisas/c-azul.png'
import C_negro from '../../assets/camisas/c-negro.png'

const offcanvasUniforme = ({ offcanvasuniforme, uniformeClose}) => {

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
 
  const imgN = <img src={C_negro} style={{width: '5rem', height: 'auto'}}/> 
  const imgA = <img src={C_azul} style={{width: '5rem', height: 'auto'}}/> 
  const imgNA = <div className="d-flex justify-content-end"><div><div className="border-bottom border-dark p-1"><img src={C_azul} style={{width: '4.5rem', height: 'auto'}}/></div><div><img src={C_negro} style={{width: '5rem', height: 'auto'}}/></div></div></div>
  return (
    <>
      <Offcanvas show={offcanvasuniforme} onHide={uniformeClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
           
              <span className="text-center">
              Calendario de Uniforme
              </span>
            
           
            </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <div>
              {dias.map((dia) => {
                return (
                  <div key={dia.id} className="nota d-flex justify-content-between align-items-center">
                    <div className="p-4 text-center ">
                    <div className="border border-dark shadow mb-5 fs-5 p-4 fw-bold"><label >{dia.dia}</label></div>
                    <div className={`border border-dark shadow mb-5 fs-5 p-4 fw-bold  ${dia.color == 'Azul'? 'bg-primary' : dia.color == "Negro"?  'bg-dark text-white' : 'bg-dark text-primary'}`}><label >{dia.color}</label></div>
                    </div>
                    <div className="d-flex justify-content-center aling-items-center me-4 border border-dark rounded p-4">

                      {dia.color == 'Azul/Negro' ? imgNA : dia.color = 'Azul'? imgA : imgN }
                     
             
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

export default offcanvasUniforme;
