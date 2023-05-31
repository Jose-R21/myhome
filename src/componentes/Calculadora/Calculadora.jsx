import React, { useEffect } from "react";
import Select from "react-select";
import { useState } from "react";
import { evaluate } from "mathjs";
import "./Calculadora.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import batata from "../../assets/cultivos/batata.webp";
import berenjena from "../../assets/cultivos/berenjena.webp";
import calabaza from "../../assets/cultivos/calabaza.webp";
import cebolla from "../../assets/cultivos/cebolla.webp";
import col from "../../assets/cultivos/col.webp";
import espinaca from "../../assets/cultivos/espinaca.webp";
import fresa from "../../assets/cultivos/fresa.webp";
import maiz from "../../assets/cultivos/maiz.webp";
import nabo from "../../assets/cultivos/nabo.webp";
import papa from "../../assets/cultivos/papa.webp";
import pepino from "../../assets/cultivos/pepino.webp";
import pimenton from "../../assets/cultivos/pimenton.webp";
import pina from "../../assets/cultivos/pina.webp";
import tomate from "../../assets/cultivos/tomate.webp";
import zanahoria from "../../assets/cultivos/zanahoria.webp";
import dog from "../../assets/cultivos/dog.png";

const Calculadora = ({cont}) => {
  const [tipo, setTipo] = useState("0");
  const [nivel, setNivel] = useState("1");
  const [valor, setValor] = useState("0");
  const [img, setImg] = useState("dog");
  const tomarTipo = (e) => {
    var pb = e.target.value.split("-");

    setImg(pb[1]);

    setTipo(pb[0]);
  };
  const tomarNivel = (e) => {
    const nivel = e.target.value;
    setNivel(nivel);
  };
  const Total = () => {
    if (nivel != "") {
      setValor(tipo + "*" + nivel + "*" + nivel);
    }
  };
  /*validar img */
  if (img == "nabo") {
    var imgNabo = <img src={nabo} alt="nabo" />;
  }
  if (img == "batata") {
    var imgNabo = <img src={batata} alt="batata" />;
  }
  if (img == "berenjena") {
    var imgNabo = <img src={berenjena} alt="berenjena" />;
  }
  if (img == "calabaza") {
    var imgNabo = <img src={calabaza} alt="calabaza" />;
  }
  if (img == "cebolla") {
    var imgNabo = <img src={cebolla} alt="cebolla" />;
  }
  if (img == "col") {
    var imgNabo = <img src={col} alt="col" />;
  }
  if (img == "espinaca") {
    var imgNabo = <img src={espinaca} alt="espinaca" />;
  }
  if (img == "fresa") {
    var imgNabo = <img src={fresa} alt="fresa" />;
  }
  if (img == "maiz") {
    var imgNabo = <img src={maiz} alt="maiz" />;
  }
  if (img == "papa") {
    var imgNabo = <img src={papa} alt="papa" />;
  }
  if (img == "pepino") {
    var imgNabo = <img src={pepino} alt="pepino" />;
  }
  if (img == "pimenton") {
    var imgNabo = <img src={pimenton} alt="pimenton" />;
  }
  if (img == "pina") {
    var imgNabo = <img src={pina} alt="pina" />;
  }
  if (img == "tomate") {
    var imgNabo = <img src={tomate} alt="tomate" />;
  }
  if (img == "zanahoria") {
    var imgNabo = <img src={zanahoria} alt="zanahoria" />;
  }
  if (img == "dog") {
    var imgNabo = <img src={dog} alt="dog" />;
  }
  
  let { state } = useLocation()

  /*imagenes */

  return (
    <>
    <div className="top-bar1 pb-2 ps-4 pt-4">
        <div className="d-flex ">
        <Link to={'/myhome/'} className="link-map text-light hover-text-orange">Home</Link> 
        <i class="bi bi-chevron-compact-right"></i>
          <Link to={'/myhome/calculadora/'} className="link-map text-light hover-text-orange">Calculadora</Link> 
          <i class="bi bi-chevron-compact-right"></i>

        </div>
        <div className="mt-3 text-orange">
        <span className="h2">Calculadora</span>
      </div>
      </div>

    <div className="container cont-100vh  pt-5 bg-dark-p ">
      <div className="w-100 bg-dark-p  d-flex justify-content-center align-items-top">
      <div className="row align-items-top wm-100 text-dark">
        <div className="card sh-cd">
          <div className="card-body m-1 ">
            <div className="row mb-5">
              <div className="p-2 m-2 d-flex justify-content-around m600-block">
                <div className="">
                  <div className="text-center">Cultivo</div>
                  <div className="dm">
                    <div className="w-100">
                    <select onChange={tomarTipo} className="w-100 form-control">
                    <option value="0-dog">--- Primavera ---</option>
                    <option value="60-nabo">Nabo- C4 - N/A</option>
                      <option value="80-papa">Papa - C7 - N/A</option>
                      <option value="60-fresa">Fresa - C9 - C2</option>
                      <option value="60-pepino" >Pepino - C9 - C5</option>
                      <option value="250-col">Col - C14 - N/A</option>
                      <option value="0-dog" >--- Verano ---</option>
                      <option value="80-cebolla">Cebolla - C7 - N/A</option>
                      <option value="60-tomate">Tomate - C9 - C3</option>
                      <option value="100-maiz" >Maiz - C14 - C3</option>
                      <option value="500-pina">Piña - C20 - C5</option>
                      <option value="250-calabaza" >Calabaza - C14 - N/A</option>
                      <option value="0-dog" >--- Otoño ---</option>
                      <option value="120-zanahoria">Zanahorita - C7 - N/A</option>
                      <option value="80-berenjena">Berenjena - C9 - C3</option>
                      <option value="100-batata">Batata - C5 - C2</option>
                      <option value="40-pimenton">Pimenton - C7 - C2</option>
                      <option value="80-espinaca">Espinaca - C5 - N/A</option>
                    </select>
                    </div>
                    <div className="border-solid d-flex justify-content-center border">
                    {imgNabo ? imgNabo : <> </>}
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="text-center ">Nivel</div>
                  <input
                  className="form-control"
                    type="number"
                    placeholder="nivel"
                    name="nivel"
                    value={nivel}
                    onChange={tomarNivel}
                  />
                 
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={Total}
                  >
                    Calcular
                  </button>
                </div>
              </div>
              <div className="row d-flex justify-content-end mt-5">
                <div className="wm-100 ">
                  <div className="d-flex justify-content-end">
                    <div className="text-end w-100">
                      <span>Unidad: </span>
                    </div>
                    <div className="text-end w-50">{evaluate(valor)}</div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-end">
                <div className="wm-100 ">
                  <div className="d-flex justify-content-end">
                    <div className="text-end w-100">
                      <span>Campo 3x3:</span>
                    </div>
                    <div className="text-end w-50">
                      {" "}
                      {valor ? evaluate(valor + "*9") : <></>}
                    </div>
                      
                  </div>
                </div>
              </div>
              <span>--/{cont}/--</span>
              {state  ? (<span>--/ {state.num} /--</span> ): <></>}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Calculadora;
