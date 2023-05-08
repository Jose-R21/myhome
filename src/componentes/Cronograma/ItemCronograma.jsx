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
  
  if(Number(fecha[1])  < Number(fechaEntregaDia) && Number(fecha[0]) <= Number(fechaEntregaMes)){
      var estado = 'enproceso'
  }else{
    if(Number(fecha[0]) > Number(fechaFinMes)){
      var estado = 'cerrado'
    }else{
      if(Number(fecha[1]) > Number(fechaFinDia)){
        var estado = 'cerrado'
      }else{
        var estado = 'activo'
      }
    }
    
  }
  
 
  return (
    <div className="nota">
      <div className="contenido-nota">
    
        <div
          className={`cr p-1 ${estado}`}>
          
          <b style={{ color: "red" }}>* </b> <span className="text-uppercase">{cronograma.descripcion+'.'}</span>   <br />
          

          <label className={`text-capitalize`}>Estado : <span className={`${estado != 'cerrado' ? <></>: 'text-danger'}`}>{estado}</span></label><br />
          <label className={estado != 'enproceso' ? 'text-decoration-line-through': <></>}>{'Fecha de Entrega : '+ fechaEntregaDia+'-'+fechaEntregaMes}</label><br />
          <label className={estado != 'activo'? 'text-decoration-line-through' : <></>}>{'Fecha de inicio: '+fechaInicioDia+'-'+fechaInicioMes }</label><br />
          <label className={estado != 'activo'? 'text-decoration-line-through' : <></>}>{'Fecha de Fin: '+fechaFinDia+'-'+fechaFinMes }</label>
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
