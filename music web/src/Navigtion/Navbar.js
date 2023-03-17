import React from "react";
import './Navbar.css'
 export default function Navbar(){
    return<>
     <section class="navigation">
        <div class="container-fluid">
          <div class="row">
            <div class="nav-bar">
        <nav class="navbar navbar-expand-lg bg-light w-100  p-3 nav-bar-pos">
            <div class="container">
              <a class="navbar-brand logo-text fs-4 text-dark fw-bold" href="#"><span class="fa-solid fa-music"></span> Musical
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-end pe-2">
                  <li class="nav-item">
                    <a class="nav-link text-dark fw-medium " aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link  text-dark fw-medium" href="#">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link  text-dark fw-medium" href="#">classes
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle  text-dark fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      pages
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item  text-dark fw-medium " href="#">Landing pages</a></li>
                      <li><a class="dropdown-item  text-dark fw-medium" href="#">404 pages</a></li>
                      <li><a class="dropdown-item  text-dark fw-medium" href="#">Element pages</a></li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle  text-dark fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Bolg
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item  text-dark fw-medium " href="#">Bolg with sidebar</a></li>
                      <li><a class="dropdown-item  text-dark fw-medium " href="#">Bolg with left sidebar</a></li>
                      <li><a class="dropdown-item  text-dark fw-medium " href="#">Bolg with right sidebar</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link  text-dark fw-medium " href="#" >Content</a>
                  </li>
                </ul>
                <form class="d-flex position-relative from1 w-25 h-50 form1" role="search">
                  <input class="form-control me-2 rounded rounded-4 form-search" type="search" placeholder="Search" aria-label="Search" list="searching"/>
                 <button class="btn btn-style" type="submit">
                    <span class="fa-solid fa-magnifying-glass"></span>
                 </button>
                </form> 
              </div>
            </div>
            <span class="fa-sharp fa-solid fa-moon fs-4 pos-moon"></span>
          </nav>
        </div>
        </div>
      </div>
    </section>
    </>
}