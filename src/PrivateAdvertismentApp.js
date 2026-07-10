// client/src/PrivateApp.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PhysicsRoadmap from "./PrivateAppPages/PhysicsRoadmap";
import Sutdents from "./PrivateAppPages/Sutdents";
import PreviousStudents from "./PrivateAppPages/PreviousStudents";
import Contact from "./PrivateAppPages/Contact";
import HeroSection from "./PrivateAppPages/HeroSection";
import Popup from "./PrivateAppPages/Popup";
import Header from "./PrivateAppPages/Header";

import { useState } from "react";
import RotatingImageCircle from "./PrivateAppPages/RotatingImageCircle";

function PrivateApp() {
  const [close, setClose] = useState(true);

  // Sample images for the rotating circle
  const rotatingImages = [
    'https://i.ibb.co.com/gF9qPk6Q/ph-CQ.png',
    'https://i.ibb.co.com/VnPmpb4/ch-CQ.png',
    'https://i.ibb.co.com/8SDKkY9/math.png',
    'https://i.ibb.co.com/WvwNF1Sx/Science-Class-Eight.png',
    
    'https://i.ibb.co.com/BKPDkby5/ph-MCQ.png',
    'https://i.ibb.co.com/MxXp0G53/ch-MCQ.png',
    'https://i.ibb.co.com/Lz1NkpCH/Class-Eight-Math.png',
  ];
 

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="bg-slate-500">
        <Popup
          headline="Welcome to "
          webName="Talent Building Academy"
          paragraph="পদার্থ , রসায়ন এবং গণিত MCQ এ পরিপূর্ণ প্রস্তুতির জন্য। "
          extraMessage="ওয়েব সাইটের কাজ এখনো চলমান। জরুরী প্রয়োজনে যোগাযোগঃ"
          phone="017-019-0-6543"
          imgLink="https://i.ibb.co.com/ch43C1cZ/me-Story.jpg"
          open={close}
          setOpen={setClose}
        />
        <HeroSection />
      </div>

      {/* Add the Rotating Image Circle Section */}
      <section className="py-16 bg-gradient-to-b from-blue-500 to-white">
        <div className="container mx-auto px-4 ">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            যে বিষয়গুলো নিয়ে আমি কাজ করি
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            
          </p>
          <RotatingImageCircle
            images={rotatingImages}
            radius={220}
            rotationSpeed={15}
            imageSize={100}
            centerContent={
              <div className="text-center p-5 bg-red-100 rounded-full shadow-lg">
                <span className="block text-lg font-bold text-blue-600 ">Subjects = Easy</span>
                {/* <span className="text-xs text-gray-500">Family</span> */}
              </div>
            }
          />
        </div>
      </section>

      <Sutdents />
      <PreviousStudents />
      <PhysicsRoadmap />
      <Contact />

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Talent Building Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default PrivateApp;