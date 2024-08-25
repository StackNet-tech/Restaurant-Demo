import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Nav"
import Footer from "../pages/Footer"
import Navbar from "./Header"
import Home from "../pages/Home"
import Booking from "../pages/Booking"

export default function Layer() {
    return (
        <>
            <Navbar />
            <Header />
          
            
            <Outlet />
            <Booking />
            <Footer />
        </>
    )
}