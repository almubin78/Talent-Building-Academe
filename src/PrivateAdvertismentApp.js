// client/src/App.js

// import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PhysicsRoadmap from "./PrivateAppPages/PhysicsRoadmap";

import Sutdents from "./PrivateAppPages/Sutdents";
// import Testimonials from "./PrivateAppPages/Testimonials";
import PreviousStudents from "./PrivateAppPages/PreviousStudents";
import Contact from "./PrivateAppPages/Contact";
import HeroSection from "./PrivateAppPages/HeroSection";
import Popup from "./PrivateAppPages/Popup";
import { useState } from "react";
import Header from "./PrivateAppPages/Header";



function PrivateApp() {
  const [close, setClose] = useState(true);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      {/* <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Talent Building Academy
          </h1>
          <p className="text-yellow-300  mb-5">----by <span>আল মুবিন স্যার</span></p>
          <p className="text-xl md:text-2xl">
            পদার্থবিজ্ঞান | রসায়ন | গণিত MCQ ||{" "}
          </p>
        </div>
      </header> */}
      <Header/>

      {/* Dedicated PHYSICS Section with Roadmap */}
      {/* Students  */}
     
      <div className="bg-slate-500">
        <Popup 
          headline='Welcome to Talent Building Academy'
          paragraph="পদার্থ , রসায়ন এবং গণিত MCQ এ পরিপূর্ণ প্রস্তুতির জন্য। "
          extraMessage="ওয়েব সাইটের কাজ এখনো চলমান। তাই অনেক ভর্তি প্রক্রিয়া সহ যোগাযোগের মত বিষয়গুলো কাজ করবেনা। ওয়েবসাইটের নিচের দিকে যোগাযোগের তথ্য দেয়া হয়েছে।"
          imgLink='https://i.ibb.co.com/99RN1XPM/me3-removebg-preview.png'
          open={close}
          setOpen={setClose}
        />
        <HeroSection/>
        <PhysicsRoadmap />
      </div>
        <Sutdents />
        <PreviousStudents/>
        <Contact/>
        {/* <Testimonials/> */}

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; 2025 Talent Building Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default PrivateApp;
