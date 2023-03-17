import React from "react";
import './Header.css'
// import img1 from "./Images/1.jpg";

   export default function Home(){
    return<>
    <section className="home-header">   
      <div className="home-img">
        <img src="{img1}" alt=""></img>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 col-auto">
      <div className="home-content ms-5 ps-5">
      <h6 className="text-light fs-5 para ">Discover Your Talent</h6>
      <p className="para-1"> Best Jazz Beats</p>
      <a href="" className="btn btn-style mt-4">Learn more</a>
    </div>

    </div>
    </section>
    </>
}