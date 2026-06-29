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
    'https://i.ibb.co.com/BKPDkby5/ph-MCQ.png',
  ];
  // const rotatingImages = [
  //   'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=150&h=150&fit=crop',
  //   'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=150&h=150&fit=crop',
  //   'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=150&h=150&fit=crop',
  //   'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=150&h=150&fit=crop',
  //   'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=150&h=150&fit=crop',
  //   'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=150&h=150&fit=crop',
  //   'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=150&h=150&fit=crop',
  //   'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=150&h=150&fit=crop',
  // ];

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
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Our Gallery
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore our journey through these memorable moments
          </p>
          <RotatingImageCircle
            images={rotatingImages}
            radius={220}
            rotationSpeed={15}
            imageSize={150}
            centerContent={
              <div className="text-center">
                <span className="block text-lg font-bold text-blue-600">Science</span>
                <span className="text-xs text-gray-500">Family</span>
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