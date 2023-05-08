import { useEffect, useState } from "react";
import React from "react";
import * as CheckServicio from './CheckServicio'
import ItemCheck from './ItemCheck'
import { ModalFormCheck } from "../modals/ModalFormCheck";



const ListaCheks = () => {

  const [checks, setChecks] = useState([]);

const cargarCheck = async () => {
  const res = await CheckServicio.tomarChecks();
  const ordenCheck = res.data
    .map((check) => {
      return {
        ...check,
        createdAt: check.createdAt
          ? new Date(check.fechafin)
          : new Date(),
        updatedAt: check.updatedAt ? new Date() : new Date(),
      };
    })
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

  setChecks(ordenCheck);
};


useEffect(() => {
  cargarCheck()
}, [])


  return (

    <>  
    <div className="accordion w-100" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Deporte
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <div className="d-flex justify-content-end">
       
        <ModalFormCheck num={1}></ModalFormCheck>
        </div>
      {checks.filter((cheksf) => cheksf.tipo == 'deporte').map((check) => {
        return(
          
          <ItemCheck 
          key={check._id}
          descripcion={check.descripcion}>

        </ItemCheck>
        )
        
      })}
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed show" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Hipismo
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div className="d-flex justify-content-end">
        <ModalFormCheck num={2}></ModalFormCheck>

        </div>
      {checks.filter((cheksf) => cheksf.tipo == 'hipismo').map((check) => {
        return(
          
          <ItemCheck 
          key={check._id}
          descripcion={check.descripcion}>

        </ItemCheck>
        )
        
      })}
       </div>
    </div>
  </div>
  
</div>


    </>
  );
};

export default ListaCheks;
