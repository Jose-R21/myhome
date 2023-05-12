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





const Contenedor = () => {
    
  return(
    <>
    <div className='container p-3 cnt '>
        <div className='d-flex justify-content-center aling-items-center pt-5'>
      <Routes>
        <Route path='/' Component={ListaCheks} ></Route>
        <Route path='/myhome/' Component={ListaCheks} ></Route>
        <Route path='/myhome/calculadora/' Component={Calculadora} ></Route>
        <Route path='/myhome/cartas/' Component={JCartas} ></Route>
        <Route path='/myhome/update/:tipo/:id' Component={ContenedorUpdate} ></Route>
        
        
      </Routes>
      </div>
      <div>
        
      </div>
      </div>
      
      </>
  )
}



export default Contenedor