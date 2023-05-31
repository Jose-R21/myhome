import React from "react";
import * as CronogramaServicio from "./CronogramaServicio";
import { useNavigate } from "react-router-dom";
import "./ItemCronograma.css";
import { toast } from "react-toastify";

const ItemCronograma = ({
  cronograma,
  cargarCronograma,
  fecha,
  closeoffcanvas,
}) => {
  const navigate = useNavigate();

  const eliminarCronograma = async (id) => {
    const tid = toast.loading("Eliminando...");
    await CronogramaServicio.eliminarCronograma(id)
      .then(async () => {
        await cargarCronograma();
      })
      .then(() => {
        toast.update(tid, {
          render: `Eliminado Proyecto del cronograma`,
          type: "success",
          isLoading: false,
          autoClose: 1500,
          closeOnClick: true,
        });
      });
  };

  const fechaEntrega1 = cronograma.fechaentrega.split("T");
  const fechaEntregarow = fechaEntrega1[0].split("-");
  const fechaEntregaDia = fechaEntregarow[2];
  const fechaEntregaMes = fechaEntregarow[1];

  const fechaInicio1 = cronograma.fechainicio.split("T");
  const fechaIniciorow = fechaInicio1[0].split("-");
  const fechaInicioDia = fechaIniciorow[2];
  const fechaInicioMes = fechaIniciorow[1];

  const fechaFin1 = cronograma.fechafin.split("T");
  const fechaFinrow = fechaFin1[0].split("-");
  const fechaFinDia = fechaFinrow[2];
  const fechaFinMes = fechaFinrow[1];

  if (
    Number(fecha[1]) < Number(fechaEntregaDia) &&
    Number(fecha[0]) <= Number(fechaEntregaMes)
  ) {
    var estado = "enproceso";
  } else {
    if( Number(fecha[1]) > Number(fechaEntregaDia) &&
        Number(fecha[0]) < Number(fechaEntregaMes)){
          var estado = "enproceso";
    }else{
      if (Number(fecha[0]) > Number(fechaFinMes)) {
        var estado = "cerrado";
      } else {
        if (Number(fecha[1]) > Number(fechaFinDia)) {
          var estado = "cerrado";
        } else {
          var estado = "activo";
        }
      }

    }

  }

  const navigateUpdate = async (id) => {
    await navigate(
      `/myhome/update/cronograma/${id}`,
      
    );
    closeoffcanvas()
  }

  return (
    <div className="nota shadow">
      <div className="contenido-nota">
        <div className={`cr p-1 ${estado} rounded`}>
          <div className="w-100">
          <label >
          <span style={{ color: "red" }}>*</span>
          
          <span className="text-uppercase">{cronograma.descripcion + "."}</span> </label>
          
          <br />
          </div>
          <div>
          <label className={`text-capitalize`}>
            Estado :{" "}
            <label className={`${estado == "cerrado" ? "text-danger" : estado == "activo"? "text-success" : "text-warning" }`}>
              {estado}
            </label>
          </label>
          <br />
          <label
            className={
              estado != "enproceso" ? "text-decoration-line-through" : ''
            }
          >
            {"Fecha de Entrega : " + fechaEntregaDia + "-" + fechaEntregaMes}
          </label>
          <br />
          <label
            className={
              estado == "activo" || estado == "enproceso" ? (
                ''
              ) : (
                "text-decoration-line-through"
              )
            }
          >
            {"Fecha de inicio: " + fechaInicioDia + "-" + fechaInicioMes}
          </label>
          <br />
          <label
            className={
              estado == "activo" || estado == "enproceso" ? (
                ''
              ) : (
                "text-decoration-line-through"
              )
            }
          >
            {"Fecha de Fin: " + fechaFinDia + "-" + fechaFinMes}
          </label>
          </div>
        </div>
      </div>
      <div className="cont-btn">
        <div className="nota-btn">
          <button
            type="button"
            className="btn "
            style={{ display: "contents" }}
            onClick={()=>navigateUpdate(cronograma._id)}
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
