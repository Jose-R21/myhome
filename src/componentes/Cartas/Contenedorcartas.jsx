import React from "react";
import "./Contenedorcartas.css";
import { isInteger, number } from "mathjs";

const JCartas = () => {
  const cartas = [
    {
      id: 1,
      numero: 1,
      tipo: "COPA",
    },
    {
      id: 2,
      numero: 2,
      tipo: "COPA",
    },
    {
      id: 3,
      numero: 3,
      tipo: "COPA",
    },
    {
      id: 4,
      numero: 4,
      tipo: "COPA",
    },
    {
      id: 5,
      numero: 5,
      tipo: "COPA",
    },
    {
      id: 6,
      numero: 6,
      tipo: "COPA",
    },
    {
      id: 7,
      numero: 7,
      tipo: "COPA",
    },
    {
      id: 8,
      numero: 10,
      tipo: "COPA",
    },
    {
      id: 9,
      numero: 11,
      tipo: "COPA",
    },
    {
      id: 10,
      numero: 12,
      tipo: "COPA",
    },
    {
      id: 11,
      numero: 1,
      tipo: "ESPADA",
    },
    {
      id: 12,
      numero: 2,
      tipo: "ESPADA",
    },
    {
      id: 13,
      numero: 3,
      tipo: "ESPADA",
    },
    {
      id: 14,
      numero: 4,
      tipo: "ESPADA",
    },
    {
      id: 15,
      numero: 5,
      tipo: "ESPADA",
    },
    {
      id: 16,
      numero: 6,
      tipo: "ESPADA",
    },
    {
      id: 17,
      numero: 7,
      tipo: "ESPADA",
    },
    {
      id: 18,
      numero: 10,
      tipo: "ESPADA",
    },
    {
      id: 19,
      numero: 11,
      tipo: "ESPADA",
    },
    {
      id: 20,
      numero: 12,
      tipo: "ESPADA",
    },{
      id: 21,
      numero: 1,
      tipo: "ORO",
    },{
      id: 22,
      numero: 2,
      tipo: "ORO",
    },{
      id: 23,
      numero: 3,
      tipo: "ORO",
    },{
      id: 24,
      numero: 4,
      tipo: "ORO",
    },{
      id: 25,
      numero: 5,
      tipo: "ORO",
    },{
      id: 26,
      numero: 6,
      tipo: "ORO",
    },{
      id: 27,
      numero: 7,
      tipo: "ORO",
    },{
      id: 28,
      numero: 10,
      tipo: "ORO",
    },{
      id: 29,
      numero: 11,
      tipo: "ORO",
    },{
      id: 30,
      numero: 12,
      tipo: "ORO",
    },{
      id: 31,
      numero: 1,
      tipo: "BASTO",
    },{
      id: 32,
      numero: 2,
      tipo: "BASTO",
    },{
      id: 33,
      numero: 3,
      tipo: "BASTO",
    },{
      id: 34,
      numero: 4,
      tipo: "BASTO",
    },{
      id: 35,
      numero: 5,
      tipo: "BASTO",
    },{
      id: 36,
      numero: 6,
      tipo: "BASTO",
    },{
      id: 37,
      numero: 7,
      tipo: "BASTO",
    },{
      id: 38,
      numero: 10,
      tipo: "BASTO",
    },{
      id: 39,
      numero: 11,
      tipo: "BASTO",
    },{
      id: 40,
      numero: 12,
      tipo: "BASTO",
    },
  ];
  var cont = 0;

  


  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="w-100">
          <div>
            <div>
              <button type="button"  className="btn btn-primary">cartas</button>
            </div>

            <div className="container border border-dark shadow hw mt-5 d-flex justify-content-center align-items-top">
              <div className="mt-5 w-75 d-flex justify-content-center align-items-top">
                <div id="contenedor-cartas">
                {cartas.map((carta) =>{

                        return(
                          <div className="me-4 carta position-relative">
                                    
                          <div className="carta-header position-absolute top-0 end-0"><span>{carta.numero}</span></div>
                          <div className="carta-body position-absolute fs"><span>{carta.tipo === 'ESPADA'? '♦' : carta.tipo === 'COPA'? '♣' : carta.tipo === 'ORO'? '♥' : '♠'}</span></div>
                          <div className="carta-footer position-absolute bottom-0 start-0"><span>{carta.numero}</span></div>

                          </div>

                        )
                                  

} )}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JCartas;
