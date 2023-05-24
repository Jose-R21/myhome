import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import Cookie from "universal-cookie";
import './Chat.css'
import online from '../../assets/online.png'
import offline from '../../assets/offline.png'
import Login from "../login/Login";
const cookie = new Cookie();

const socket = io("http://localhost:3000", {autoConnect: false, query:{
  userID: cookie.get("id")
}});


const Chat = () => {

 
  
  const navigate = useNavigate();

 

  const [mensaje, setMensaje] = useState({
    mensaje: "",
    usuario: cookie.get("usuario"),
  });
  const [mensajes, setMensajes] = useState([]);
  const [users, setUsers] = useState([])

  const tomarMensaje = (e) => {
    setMensaje({ ...mensaje, [e.target.name]: e.target.value });
    
  };
  const tomarSubmit = (e) => {
    e.preventDefault();
    if(mensaje.mensaje.length>0){ 

      socket.emit("mensaje", mensaje);

      const newMensaje = {
        mensaje: mensaje.mensaje,
        usuario: "Yo",
      };
  
      setMensajes([newMensaje, ...mensajes]);
      setMensaje({ mensaje: "", usuario: cookie.get("usuario") });
      //console.log(mensajes);
    }
   
  };
  const cerrarSesion = () => {

    
    socket.disconnect()

    cookie.remove("id", { path: "/" });
    cookie.remove("usuario", { path: "/" });
    cookie.remove("nivel", { path: "/" });

    
    
    navigate('/myhome/chat')
  };
 

  useEffect(()=>{
    if (cookie.get("id") != null) {
      socket.auth = { userName:cookie.get("usuario")}
      
      socket.connect()

      socket.emit('conectado', `${cookie.get('usuario')}`)
    } 
  },[])

 
  
  useEffect(()=>{
   
   
    socket.on('users',(users)=>{
      

      setUsers(users)
    })
  
    const construir = (data) => {
      setMensajes([data, ...mensajes]);
     
    };
    socket.on("mensaje", construir);
  
    socket.on('conectado', (usuario)=>{
     
      document.getElementById('span-x').innerHTML = `<span >${usuario} se ha unido a la sala.</span>`
  
      setTimeout(()=>{
       document.getElementById('span-x').innerHTML = ''
      }, 5000)
    })
  
    socket.on('disconnected', () => {
      document.getElementById('span-x').innerHTML = '<span>Un usuario a abandonado la sala...</span>'
  
      setTimeout(()=>{
       document.getElementById('span-x').innerHTML = ''
      }, 5000)
    })

    return () =>{
      socket.off('datos', (datosds) => {
        setDatosd(datosds)
      })

      socket.off("mensaje", construir);

      socket.off('conectado', (usuario)=>{
     
        document.getElementById('span-x').innerHTML = `<span >${usuario} se ha unido a la sala.</span>`
    
        setTimeout(()=>{
          document.getElementById('span-x').innerHTML = ''
        }, 5000)
      })
    }
  },[mensajes])
  
    return (
      <>
      
  
      <div className="w-100 d-flex">
      <div className="w-25 border-end border-dark p-2 cont-users">
      <div className="w-75 pt-4 d-flex justify-content-center mx-auto ">
      
        </div>
        
           {users.map((user, index)=>{
            return(
              <div key={index} className="ps-1 pb-2 div-users h-auto rounded">
  
                <div><span>{user.userName}</span> <span>({user.status}) <img src={user.status == 'online' ? online: offline} style={{height: '10px', width: 'auto'}} /> </span></div>
              
              
            </div>
            )
            
           })}
      </div>
        
        <div className=" w-100 d-flex justify-content-center align-items-center cont-body">
          <div className="d-flex justify-content-center h-cont-s w-75">
            <div className="w-100  border border-dark rounded">
              <div className="w-100 p-3 mb-1 border-bottom border-dark rounded h-cont-g overflow-auto">
              <div
                className="w-100  p-3"
                id="caja-mensaje"
              >
                {mensajes.map((msg, index) => {
                  return (
                    <div key={index} className="d-flex ">
                      <div
                        className={`mt-2 p-2 text-sm rounded span-chat  ${
                          msg.usuario == "Yo" ? "ms-auto bg-yo" : "bg-info"
                        }`}
                      >
                        <span className="fw-bold ">{msg.usuario}: </span>
                        <span className="">{msg.mensaje}</span>
                      </div>
                    </div>
                    
                  );
                })}
                
                 
                
                
              </div>
              </div>
                <div className="text-secondary pb-2 ps-2 border-bottom border-dark" id="span-x">
  
                </div>
              <div className="d-flex justify-content-center align-items-center p-2" id="cont-input">
                <form
                  action="#"
                  className="w-100 d-flex  align-items-center"
                >
                  <input
                    type="text"
                    className="form-control form-control-sm w-25 text-center"
                    value={cookie.get("usuario")}
                    disabled
                  />
                  <input
                    type="text"
                    name="mensaje"
                    className="form-control w-75 border border-dark"
                    onChange={tomarMensaje}
                    value={mensaje.mensaje}
                  />
                  <button className="ms-2 btn btn-primary rounded-circle" onClick={tomarSubmit}>
                  <i className="bi bi-send"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        </div>
      </>
    );
  
  
};

export default Chat;
