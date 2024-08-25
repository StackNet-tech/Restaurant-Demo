import React from 'react'
import home from "../assets/home/image.png"

const Home = () => {
  return (
    <main className="bg-gray-900 text-white py-20 px-10 flex justify-between">
       
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold mb-6">Welcome to XYZ</h1>
          <p className="text-lg mb-6">
            Welcome to [Restaurant Name], where exquisite dining meets
            unparalleled comfort. Our restaurant offers a delightful experience
            with a diverse menu, elegant facilities, and exceptional service.
            Whether you’re here for a casual meal, a special occasion, or an
            event, we’re dedicated to making your visit memorable.
          </p>
          <button className="border border-yellow-500 text-yellow-500 py-2 px-4">
            View More
          </button>
        </div>

        
        <div className="relative">
          <img
            src={home}
            alt="Dining Area"
            className="h-72 w-72 object-cover rounded-lg"
          />
        </div>
      </main>
  )
}

export default Home