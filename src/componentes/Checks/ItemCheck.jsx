import React from "react";

const ItemCheck= ({descripcion}) =>{
  return(
    <div className="m-3">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label className="form-check-label" htmlFor="flexCheckDefault">
        {descripcion}
        </label>
      </div>
    </div>
  )
}

export default ItemCheck