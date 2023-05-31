import { useEffect, useState } from "react";
import React from "react";
import * as CheckServicio from "./CheckServicio";
import ItemCheck from "./ItemCheck";
import { ModalFormCheck } from "../modals/ModalFormCheck";
import { Link } from "react-router-dom";
import './ListaCheck.css'

const ListaCheks = () => {
  const [checks, setChecks] = useState([]);

  const cargarCheck = async () => {
    const res = await CheckServicio.tomarChecks();
    const ordenCheck = res.data
      .map((check) => {
        return {
          ...check,
          createdAt: check.createdAt ? new Date(check.fechafin) : new Date(),
          updatedAt: check.updatedAt ? new Date() : new Date(),
        };
      })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    setChecks(ordenCheck);
  };

  useEffect(() => {
    cargarCheck();
  }, []);
  var i = 0;

  return (
    <>
    <div className="mb-1 cont-lcheck bg-dark-p">
      <div className="top-bar1 pb-2 ps-4 pt-4">
        <div className="d-flex">
          <Link to={'/myhome/'} className="link-map text-light hover-text-orange">Home</Link> 
          <i class="bi bi-chevron-compact-right"></i>

        </div>
        <div className="mt-3 text-orange">
        <span className="h2">Lista de cheks</span>
      </div>
      </div>
    <div className="w-100 border border-dark shadow p-4 bg-light h-100">
      
      <div className="accordion w-100" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed show text-center"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              <div className="w-100 font-weight-bold h5 ">Deporte</div>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="d-flex justify-content-end">
                <ModalFormCheck
                  tipo={"deporte"}
                  cargarCheck={cargarCheck}
                ></ModalFormCheck>
              </div>
              <hr className="border-4 w-100 mb-5" />
              {checks
                .filter((cheksf) => cheksf.tipo == "deporte")
                .map((check) => {
                  i++;

                  return (
                    <ItemCheck
                      cargarCheck={cargarCheck}
                      tipo={"deporte"}
                      id={check._id}
                      key={check._id}
                      descripcion={check.descripcion}
                      pos={i}
                    ></ItemCheck>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="accordion-item ">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed show text-center"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <div className="w-100 font-weight-bold h5">Hipismo</div>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="d-flex justify-content-end">
                <ModalFormCheck
                  tipo={"hipismo"}
                  cargarCheck={cargarCheck}
                ></ModalFormCheck>
              </div>
              <hr className="border-4 w-100 mb-5" />
              <div hidden>{(i = 0)} </div>

              {checks
                .filter((cheksf) => cheksf.tipo == "hipismo")
                .map((check) => {
                  i++;
                  return (
                    <ItemCheck
                      cargarCheck={cargarCheck}
                      tipo={"hipismo"}
                      key={check._id}
                      id={check._id}
                      descripcion={check.descripcion}
                      pos={i}
                    ></ItemCheck>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default ListaCheks;
