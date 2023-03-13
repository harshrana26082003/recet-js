import { React } from "react";
import './Image.css'
import img1 from "./Images/1.jpg";
import img2 from "./Images/2.jpg";
import img3 from "./Images/3.jpg";
import img4 from "./Images/4.jpg";
import img5 from "./Images/5.jpg";
import img6 from "./Images/6.jpg";

function Image(){
    return<>
    <h2 className="heading">My image gallery</h2>
    <div className="main">
    <div className="gallery">
        <div className="div1">
    <img src={img1} alt=""></img>
    <p>1.nice natrue</p>
  </div>
  <div className="div1">
    <img src={img2} alt=""></img>
    <p>2.taj mahal</p>
    </div>
    <div className="div1">
    <img src={img3} alt=""></img>
    <p>3.nice sky and tree</p>
    </div>
    <div className="div1">
    <img src={img4} alt=""></img>
    <p>4.nice natrue and bot</p>
    </div>
    <div className="div1">
    <img src={img5} alt=""></img>
    <p>5.nice natrue and hell</p>
    </div>
    <div className="div1">
    <img src={img6} alt=""></img>
    <p>6.nice natrue hell and water</p>
    </div>
    
    </div>
    </div>
    </>
}
export default Image;