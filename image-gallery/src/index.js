import React from 'react';
import ReactDOM from 'react-dom/client';
import Myheader from './My header';
// import Mydata from './my data';
// import  Data  from './Data '
// import Desc from './desc';
// import Menu from './Menu';
import Image from './Image';
import Footer from './Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
     <Myheader></Myheader>
  {/* <Mydata></Mydata>
  <Data></Data>
  <Desc></Desc>
  <Desc val="blue"></Desc>
  <Menu item="About Us"/>
   <Menu item="Contact Us"/> */}
   <Image></Image>
   <Footer></Footer>

  </>

  
    //<App />
 
);



