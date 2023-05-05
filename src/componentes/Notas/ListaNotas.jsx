import { useEffect, useState } from "react";
import * as NotaServicio from "./NotaServicio";
import ItemNota from "./ItemNota";

const ListaVideos = (props) => {
  useEffect(() => {
    
    props.cargarNotas();
  });

  return (

    <div className="d-flex flex-wrap">
      <div className="d-flex justify-content-center w-100 pb-2">
        <h4>
          <u>Notas</u>
        </h4>
      </div>
       
      {props.notas.map((nota) => {

        return (
          <ItemNota
            nota={nota}
            key={nota._id}
            cargarNotas={props.cargarNotas}
            num={props.num}
            closeoffcanvas={props.closeoffcanvas}
            openoffcanvas={props.openoffcanvas}
          ></ItemNota>
        );
      })}
    </div>
  );
};

export default ListaVideos;
