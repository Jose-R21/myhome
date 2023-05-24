import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import Cookie from "universal-cookie";
import md5 from "md5";
import perro from "../../assets/perro.jpg";
import io from "socket.io-client";

const Login = ({login, actuLogin}) => {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  

  const navigate = useNavigate();

  const datosLogin = {
    usuario: usuario.toLocaleLowerCase(),
    clave: clave,
    nivel: 1,
  };


  const cookie = new Cookie();
  const cerrarDropdown = () =>{
    document.getElementById("dropdown-basic").classList.remove("show");
        document.getElementById("dropdown-basic").ariaExpanded = false;
        document.getElementById("dropdown-menu").classList.remove("show");
        document.getElementById("dropdown").classList.remove("show");
  }
  const tomarLogin = async (e) => {
    e.preventDefault();
    
    
    
    const Blogin = await axios
      .post(`http://localhost:3000/login/buscar`, datosLogin)
      .then((res) => {
        if (res.data != null) {
          var nombre =
            res.data.usuario[0].toUpperCase() + res.data.usuario.slice(1);
          toast(`Bienvenido ${nombre}`, { type: "success", autoClose: 1000, hideProgressBar: true });
          var datos = res.data;

          cookie.set("id", datos._id, { path: "/" });
          cookie.set("usuario", nombre, { path: "/" });
          cookie.set("nivel", datos.nivel, { path: "/" });

          setUsuario("");
          setClave("");

          tomarUserCookie();

          
          cerrarDropdown()
        } else {
          toast("Usuario o Clave incorrecto", { type: "error" });
          
          document.getElementById("usuario").classList.add("border-danger");
          document.getElementById("clave").classList.add("border-danger");
          document.getElementById("usuario").classList.remove("border-dark");
          document.getElementById("clave").classList.remove("border-dark");

        }
      })
      .catch((error) => {
        console.log(error);
      });

    //console.log(datos.data)
  };
  const verCookies = () => {
    console.log("id: " + cookie.get("id"));

    console.log("login: " + Blogin);
  };
  const tomarUserCookie = () => {
    if (cookie.get("id", [{}])) {
      const userLogin = 
        {
          id: cookie.get("id"),
          usuario: cookie.get("usuario"),
          nivel: cookie.get("nivel"),
        }
      
      actuLogin(userLogin)
    } else {
     
      actuLogin('')
    }
  };

  const cerrarSesion = () => {
    cookie.remove("id", { path: "/" });
    cookie.remove("usuario", { path: "/" });
    cookie.remove("nivel", { path: "/" });
    cerrarDropdown()
    navigate("/myhome/");
   
    actuLogin('')
  };

  useEffect(()=>{

    if (cookie.get("id") != null) {
      
    } else {
      
    }

    tomarUserCookie()
    setInterval(() => {
      tomarUserCookie()
      
    }, 10000);
    

  }, [])

  /* const num1 = [{id: 1, number: 1},{id: 2, number: 2},{id: 3, number: 3},{id: 4, number:4},]
    const num2 = [{id: 1, number: 1},{id: 2, number: 2},{id: 4, number: 4},]

    var num3 = []

    for(var i = 0; i < num1.length; i++){
      var igual = false
      for(var j = 0; j < num2.length & igual == false; j++){
        if(num1[i].id == num2[j].id && num1[i].number == num2[j].number){
          igual=true
        }else{
          if(igual == false){
            num3.push(num1[i])
          }
        }
        
      }
    }
    console.log(num3)*/
  if (login != '') {
    return (
      <>
        <div className="container-lg w-100 h-100 p-2 ">
          <div className="w-100 mx-auto">
            <div className="mb-3 d-flex">
              <div><img className="img-prof-login" src={perro} /></div>
              <div className="ms-2">
              <span className="fw-bold">{login.usuario}</span><br />
              <span className="text-secondary">{login.id.substring(0,5)+'********'+login.id.slice(-5)}</span>
              </div>
              </div>


                  <hr />
            <div className="d-flex justify-content-end">
             
                <button
                  type="button"
                  onClick={cerrarSesion}
                  className="btn btn-secondary btn-sm"
                >
                  Cerrar Sesion
                </button>
              </div>
            
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container w-100 h-100 p-2 ">
          <div className=" d-flex justify-content-center mx-auto  rounded">
            <form action="#" className="w-100  " onSubmit={tomarLogin}>
              <div className="w-100 d-flex justify-content-center">
                <div className="d-flex justify-content-end mb-2">
                  <input
                    type="text"
                    className="form-control border border-dark  "
                    value={usuario}
                    name="usuario"
                    id="usuario"
                    placeholder="Usuario"
                    onChange={(e) => setUsuario(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-3 w-100 d-flex justify-content-center">
                <div className=" d-flex justify-content-end">
                  <input
                    type="password"
                    className="form-control border border-dark "
                    value={clave}
                    name="clave"
                    id="clave"
                    placeholder="Clave"
                    onChange={(e) => setClave(e.target.value)}
                  />
                </div>
              </div><div className="d-flex justify-content-center">
              <button onClick={tomarLogin} className="btn btn-primary me-3">Login</button>
              
              
            </div>
              
            </form>
          </div>
        </div>
      </>
    );
  }
};

export default Login;
