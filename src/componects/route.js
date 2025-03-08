import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
// import Nav from './components/navigation';
import Footer from './footer';
import Home from './home';
import Navigate from './navigation';
import Products from './products';
import Aboutus from './aboutus';
import Contact from './contact';

// import Login from './components/login';

function Routerpg() {
  return (<>
    <BrowserRouter>
      <Navigate/>
      <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/aboutus" element={<Aboutus />}/>
          <Route path="/contactus" element={<Contact />}/>
   
     
    </Routes>
    <Footer/>
    </BrowserRouter>
  </>
  );
}

export default Routerpg;