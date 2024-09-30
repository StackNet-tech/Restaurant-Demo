import React from 'react'
import food1 from "../assets/menu/food1.png"
import food2 from "../assets/menu/food2.jpg"
import food3 from "../assets/menu/food3.jpg"
import food4 from "../assets/menu/food4.jpg"

const bgHome = {
  // backgroundImage: `url(${home})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100vh',}
 
  const foodDetails =[
    {
        id: 1,
        img: food1,
        name: "Chichen Manjoori",
        amount: 1,
        price: 1000,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: 2,
        img: food2,
        name: "Burger",
        amount: 1,
        price: 1000,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: 3,
        img: food3, 
        name: "Cocktail",
        amount: 1,
        price: 1000,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: 4,
        img: food4, 
        name: "Hot Dogs",
        amount: 1,
        price: 1000,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ]   

const OurMenu = () => {
  return (
     <div style={bgHome}
        className="min-h-[550px] md:min-h-[600px] 
        duration-200 flex justify-center items-center px-[250px]">
          <div className="container pb-8 md:pb-10 mt-20">
            <div className='flex-col'>
              <div>
                <h1 className='text-5xl md:text-6xl'>Expolore<br></br>Our Menu</h1>
              </div>
              <div className='mt-[45px] mb-[30px]'>
                <p>Discover our delectable range of dishes prepared with fresh, high-quality ingredients</p>
              </div>
              <ul className='flex flex-row gap-10 mt-5 '>
                {foodDetails.map(({ id, img, name, price, desc, amount }) => (

                  <li key={id} className='items-center justify-center'>
                      <div className="flex flex-col justify-center rounded-3xl min-w-[175px] max-w-[300px]">
                      <img src={img} alt="" className='w-full mx-0 block sm:max-w-[150px] md:max-w-[180px] lg:max-w-[270px]' />
                      <div className='flex mt-3 justify-between items-center justify-center'>
                        <h2 className="text-2xl font-bold">{name}</h2>
                        <p className="text-base">{price} Rs</p>
                      </div>
                      <hr className='mt-2'/>
                      <p className='text-slate-600 mt-4'>
                        {desc}
                      </p>
                    </div>
                  </li>
                  
                ))}
              </ul>
              <div className="text-center mt-10 mb-10">
                <button className="border border-yellow-500 text-yellow-500 py-2 px-4 mt-5">Veiw More</button>
              </div>
            </div>
          </div>
      </div>    
  )
}

export default OurMenu