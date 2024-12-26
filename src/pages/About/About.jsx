import React from "react";

export default function About() {
  return (
    <>
      <div
        className="bg-teal-500  pb-7 pt-6 flex items-center justify-center"
        style={{ minHeight: "calc(100vh - 110px)" }}
      >
        <div className="container flex justify-center flex-col items-center text-white">
          <h2 className="uppercase text-[2.25rem] font-bold">
            About Component
          </h2>

          <div className="title-styling before:mx-4 after:mx-4">
            <i className="fa-solid fa-star"></i>
          </div>
          <div className="flex justify-center flex-wrap items-center gap-5 p-3">
            <p className=" md:w-1/3">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
            <p className=" md:w-1/3">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
