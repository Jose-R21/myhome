import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import FormNota from '../Notas/FormNota';
import FormCronograma from '../Cronograma/FormCronogama'
import ListaCheks from '../Checks/ListaCheck';
import Calculadora from '../Calculadora/Calculadora';
import ContenedorUpdate from './ContenedorUpdate';





const Contenedor = () => {
    
  return(

    <div className='container p-3 d-flex justify-content-center aling-items-center' style={{height: '100%', minHeight: '100vh', backgroundColor: '#fff'}}>

      <Routes>
        <Route path='/' Component={ListaCheks} ></Route>
        <Route path='/myhome/' Component={ListaCheks} ></Route>
        <Route path='/myhome/calculadora' Component={Calculadora} ></Route>
        <Route path='/update/:tipo/:id' Component={ContenedorUpdate} ></Route>
        
      </Routes>
      
      </div>

  )
}



export default Contenedor