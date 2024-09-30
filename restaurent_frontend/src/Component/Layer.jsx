import React, {useRef} from "react"
import { Outlet } from "react-router-dom"
import Header from "./Nav"
import Footer from "../pages/Footer"
import Navbar from "./Header"
import Home from "../pages/Home"
import Booking from "../pages/Booking"

export default function Layer() {

    const bookingRef = useRef(null);

    const scrollToBooking = () => {
        if (bookingRef.current) {
          bookingRef.current.scrollIntoView({ behavior: "smooth" });
        }
      };

    return (
        <>
            <Navbar />
            <Header scrollToBooking={scrollToBooking}/>
          
            
            <Outlet />
            
            <Booking ref={bookingRef} />

            
            <Footer />
        </>
    )
}