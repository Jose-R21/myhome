import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './NavBar.css'


const NavBar = () => {

  

  const img = <img className='img-prof' src="./assets/perro.jpg" />
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
      <div className="container-fluid" >
        <Link className="navbar-brand" to="/">MERN</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav ml-auto me-auto ul-princ">
            <div className="collapse navbar-collapse">
            <li className="nav-item">
                <Link className="nav-link active" to="/">Inicio
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/calculadora">Calculadora
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
            </div>
            <div className="collapse ml-auto navbar-collapse justify-content-end">
              
              <li className="dropdown navbar-light bg-dark" >
                <DropdownButton title={img}  >
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
              </li>
            </div>
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default NavBar