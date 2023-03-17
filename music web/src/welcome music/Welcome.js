import React from "react";
import './Welcome.css'
//  import Img2 from "./Images/2.jpg"
 export default function Welcome(){
    return<>
    <section className="about mt-5">
      <div className="container ">
        <div className="row align-items-center  ">
          <div className="col-lg-6 col-md-6 col-sm-12 col-auto">
            <h3 className="music-title">Welcome to <span className="text-secondary"> Musical </span> </h3>
            <p className="text-secondary pb-2 ">
              At corrupti odit At iure facere, porro repellat officia quas, dolores magnam assumenda soluta odit harum maiores fugiat accusamus eos nulla. Iure voluptatibus explicabo officia.
            </p>
            <p className="text-secondary pb-2 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, corrupti odit? At iure facere, porro repellat officia quas, dolores magnam assumenda soluta odit harum.
            </p>
            <a href="" className="btn btn-style mt-4">Know more about us</a>

          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-auto">
            <div className="position-relative img-border ms-4">
              {/* <img src= {Img2} className="img-fluid radius-image" alt="video-popup"/> */}
          </div>
          </div>
        </div>
      </div>
    </section>
    </>
}