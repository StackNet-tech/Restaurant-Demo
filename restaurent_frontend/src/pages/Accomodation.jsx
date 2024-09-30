import React from 'react'

const Accomodation = () => {
  return (
    <div>
<div className=" bg-gray-800 text-white">
      <h1 className='text-3xl font-bold py-12 text-center '>Accommodation</h1>
    </div>
      <div className="max-w-7xl mx-auto p-3 text-center">
    
  <p className="text-lg mb-8">
    For guests looking for an extended stay, XYZ offers comfortable and stylish accommodations.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="space-y-4">
      <img
        src="../src/assets/accomodation/images (3) 1.png"
        alt="Room 1"
        className="w-full h-64 object-cover rounded-lg shadow-lg"
      />
      <button className="border border-gray-300 text-gray-500 px-4 py-2 rounded-md hover:bg-gray-100 transition">
        Book Now
      </button>
    </div>

    <div className="space-y-4">
      <img
        src="../src/assets/accomodation/Rectangle 9.png"
        alt="Room 2"
        className="w-full h-64 object-cover rounded-lg shadow-lg"
      />
      <button className="border border-gray-300 text-gray-500 px-4 py-2 rounded-md hover:bg-gray-100 transition">
        Book Now
      </button>
    </div>
  </div>
</div>
    </div>
    

  )
}

export default Accomodation