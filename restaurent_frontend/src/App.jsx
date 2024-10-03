import React from 'react'
import Navbar from './Component/Header';
import Header from './Component/Nav';
// import Layout from './Component/Layer';
import Layer from './Component/Layer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import OurMenu from './pages/OurMenu';
import Accomodation from './pages/Accomodation';
import Events from './pages/Events';
import Facilities from './pages/Facilities';



const App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Layer />} >
        <Route index element={<Home />} />
        <Route path='menu' element={<OurMenu />} />
        <Route path='accomodation' element={<Accomodation />} />
        <Route path='events' element={<Events />} />
        <Route path='facilities' element={<Facilities/>} />

        

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;