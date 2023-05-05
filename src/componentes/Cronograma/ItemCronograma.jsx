import React from "react";

import * as CronogramaServicio from "./CronogramaServicio";

import { useNavigate } from "react-router-dom";
import './ItemCronograma.css'


const ItemCronograma = ({ cronograma, cargarCronograma, fecha, closeoffcanvas }) => {
  const navigate = useNavigate();

  const eliminarCronograma = async (id) => {
    await CronogramaServicio.eliminarCronograma(id);
    
  };

  
  const fechaEntrega1 = cronograma.fechaentrega.split('T');
  const fechaEntregarow = fechaEntrega1[0].split('-');
  const fechaEntregaDia = fechaEntregarow[2];
  const fechaEntregaMes = fechaEntregarow[1];

  

  const fechaInicio1 = cronograma.fechainicio.split('T');
  const fechaIniciorow = fechaInicio1[0].split('-');
  const fechaInicioDia = fechaIniciorow[2];
  const fechaInicioMes = fechaIniciorow[1];

  const fechaFin1 = cronograma.fechafin.split('T');
  const fechaFinrow = fechaFin1[0].split('-');
  const fechaFinDia = fechaFinrow[2];
  const fechaFinMes = fechaFinrow[1];
  

  return (
    <div className="nota">
      <div className="contenido-nota">
    
        <div
          className={`cr p-1 ${Number(fecha[0])  < Number(fechaEntregaDia) && Number(fecha[1]) <= Number(fechaEntregaMes) ? 'enproceso' : Number(fecha[1]) > Number(fechaFinMes) ? 'cerrado' :  Number(fecha[0]) > Number(fechaFinDia)? `cerrado` : 'activo' }`}>
          
          <b style={{ color: "red" }}>* </b>{cronograma.descripcion+'.'} <br />
          <label>{'Fecha de Entrega : '+ fechaEntregaDia+'-'+fechaEntregaMes}</label><br />
          <label>{'Fecha de inicio: '+fechaInicioDia+'-'+fechaInicioMes }</label><br />
          <label>{'Fecha de Fin: '+fechaFinDia+'-'+fechaFinMes }</label>
        </div>

      </div>
      <div className="cont-btn">
        <div className="nota-btn">
          <button
            type="button"
            className="btn "
            style={{ display: "contents" }}
            onClick={async () => {
              await navigate(`/update/cronograma/${cronograma._id}`, closeoffcanvas());
            }}
          >
            <i className="bi bi-three-dots"></i>
          </button>
        </div>
        <div className="nota-btn">
          <button
            type="button"
            className="btn "
            style={{ display: "contents" }}
            onClick={() => cronograma._id && eliminarCronograma(cronograma._id)}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
      
    </div>
  );
};
export default ItemCronograma;
