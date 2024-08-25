import React from 'react'
import Navbar from './Component/Header';
import Header from './Component/Nav';
// import Layout from './Component/Layer';
import Layer from './Component/Layer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import OurMenu from './pages/OurMenu';
import Accomodation from './pages/Accomodation';



const App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Layer />} >
        <Route index element={<Home />} />
        <Route path='menu' element={<OurMenu />} />
        <Route path='accomodation' element={<Accomodation />} />

        {/* <Route index element={<H /> />
        <Route path='about' element={<About/>} />

        <Route path="vans">
        <Route index  element={<Vans />} />
        <Route path=":id" element={<VanDetails />} />
        </Route>
        
        

        <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="income" element={<Income />} /> */}
        
        {/* </Route> */}

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;