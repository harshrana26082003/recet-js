import React from "react";
import './Header.css'
// import img1 from "./Images/1.jpg";

   export default function Home(){
    return<>
    <section class="home-header">   
      <div class="home-img">
        <img src="{img1}" alt=""></img>
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-auto">
      <div class="home-content ms-5 ps-5">
      <h6 class="text-light fs-5 para ">Discover Your Talent</h6>
      <p class="para-1"> Best Jazz Beats</p>
      <a href="" class="btn btn-style mt-4">Learn more</a>
    </div>

    </div>
    </section>
    </>
}