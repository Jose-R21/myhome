import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify'
import ContenedorGeneral from './componentes/ContenedorGeneral/ContenedorGeneral';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'




var fecha = new Date();
var year = fecha.getFullYear();
                          
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <div className='container cont-gnrl-gr'>
  <React.StrictMode>
    <BrowserRouter>
      
    
      <ContenedorGeneral></ContenedorGeneral>
     
      <ToastContainer limit={6}/>
      
     
    </BrowserRouter>
    <footer className='d-flex flex-wrap justify-content-center align-items-center py-3 footer-gr text-center text-secondary'>
        <div className='text-center' id='ft'>@ {year} En desarrollo BrunoInc </div>
        
              </footer>
  </React.StrictMode>
  </div>
  </>
)
