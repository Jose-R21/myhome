import React from "react";
import "./Cronograma.css";
import ItemCronograma from "./ItemCronograma";
import { useEffect, useState } from "react";
const Cronograma = ({ cargarCronograma, cronogramas, closeoffcanvas, openoffcanvas }) => {
  useEffect(() => {
    cargarCronograma();
  });

  const date = new Date();

  const a = date.toLocaleDateString();
  const fecha = a.split("/");

  return (
    <>
      <div className="d-flex flex-wrap">
        <div className="d-flex justify-content-center w-100 pb-2">
          <h4>
            <u>Cronograma Marzo</u>
          </h4>
        </div>
        
        
            <b>
              <label className="cr">
                {cronogramas.map((cronograma) => {
                  return (
                    <ItemCronograma
                      cronograma={cronograma}
                      key={cronograma._id}
                      cargarNotas={cargarCronograma}
                      fecha={fecha}
                      closeoffcanvas={closeoffcanvas}
                      openoffcanvas={openoffcanvas}
                    ></ItemCronograma>
                  );
                })}
                 </label>
            </b>
           

        <div></div>
      </div>
    </>
  );
};

export default Cronograma;
