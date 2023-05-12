import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import './FormCronograma.css'

import * as CronogramaServicio from "./CronogramaServicio";

const FormCrograma = ({ cargarCronograma, close }) => {
  const navigate = useNavigate();
  const params = useParams();

  const estadoInicial = {
    descripcion: "",
    fechaentrega: "",
    fechainicio: "",
    fechafin: ""
  };
  const [cronograma, setCronograma] = useState(estadoInicial);

  const tomarDatosCambio =  (e) => {
    setCronograma({ ...cronograma, [e.target.name]: e.target.value });

  };

  const Envioform = async (e) => {
    e.preventDefault();

    if (!params.id) {
      const tid = toast.loading("Enviando...", {closeOnClick: true});
      await CronogramaServicio.crearCronograma(cronograma)
        .then(async () => {
          await cargarCronograma();
        })
        .then(() => {close(); 
          toast.update(tid, {
          render: `Nuevo proyecto añadido al cronograma `,
          type: "success",
          isLoading: false,
          autoClose: 1500,
          closeOnClick: true
        }); setCronograma(estadoInicial); }).catch(error => { toast.update(tid, {
          render: `Error: ${error.response.data.mensaje} `,
          type: "error",
          isLoading: false,
          autoClose: 1500,
          closeOnClick: true
        }); });
     // toast.success("");

      
    } else {
      const tid = toast.loading("Enviando...", {closeOnClick: true});
      await CronogramaServicio.ActulizarCronograma(params.id, cronograma).then( () => {
        toast.update(tid, {
          render: `Proyecto del cronograma actulizado`,
          type: "success",
          isLoading: false,
          autoClose: 1500,
          closeOnClick: true
        });
        navigate('/myhome/')
      })
    }
  };
 
  const tomarCronograma = async (id) => {
    setCronograma(estadoInicial);
    const res = await CronogramaServicio.tomarCronograma(id);
    
    const crono = await  res.data;
    const fechaentregarow = await crono.fechaentrega.split('T')
    const fechainiciorow = await crono.fechainicio.split('T')
    const fechafinrow = await crono.fechafin.split('T')

    const fechaentrega1 = await  fechaentregarow[0]
    const fechainicio1 = await fechainiciorow[0]
    const fechafin1 = await fechafinrow[0]
    const descripcion1 = await crono.descripcion 

    const datos = { descripcion: descripcion1, fechaentrega: fechaentrega1, fechainicio: fechainicio1, fechafin: fechafin1}
    
    insertarcronograma(datos)
  };

  const insertarcronograma = (datos) =>{


    setCronograma(datos);
  } 

  useEffect(() => {
    setCronograma(estadoInicial);

    if (params.id) tomarCronograma(params.id);
  }, []);

  return (
    <div className="row w-100 align-items-top">
      <div className="">
        <div className="card ">
          <div className="card-body">
            {params.id ? <h3>Actualizar Proyecto</h3> : <h3>Nuevo Proyecto</h3>}

            <form onSubmit={Envioform}>
              <div className="mb-3">
                <textarea
                  name="descripcion"
                  rows={3}
                  className="form-control"
                  onChange={tomarDatosCambio}
                  value={cronograma.descripcion}
                  placeholder="Escribe una descripcion"
                  required
                ></textarea>
              </div>
              <div className="mb-3">
              <div className="d-flex justify-content-evenly">
                <div className="ms-1 text-center w-33">
                  <label className="mb-2">Fecha de Entrega</label>
              <input className="form-control " type="date" name="fechaentrega" value={cronograma.fechaentrega} onChange={tomarDatosCambio}  required/>
              </div>
              <div className="ms-1 text-center w-33">
                  <label className="mb-2">Fecha de Inicio</label>
              <input className="form-control " type="date" name="fechainicio" value={cronograma.fechainicio} onChange={tomarDatosCambio} required/>
              </div>
              <div className="ms-1 text-center w-33">
                  <label className="mb-2">Fecha de Fin</label>
              <input className="form-control " type="date" name="fechafin" value={cronograma.fechafin} onChange={tomarDatosCambio} required/>
              </div>
                </div>
                
              </div>
              <div className="mb-3 d-flex justify-content-end">
                {params.id ? (
                  <button className="btn btn-secondary mb-3 ">
                    Actualizar Proyecto
                  </button>
                ) : (
                  <button className="btn btn-secondary mb-3 ">
                   Agregar Proyecto
                  </button>
                )}
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCrograma;
