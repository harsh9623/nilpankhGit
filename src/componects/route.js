import React from 'react';
import { Routes, Route } from 'react-router-dom'
import {HashRouter} from 'react-router-dom'
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
    <HashRouter>
      <Navigate/>
      <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/aboutus" element={<Aboutus />}/>
          <Route path="/contactus" element={<Contact />}/>
   
     
    </Routes>
    <Footer/>
    </HashRouter>
  </>
  );
}

export default Routerpg;