import React from "react";
import image1 from "../../assets/images/poert1.png";
import image2 from "../../assets/images/port2.png";
import image3 from "../../assets/images/port3.png";
export default function Portfolio() {
  return (
    <div className="relative">
      <div className="main-image hidden fixed left-0 top-0 right-0 bottom-0 bg-teal-400 bg-opacity-30 z-[9999]  items-center justify-center">
        <img src={image1} alt="" className="w-[600px] " />
      </div>
      <div className="container pt-12">
        <div className="text-slate-700 flex flex-col justify-center items-center">
          <h2 className="uppercase text-[2.25rem] font-bold">
            Portfolio Component
          </h2>

          <div className="title-styling before:mx-4 after:mx-4 before:bg-slate-700 after:bg-slate-700">
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
        <div className="cards p-5  grid grid-cols-12 gap-4 justify-center items-center">
          <div className="col-span-12 md:col-span-6 lg:col-span-4 rounded-lg relative group overflow-hidden">
            <img src={image1} alt="" className="w-full" />
            <div className="bg-[#29b096] bg-opacity-80 flex justify-center items-center text-white text-8xl cursor-pointer transition-opacity duration-300 group-hover:opacity-100 opacity-0  font-extrabold  left-0 top-0 w-full h-full absolute rounded-lg">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 rounded-lg relative group overflow-hidden">
            <img src={image2} alt="" className="w-full" />
            <div className="bg-[#29b096] bg-opacity-80 flex justify-center items-center text-white text-8xl cursor-pointer transition-opacity duration-300 group-hover:opacity-100 opacity-0  font-extrabold  left-0 top-0 w-full h-full absolute rounded-lg">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 rounded-lg relative group overflow-hidden">
            <img src={image3} alt="" className="w-full" />
            <div className="bg-[#29b096] bg-opacity-80 flex justify-center items-center text-white text-8xl cursor-pointer transition-opacity duration-300 group-hover:opacity-100 opacity-0  font-extrabold  left-0 top-0 w-full h-full absolute rounded-lg">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 rounded-lg relative group overflow-hidden">
            <img src={image1} alt="" className="w-full" />
            <div className="bg-[#29b096] bg-opacity-80 flex justify-center items-center text-white text-8xl cursor-pointer transition-opacity duration-300 group-hover:opacity-100 opacity-0  font-extrabold  left-0 top-0 w-full h-full absolute rounded-lg">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 rounded-lg relative group overflow-hidden">
            <img src={image2} alt="" className="w-full" />
            <div className="bg-[#29b096] bg-opacity-80 flex justify-center items-center text-white text-8xl cursor-pointer transition-opacity duration-300 group-hover:opacity-100 opacity-0  font-extrabold  left-0 top-0 w-full h-full absolute rounded-lg">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 rounded-lg relative group overflow-hidden">
            <img src={image3} alt="" className="w-full" />
            <div className="bg-[#29b096] bg-opacity-80 flex justify-center items-center text-white text-8xl cursor-pointer transition-opacity duration-300 group-hover:opacity-100 opacity-0  font-extrabold  left-0 top-0 w-full h-full absolute rounded-lg">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
