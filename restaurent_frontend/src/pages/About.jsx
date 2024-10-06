import React, { useState } from "react";

const About = () => {
  return (
    <div>
      <div className="bg-gray-900 text-white py-8 flex justify-center">
        <h1 className="text-3xl   text-center border-y-[1px] border-yellow-500 px-4">
          About Us
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:px-80 ">
        <div className="flex flex-col justify-center">
          <div className="mt-10 text-center md:text-left">
            <h1 className="inline-block border-y-[1px] border-yellow-500">
              About Us
            </h1>
            <p className="mt-4 px-5 md:px-0">
              Restaurant Name was established in Year with a mission to provide
              an exceptional dining experience. Our team is passionate about
              food and dedicated to delivering outstanding service. Our
              restaurant combines modern elegance with a warm, inviting
              atmosphere, making it the perfect place for any occasion.
            </p>
          </div>
          <div className="mt-10 text-center md:text-left">
            <h1 className="inline-block border-y-[1px] border-yellow-500">
              Our Story
            </h1>
            <p className="mt-4 px-5 md:px-0">
              Restaurant Name was established in Year with a mission to provide
              an exceptional dining experience. Our team is passionate about
              food and dedicated to delivering outstanding service. Our
              restaurant combines modern elegance with a warm, inviting
              atmosphere, making it the perfect place for any occasion.
            </p>
          </div>
          <div className="mt-10 text-center md:text-left">
            <h1 className="inline-block border-y-[1px] border-yellow-500">
              Our Mission
            </h1>
            <p className="mt-4 px-5 md:px-0">
              Restaurant Name was established in Year with a mission to provide
              an exceptional dining experience. Our team is passionate about
              food and dedicated to delivering outstanding service. Our
              restaurant combines modern elegance with a warm, inviting
              atmosphere, making it the perfect place for any occasion.
            </p>
          </div>
          <button className="inline-block border border-yellow-500 text-yellow-500 py-2 px-4 mt-10 mb-10">
            See More
          </button>
        </div>
        <div className="flex  justify-center md:justify-end items-center py-20 order-first md:order-2 ">
          <img className="w-3/4" src="../src/assets/about/image.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
