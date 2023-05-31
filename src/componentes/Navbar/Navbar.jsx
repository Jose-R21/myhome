import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import perro from "../../assets/perro.jpg";
import "./NavBar.css";
import Login from "../login/Login";
import Cookie from "universal-cookie";

const NavBar = ({login ,actuLogin}) => {
  const img = <img className="img-prof" src={perro} />;
  const cookie = new Cookie();

  

  return (
    <>
      <nav className="navbar navbar-expand-lg nav-bg nav-per">
        <div className="container-fluid">
          <div className=" nav-mob">
            <div className="h-100 my-auto">
              <Link className="navbar-brand" to="/myhome/" >
               My Home 
                <span className="visually-hidden">(current)</span>
              </Link>
            </div>

            <div className="w-100 justify-content-end nav-item-login ">
              <Link className="nav-link active" to="#">
                <Dropdown id="dropdown">
                  <Dropdown.Toggle id="dropdown-basic" bsPrefix="btn-my1" className="bg-orange">
                    {cookie.get("id") != null ? img : "Iniciar Sesion"}
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dr-login" id="dropdown-menu">
                    <Login login={login} actuLogin={actuLogin}></Login>
                  </Dropdown.Menu>
                </Dropdown>
              </Link>
            </div>
          </div>

          <button
            className="navbar-toggler collapsed text-orange border-orange hover-bg-orange"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"

          > 
          <div>
          <i class="bi bi-list"></i>
            </div>
          </button>
          <div className="navbar-collapse collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto d-flex w-100">
              <div className="navbar-nav w-50">
                <li className="nav-item my-auto">
                  <Link className="nav-link active" to="/myhome/calculadora/" state={{num:5}}>
                    <span className="hover-text-orange">Calculadora</span> 
                    <span className="visually-hidden">(current)</span>
                  </Link>
                </li>
                <li className="nav-item my-auto">
                  <Link className="nav-link active" to="/myhome/cartas/">
                    <span className="hover-text-orange">Cartas</span>  
                    <span className="visually-hidden">(current)</span>
                  </Link>
                </li>
                <li className="nav-item my-auto">
                  <Link className="nav-link active" to="/myhome/check/">
                    <span className="hover-text-orange">Prueba</span> 
                    <span className="visually-hidden">(current)</span>
                  </Link>
                </li>
                {login ? (
                  <li className="nav-item my-auto chat rounded ">
                    <Link className="nav-link active" to="/myhome/chat/">
                      <span className="chat ">Chat
                      <i className="ps-1 bi bi-chat"></i>
                      </span>
                      <span className="visually-hidden">(current)</span>
                      
                    </Link>
                  </li>
                ) : cookie.get("id") ? (
                  <li className="nav-item my-auto">
                    <Link className="nav-link active chat rounded d-flex hover-text-orange" to="/myhome/chat/">
                    <i className="me-1 bi bi-chat"></i>
                      Chat
                      
                      <span className="visually-hidden">(current)</span>
                    </Link>
                  </li>
                ) : (
                  <></>
                )}
              </div>
              <div className="w-100 justify-content-end nav-mob-login">
                <li className="nav-item ">
                  <Dropdown id="dropdown">
                    <Dropdown.Toggle id="dropdown-basic" bsPrefix="btn-my1" className="bg-orange">
                      {cookie.get("id") != null ? img : "Iniciar Sesion"}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dr-login border-orange" id="dropdown-menu">
                      <Login login={login} actuLogin={actuLogin}></Login>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
