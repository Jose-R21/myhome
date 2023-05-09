import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import * as NotaServicio from "./NotaServicio";

const FormNota = ({ cargarNotas, close}) => {
  const navigate = useNavigate();
  const params = useParams();

  const estadoInicial = {
    descripcion: "",
  };
  const [nota, setNota] = useState(estadoInicial);

  const tomarDatosCambio = (e) => {
    setNota({ ...nota, [e.target.name]: e.target.value });
  };

  const Envioform = async (e) => {
    e.preventDefault();

    if (!params.id) {
      const tid = toast.loading("Enviando...", {closeOnClick: true});
      await NotaServicio.crearNota(nota)
        .then(async () => {
          await cargarNotas();
        })
        .then(() => {close(); 
          toast.update(tid, {
          render: `Nueva nota añadida a la lista`,
          type: "success",
          isLoading: false,
          autoClose: 1500,
          closeOnClick: true
        }); });
     // toast.success("Nueva Nota agregado");

      setNota(estadoInicial);
    } else {
      const tid = toast.loading("Actualizando...", {closeOnClick: true});
      await NotaServicio.ActulizarNota(params.id, nota).then(() => {
        toast.update(tid, {
          render: `Nota actualizada`,
          type: "success",
          isLoading: false,
          autoClose: 1500,
          closeOnClick: true
        });
        navigate('/myhome/')
      });
    }
  };

  const tomarNota = async (id) => {
    const res = await NotaServicio.tomarNota(id);
    const { descripcion } = res.data;
    setNota({ descripcion });
  };

  useEffect(() => {
    setNota(estadoInicial);

    if (params.id) tomarNota(params.id);
  }, []);

  return (
    <div className="row w-100 align-items-top">
      <div className="">
        <div className="card ">
          <div className="card-body">
            {params.id ? <h3>Actualizar Nota</h3> : <h3>Nueva Nota</h3>}

            <form onSubmit={Envioform}>
              <div className="mb-3">
                <textarea
                  name="descripcion"
                  rows={3}
                  className="form-control"
                  onChange={tomarDatosCambio}
                  value={nota.descripcion}
                  placeholder="Escribe una descripcion"
                ></textarea>
              </div>
              <div className="mb-3 d-flex justify-content-end">
                {params.id ? (
                  <button className="btn btn-secondary mb-3 ">
                    Actualizar Nota
                  </button>
                ) : (
                  <button className="btn btn-secondary mb-3 ">
                    Crear Nota
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

export default FormNota;
