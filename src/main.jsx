import React from 'react'
import ReactDOM from 'react-dom/client'
import { useEffect } from "react";
import {BrowserRouter, Router } from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import NavBar from './componentes/Navbar/Navbar';
import ContenedorGeneral from './componentes/ContenedorGeneral/ContenedorGeneral';
import 'react-toastify/dist/ReactToastify.css';
import { Router } from 'react-router-dom';



var fecha = new Date();
var year = fecha.getFullYear();
                          
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Router basename='/myhome'></Router>
  <React.StrictMode>
    <BrowserRouter>
      <NavBar></NavBar>

      <ContenedorGeneral></ContenedorGeneral>
      <ToastContainer limit={2}/>
      <footer className='d-flex flex-wrap justify-content-center align-items-center py-3 border-top bg-dark text-light'>
        <div className='text-center' id='ft'>@ {year} En desarrollo BrunoInc </div>
        
              </footer>
    </BrowserRouter>
  </React.StrictMode>
  </>
)
