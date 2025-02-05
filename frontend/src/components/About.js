import React from "react";
import Laptop from "../assets/laptop.jpg";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full bg-white  py-8 px-2 md:py-36 md:px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="md:w-[500px] w-[400px]  mx-auto mt-16   rounded-md"
          src="https://res.cloudinary.com/dnqipwdsl/image/upload/v1674743811/415_e28jxf.jpg"
          alt="/"
        />
        <div className="flex flex-col justify-center  mx-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl mt-14  font-bold py-2">
            One stop solution to your health concerns
          </h1>
          <p className=" text-lg mt-4">
            CliniCall is an mhealth platform that connects patients with doctors
            through booking appointments and consultations in the nearby
            locations.
          </p>
          <p className="text-lg mt-4">
            We also have a digitised blood bank which maintains
            the list of blood donors and also helps the recipients to track and
            search the right donor easily.
          </p>
           <div className="flex gap-x-12">

          <button className="bg-indigo-700 text-white w-[200px] rounded-md font-medium md:mt-12 mt-8 my-6 mx-auto md:mx-0 py-3">
            <NavLink className="nav-link" to="/doctors">
              Find Doctors
            </NavLink>
          </button>
          <button className="bg-indigo-700 text-white w-[200px] rounded-md font-medium md:mt-12 mt-8 my-6 mx-auto md:mx-0 py-3">
            <NavLink className="nav-link" to="/login">
              Donate/Receive Blood
            </NavLink>
          </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
