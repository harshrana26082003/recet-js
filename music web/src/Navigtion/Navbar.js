import React from "react";
import './Navbar.css'
 export default function Navbar(){
    return<>
     <section className="navigation">
        <div className="container-fluid">
          <div className="row">
            <div className="nav-bar">
        <nav className="navbar navbar-expand-lg bg-light w-100  p-3 nav-bar-pos">
            <div className="container">
              <a className="navbar-brand logo-text fs-4 text-dark fw-bold" href="#"><span className="fa-solid fa-music"></span> Musical
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-end pe-2">
                  <li className="nav-item">
                    <a className="nav-link text-dark fw-medium " aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link  text-dark fw-medium" href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link  text-dark fw-medium" href="#">classes
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle  text-dark fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      pages
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item  text-dark fw-medium " href="#">Landing pages</a></li>
                      <li><a className="dropdown-item  text-dark fw-medium" href="#">404 pages</a></li>
                      <li><a className="dropdown-item  text-dark fw-medium" href="#">Element pages</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle  text-dark fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Bolg
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item  text-dark fw-medium " href="#">Bolg with sidebar</a></li>
                      <li><a className="dropdown-item  text-dark fw-medium " href="#">Bolg with left sidebar</a></li>
                      <li><a className="dropdown-item  text-dark fw-medium " href="#">Bolg with right sidebar</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link  text-dark fw-medium " href="#" >Content</a>
                  </li>
                </ul>
                <form className="d-flex position-relative from1 w-25 h-50 form1" role="search">
                  <input className="form-control me-2 rounded rounded-4 form-search" type="search" placeholder="Search" aria-label="Search" list="searching"/>
                 <button className="btn btn-style" type="submit">
                    <span className="fa-solid fa-magnifying-glass"></span>
                 </button>
                </form> 
              </div>
            </div>
            <span className="fa-sharp fa-solid fa-moon fs-4 pos-moon"></span>
          </nav>
        </div>
        </div>
      </div>
    </section>
    </>
}