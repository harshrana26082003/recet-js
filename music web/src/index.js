import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navigtion/Navbar'
import Home from './Header/Header'
import Welcome from './welcome music/Welcome';
import Music from './Music class/Music-class';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
<Navbar></Navbar>
<Home></Home>
<Welcome></Welcome>
<Music></Music>
    </>
);


