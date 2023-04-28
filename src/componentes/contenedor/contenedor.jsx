import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import FormNota from '../Notas/FormNota';
import ListaCheks from '../Checks/ListaCheck';




const Contenedor = ({openoffcanvas}) => {
    
  return(

    <div className='container p-3 d-flex justify-content-center aling-items-center' style={{height: '100%', minHeight: '100vh', backgroundColor: '#fff'}}>

      <Routes>
      
        <Route path='/' Component={ListaCheks} ></Route>
        <Route path='/new-nota/' Component={FormNota} ></Route>
        <Route path='/update/:id/' Component={FormNota} ></Route>
        
      </Routes>
      
      </div>

  )
}



export default Contenedor