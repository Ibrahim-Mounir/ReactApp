import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-700 p-10">
        <div className="container grid grid-cols-12 gap-4 justify-between items-center text-center text-white">
          <div className="col-span-12 p-4 sm:col-span-4">
            <h3 className="uppercase text-2xl font-medium pt-5 mb-2">
              Location
            </h3>
            <p>2215 John Daniel Drive Clark, MO 65243</p>
          </div>
          <div className="col-span-12 p-4 sm:col-span-4">
            <h3 className="uppercase text-2xl font-mediumpt-5 mb-2">
              AROUND THE WEB
            </h3>
            <div className="flex justify-center items-center flex-wrap gap-1">
              <a
                href="https://facebook.com"
                className="border-2 rounded-full h-10 w-10 cursor-pointer flex justify-center items-center"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com"
                className="border-2 rounded-full h-10 w-10 cursor-pointer flex justify-center items-center"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="https://linkedin.com"
                className="border-2 rounded-full h-10 w-10 cursor-pointer flex justify-center items-center"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a
                href="https://youtube.com"
                className="border-2 rounded-full h-10 w-10 cursor-pointer flex justify-center items-center"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="col-span-12 p-4 sm:col-span-4">
            <h3 className="uppercase text-2xl font-medium pt-5 mb-2">
              ABOUT FREELANCER
            </h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </footer>
      <div className="bg-slate-900">
        <p className="text-center text-white pt-5 pb-6">
          Copyright © Your Website 2021
        </p>
      </div>
    </>
  );
}
