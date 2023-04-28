import React from "react";
import "./Cronograma.css";

const Cronograma = () => {
  return (
    <>
      <div className="d-flex flex-wrap">
        <div className="d-flex justify-content-center w-100 pb-2">
          <h4>
            <u>Cronograma Marzo</u>
          </h4>
        </div>
        <div className="nota">
          <div className="contenido-nota">
            <b>
              <label>
               
                <label className="cr activo">
                  {" "}
                  <b style={{ color: "red" }}>* </b>Coppa Italia (Semifinal
                  vuelta) - 25 y 26 abril
                </label>
                <label className="cr enproceso">
                  {" "}
                  <b style={{ color: "red" }}>* </b>(06.05.2023) corre el
                  Kentucky Derby, en Churchill Downs, primero de la triple
                  corona de USA, es un especial de mil (1.000) USD a repartir y
                  apuesta mínima el doblé
                </label>
                <label className="cr enproceso">
                  {" "}
                  <b style={{ color: "red" }}>* </b>SUNDAY BEISBALL PROMO MLB -
                  7/05/2203 (cada domingo)
                </label>
                <label className="cr enproceso">
                  {" "}
                  <b style={{ color: "red" }}>* </b>CHAMPIONS LEAGUE PARTIDOS DE
                  IDA SEMIFINAL 9 Y 10 DE MARZO
                </label>
              </label>
            </b>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cronograma;
