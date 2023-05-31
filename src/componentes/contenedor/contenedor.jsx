import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import FormNota from '../Notas/FormNota';
import FormCronograma from '../Cronograma/FormCronogama'
import ListaCheks from '../Checks/ListaCheck';
import Calculadora from '../Calculadora/Calculadora';
import ContenedorUpdate from './ContenedorUpdate';
import './Contenedor.css'
import JCartas from '../Cartas/Contenedorcartas';
import Login from '../login/Login'
import Chat from '../chat/Chat';
import PanelLateral from '../PanelLateral/PanelLateral';





const Contenedor = ({cont, socket}) => {
    
  return(
    <>
    <div className='d-flex h-100 w-100'>
    
    <div className='cnt '>
        <div className='d-flex justify-content-center aling-items-center h-100'>
          <div className='w-100 cont-g'>
      <Routes>
        <Route path='/' Component={ListaCheks} ></Route>
        <Route path='/myhome/' Component={ListaCheks} ></Route>
        <Route path='/myhome/calculadora/' element={<Calculadora cont={cont} ></Calculadora>} ></Route>
        <Route path='/myhome/cartas/' Component={JCartas} ></Route>
        <Route path='/myhome/update/:tipo/:id' Component={ContenedorUpdate} ></Route>
        <Route path='/myhome/chat/' element={<Chat socket={socket}></Chat>}  ></Route>
        
        
      </Routes>
      </div>
      </div>
      <div>
        
      </div>
      </div>
      </div>
      </>
  )
}



export default Contenedor