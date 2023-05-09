import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import * as CheckServicio from "./CheckServicio";

const FormCheck = ({ close, cargarCheck, tipo }) => {
  const navigate = useNavigate();
  const params = useParams();

  const estadoInicial = {
    descripcion: "",
    tipo: tipo,
  };
  const [check, setCheck] = useState(estadoInicial);

  const tomarDatosCambio = (e) => {
    setCheck({ ...check, [e.target.name]: e.target.value });
  };

  const Envioform = async (e) => {
    e.preventDefault();

    if (!params.id) {
      const tid = toast.loading("Enviando...", {closeOnClick: true});
      await CheckServicio.crearCheck(check)
        .then(async () => {
          await cargarCheck();
        })
        .then(() => {
          close();
          toast.update(tid, {
            render: `Nuevo check añadido a ${
              tipo[0].toUpperCase() + tipo.substring(1)
            }`,
            type: "success",
            isLoading: false,
            autoClose: 1500,
            closeOnClick: true
          });
        });

      setCheck(estadoInicial);
    } else {
      await CheckServicio.ActulizarCheck(params.id, check).then(() => {
        setTimeout(() => {
          toast.success("Check actulizado");
          navigate("/myhome/");
        }),
          1000;
      });
    }
  };

  const tomarCheck = async (id) => {
    setCheck(estadoInicial);
    const res = await CheckServicio.tomarCheck(id);

    const datos = res.data;

    setCheck(datos);
  };

  useEffect(() => {
    setCheck(estadoInicial);

    if (params.id) tomarCheck(params.id);
  }, []);

  return (
    <div className="row w-100 align-items-top">
      {params.id ? <h3>Actualizar Proyectos</h3> : <></>}

      <form onSubmit={Envioform}>
        <div className="m-3">
          <div className="d-flex ">
            <label className="me-1">
              <strong>Tipo :</strong>
            </label>
            <input
              type="text"
              value={tipo[0].toUpperCase() + tipo.substring(1)}
              disabled
            />
          </div>
        </div>
        <div className="mb-3">
          <textarea
            name="descripcion"
            rows={3}
            className="form-control"
            onChange={tomarDatosCambio}
            value={check.descripcion}
            placeholder="Escribe una descripcion"
            required
          ></textarea>
        </div>

        <div className="mb-3 d-flex justify-content-end">
          {params.id ? (
            <button className="btn btn-secondary mb-3 ">
              Actualizar check
            </button>
          ) : (
            <button className="btn btn-secondary mb-3 ">Agregar check</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default FormCheck;
