import React from 'react'
import bg from "../assets/booking/bg.png"
const bgHome = {
 backgroundImage: `url(${bg})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100vh',}
const Booking = () => {
  return (
    <div style={bgHome} className='flex justify-center items-center'>
      <div style={{background: '#292E36F2', height: 'calc(100vh - 100px)'}} className='container px-10 flex-col items-center justify-center content-center mt-20 mb-20 px-10 rounded-lg'>        <div className='flex inline-block justify-center items-center mt-5'>
          <h1 className='border-y-2 border-yellow-500 text-lg  text-center text-white flex justify-center items-center'>Reservation</h1>
        </div>
        <div className='flex inline-block justify-center items-center mt-5'>
          <h1 className='text-5xl md:text-4xl text-center text-white flex justify-center items-center'>Book Your Table Now</h1>
        </div>
        <div className='flex inline-block justify-center items-center mt-5 space-x-5 px-20'>
          <input style={{background: '#292E36F2', border: '1px solid white'}} className="appearance-none w-full py-2 px-4 text-white leading-tight focus:outline-none" type="text" placeholder="Name" />
          <input style={{background: '#292E36F2', border: '1px solid white'}} className="appearance-none w-full py-2 px-4 text-white leading-tight focus:outline-none" type="text" placeholder="Email" />
        </div> 
        <div className='flex inline-block justify-center items-center mt-5 space-x-5  px-20'>
          <input style={{background: '#292E36F2', border: '1px solid white'}} className="appearance-none w-full py-2 px-4 text-white leading-tight focus:outline-none" type="text" placeholder="Person" />
          <input style={{background: '#292E36F2', border: '1px solid white'}} className="appearance-none w-full py-2 px-4 text-white leading-tight focus:outline-none" type="text" placeholder="Time" />
          <input style={{background: '#292E36F2', border: '1px solid white'}} className="appearance-none w-full py-2 px-4 text-white leading-tight focus:outline-none" type="date" placeholder="Date" />
        </div> 
        <div className='flex inline-block justify-center items-center mt-5 mb-5'>
        <button  className="bg-white text-gray-900 py-2 px-4 mt-5">Book a Table</button>
        </div>
        
      </div>
    </div>
  )
}

export default Booking