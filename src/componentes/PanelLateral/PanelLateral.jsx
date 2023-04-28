import React from "react";
import './PanelLateral.css'
import ListaNotas from '../Notas/ListaNotas'



const PanelLateral = () => {
  
  return (
    
      <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary ">
        <div className="col align-self-start pl p-3">
          <ListaNotas ></ListaNotas>
        </div>
      </div>
    
  );
};

export default PanelLateral