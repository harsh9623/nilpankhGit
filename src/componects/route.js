import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Footer from './footer';
import Home from './home';
import Navigate from './navigation';
import Products from './products';
import Aboutus from './aboutus';
import Contact from './contact';

function Routerpg() {
  return (
    <>
      <HashRouter>
        <Navigate />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Default Route */}
          <Route path="products" element={<Products />} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="contactus" element={<Contact />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default Routerpg;
