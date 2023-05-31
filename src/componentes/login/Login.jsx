import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate, redirect } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import Cookie from "universal-cookie";
import md5 from "md5";
import perro from "../../assets/perro.jpg";


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
    
    navigate('/myhome/')
    navigate(0)
    
   
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


  if (login != '') {
    return (
      <>
        <div className="container-lg w-100 h-100 p-2 index-lg text-dark">
          <div className="w-100 mx-auto index-lg ">
            <div className="mb-3 d-flex index-lg ">
              <div><img className="img-prof-login" src={perro} /></div>
              <div className="ms-2">
              <span className="fw-bold text-dark">{login.usuario}</span><br />
              <span className="text-secondary">{login.id.substring(0,5)+'********'+login.id.slice(-5)}</span>
              </div>
              </div>


                  <hr />
            <div className="d-flex justify-content-end">
             
                <button
                  type="button"
                  onClick={cerrarSesion}
                  className="btn btn-danger btn-sm"
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
        <div className="container w-100 h-100 p-2 index-lg ">
          <div className="text-center mb-3 ">
            <div  className="rounded-pill w-75 mx-auto border border-orange" >
            <span className="text-dark">Iniciar Sesion</span>
            </div>
          </div>
          <div className=" d-flex justify-content-center mx-auto  rounded">
            <form action="#" className="w-100  " onSubmit={tomarLogin}>
              <div className="w-100 d-flex justify-content-center">
                <div className="d-flex justify-content-end mb-2">
                  <input
                    type="text"
                    className="form-control border border-dark  hover-border-orange"
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
                    className="form-control border border-dark hover-border-orange"
                    value={clave}
                    name="clave"
                    id="clave"
                    placeholder="Clave"
                    onChange={(e) => setClave(e.target.value)}
                  />
                </div>
              </div><div className="d-flex justify-content-center">
              <button onClick={tomarLogin} className="btn bg-orange text-light me-3">Login in</button>
              
              
            </div>
              
            </form>
          </div>
        </div>
      </>
    );
  }
};

export default Login;
