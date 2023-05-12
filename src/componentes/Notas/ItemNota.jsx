import React from "react";

import * as NotaServicio from "./NotaServicio";
import "./ItemNota.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ItemNota = ({ nota, cargarNotas, closeoffcanvas, openoffcanvas }) => {
  const navigate = useNavigate();

  const eliminarNota = async (id) => {
    const tid = toast.loading("Eliminando...");
    await NotaServicio.eliminarNota(id)
      .then(async () => {
        await cargarNotas();
      })
      .then(() => {
        toast.update(tid, {
          render: `Nota eliminada`,
          type: "success",
          isLoading: false,
          autoClose: 1500,
          closeOnClick: true,
        });
      });
  };

  return (
    <div className="nota shadow">
      <div className="contenido-nota">
        <b>
          <p>
            <b style={{ color: "red" }}>* </b>
            {nota.descripcion}
          </p>
        </b>
      </div>
      <div className="cont-btn">
        <div className="nota-btn">
          <button
            type="button"
            className="btn "
            style={{ display: "contents" }}
            onClick={async () => {
              await navigate(`/myhome/update/nota/${nota._id}`, closeoffcanvas());
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
            onClick={() => nota._id && eliminarNota(nota._id)}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ItemNota;
