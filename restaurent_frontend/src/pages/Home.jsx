import React, { useRef } from 'react';
import home from "../assets/home/image.png"

const Home = () => {

  const contentRef = useRef(null);

  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

 
    const menuItems = [
      { id: 1, name: 'Chicken Manjori', price: '\$15', description: 'Lorem Ipsum is that it has a more-or-less normal', image: '../src/assets/home/Image (1).png' },
      { id: 2, name: 'Chicken Manjori', price: '\$15', description: 'Lorem Ipsum is that it has a more-or-less normal', image: '../src/assets/home/Image (2).png' },
      { id: 3, name: 'Chicken Manjori', price: '\$15', description: 'Lorem Ipsum is that it has a more-or-less normal', image: '../src/assets/home/Image (3).png' },
      { id: 4, name: 'Chicken Manjori', price: '\$15', description: 'Lorem Ipsum is that it has a more-or-less normal', image: '../src/assets/home/Image (4).png' },
    ];

  return (
    <div>
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
         <button onClick={scrollToContent} className="border border-yellow-500 text-yellow-500 py-2 px-4">
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
     <div ref={contentRef} className="mt-10">
        

        <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Explore Our Menu</h1>
      <p className="mb-8">Discover our delectable range of dishes prepared with fresh, high-quality ingredients</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {menuItems.map(item => (
          <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600">{item.price}</p>
              <p className="text-sm text-gray-500 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition rounded">
          View More
        </button>
      </div>
    </div>
      </div>

    </div>
   
  )
}

export default Home