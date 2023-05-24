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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className=" nav-mob">
            <div className="h-100 my-auto">
              <Link className="navbar-brand" to="/myhome/">
                My Home
                <span className="visually-hidden">(current)</span>
              </Link>
            </div>

            <div className="w-100 justify-content-end nav-item-login ">
              <Link className="nav-link active" to="#">
                <Dropdown id="dropdown">
                  <Dropdown.Toggle id="dropdown-basic" bsPrefix="btn-my1">
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
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto d-flex w-100">
              <div className="navbar-nav">
                <li className="nav-item my-auto">
                  <Link className="nav-link active" to="/myhome/calculadora/" state={{num:5}}>
                    Calculadora
                    <span className="visually-hidden">(current)</span>
                  </Link>
                </li>
                <li className="nav-item my-auto">
                  <Link className="nav-link active" to="/myhome/cartas/">
                    Cartas
                    <span className="visually-hidden">(current)</span>
                  </Link>
                </li>
                {login ? (
                  <li className="nav-item my-auto chat rounded">
                    <Link className="nav-link active" to="/myhome/chat/">
                      Chat
                      <span className="visually-hidden">(current)</span>
                    </Link>
                  </li>
                ) : cookie.get("id") ? (
                  <li className="nav-item my-auto">
                    <Link className="nav-link active chat rounded" to="/myhome/chat/">
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
                    <Dropdown.Toggle id="dropdown-basic" bsPrefix="btn-my1">
                      {cookie.get("id") != null ? img : "Iniciar Sesion"}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dr-login" id="dropdown-menu">
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
