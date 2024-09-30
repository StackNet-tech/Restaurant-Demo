import React from 'react'

const OurMenu = () => {
  return (
    <main>
       <div className="max-w-6.5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Starters</h2>

      <div className="relative  grid grid-cols-1 lg:grid-cols-2 gap-6 ">
        <div className="relative">
          <img
            src="../src/assets/menu/Rectangle 8.png"
            alt="Stuffed Mushrooms"
            className="left-8 w-48 h-48 object-cover relative"
          />

        
          <img
            src="../src/assets/menu/FINAL-bruschetta-with-mozzarella-1-7 1.png"
            alt="Bruschetta"
            className=" w-40 h-40 absolute top-20 left-16 lg:left-32 object-cover shadow-lg"
          />
        </div>

        <div className="flex flex-col justify-center space-y-10">
          <div>
            <h3 className="text-xl font-semibold">Stuffed Mushrooms</h3>
            <p className="text-gray-600">
              Mushrooms filled with a savory blend of cheese and herbs.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Bruschetta</h3>
            <p className="text-gray-600">
              Toasted bread topped with a mixture of tomatoes, garlic, and basil.
            </p>
          </div>
        </div>
      </div>

     
      <div className="mt-24">
        <img
          src="../src/assets/menu/Image (5).png"
          alt="Shrimp Skewer"
          className="w-full h-72 object-cover"
        />
      </div>
    </div>
    
    <div className="max-w-6.5xl mx-auto p-6 bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-100">Main Dish</h2>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6">
       
        <div className="relative">
          <img
            src="../src/assets/menu/images 2.png"
            alt="Stuffed Mushrooms"
            className="left-8 w-48 h-48 object-cover relative p-6"
          />

          <img
            src="../src/assets/menu/images (1) 1.png"
            alt="Bruschetta"
            className="absolute top-20 left-32 w-40 h-40 object-cover shadow-lg"
          />
        </div>

        <div className="flex flex-col justify-center space-y-10">
          <div>
            <h3 className="text-xl font-semibold text-gray-400">Grilled Salmon</h3>
            <p className="text-gray-100">
            Mushrooms filled with a savory blend of cheese and herbs.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-400">Pasta Primavera</h3>
            <p className="text-gray-100">
            Penne pasta tossed with a medley of fresh vegetables in a light  tomato sauce.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <img
          src="../src/assets/menu/Image (6).png"
          alt="Shrimp Skewer"
          className=" w-full h-72 object-cover"
        />
      </div>
    </div>


    <div className="max-w-6.5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Desserts</h2>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="relative">
          <img
            src="../src/assets/menu/Strawberry-Shortcake-tiramisu-3 1.png"
            alt="Stuffed Mushrooms"
            className="left-8 w-48 h-48 object-cover relative"
          />

          <img
            src="../src/assets/menu/Chocolate-Lava-Cake-Recipe 1.png"
            alt="Bruschetta"
            className="absolute top-20 left-32 w-40 h-40 object-cover shadow-lg"
          />
        </div>

        <div className="flex flex-col justify-center space-y-10">
          <div>
            <h3 className="text-xl font-semibold">Stuffed Mushrooms</h3>
            <p className="text-gray-600">
              Mushrooms filled with a savory blend of cheese and herbs.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Bruschetta</h3>
            <p className="text-gray-600">
              Toasted bread topped with a mixture of tomatoes, garlic, and basil.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        
      </div>
    </div>
    </main>
  )
}

export default OurMenu