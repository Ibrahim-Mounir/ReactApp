import React from "react";
import image from "../../assets/images/avataaars.svg";
export default function Home() {
  return (
    <>
      <div
        className="bg-teal-500  pb-7 pt-6"
        style={{ minHeight: "calc(100vh - 110px)" }}
      >
        <div className="container text-center text-white flex justify-center items-center ">
          <div className="space-y-4">
            <img src={image} alt="avatar" className="w-64 mx-auto" />

            <h2 className="uppercase text-[2.5rem] font-bold">
              Start Framework
            </h2>

            <div className="title-styling">
              <i className="fa-solid fa-star"></i>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </div>
    </>
  );
}
