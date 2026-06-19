import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import {
  GraduationCap,
  School,
  Sparkles,
  Trophy,
} from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { PreviousStudentsData } from "../datum/studentData";

const PreviousStudents = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch Students
  const fetchStudents = () => {
    setLoading(true);

    setTimeout(() => {
      let allStudents = [];

      Object.entries(PreviousStudentsData).forEach(([key, value]) => {
        const formattedStudents = value.map((student) => ({
          ...student,
          className: key,
        }));

        allStudents.push(...formattedStudents);
      });

      setStudents(allStudents);

      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Slider Settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-16 md:py-24">
      
      {/* Background Blur */}
      <div className="absolute top-0 left-0 h-72 w-72 bg-cyan-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Heading */}
        <div className="text-center mb-14">
          
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-400/20 px-5 py-2 rounded-full text-cyan-300 text-sm font-medium">
            <Sparkles size={16} />
            পূর্বের  শিক্ষার্থীদের একাংশ
          </div>

          {/* <h2 className="mt-5 text-3xl md:text-5xl font-extrabold text-white">
            পূর্বের
            <span className="text-cyan-400 ml-3">
              ছাত্র/ছাত্রী
            </span>
          </h2> */}

          {/* <p className="mt-5 text-slate-300 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            ধারাবাহিক গাইডলাইন, অনুশীলন এবং সঠিক প্রস্তুতির মাধ্যমে
            শিক্ষার্থীদের সফলতার পথে এগিয়ে নেওয়া হয়।
          </p> */}
        </div>

        {/* Loading */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="h-14 w-14 rounded-full border-4 border-slate-700 border-t-cyan-400 animate-spin"></div>
          </div>
        ) : students.length === 0 ? (
          <div className="text-center text-slate-400 py-20">
            কোনো তথ্য পাওয়া যায়নি।
          </div>
        ) : (
          <Slider {...sliderSettings}>
            
            {students.map((student) => (
              <div key={student.id} className="px-3 py-5">

                {/* Card */}
                <div className="group relative overflow-hidden rounded-[30px] bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl hover:-translate-y-2 transition-all duration-500">

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  {/* Top Gradient */}
                  <div className="h-24 md:h-32 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500"></div>

                  {/* Image */}
                  <div className="relative -mt-14 md:-mt-16 flex justify-center">
                    
                    <div className="relative">
                      
                      {/* Glow */}
                      <div className="absolute inset-0 rounded-full bg-cyan-400 blur-2xl opacity-30"></div>

                      <img
                        src={
                          student.imgLink?.trim()
                            ? student.imgLink
                            : "https://i.ibb.co.com/LzN9NS0z/default.png"
                        }
                        alt={student.name}
                        className="font-elegant relative w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-white shadow-2xl"
                      />

                      {/* Success Badge */}
                      <div className="absolute bottom-1 right-1 bg-yellow-400 text-slate-900 rounded-full p-2 border-2 border-white shadow-lg">
                        <Trophy size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-7 text-center relative z-10">

                    {/* Name */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {student.name}
                    </h3>

                    {/* Batch */}
                    <div className="mt-3 inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-400/20 px-4 py-2 rounded-full text-cyan-300 text-sm font-medium">
                      <GraduationCap size={16} />
                      {student.batch}
                    </div>

                    {/* Info */}
                    <div className="space-y-4 mt-6 text-left">

                      {/* Subject */}
                      <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex items-start gap-4">
                        
                        <div className="bg-cyan-500/20 p-3 rounded-xl">
                          <GraduationCap
                            className="text-cyan-400"
                            size={18}
                          />
                        </div>

                        <div>
                          <p className="text-slate-400 text-xs">
                            বিষয়
                          </p>

                          <h4 className="text-white text-sm md:text-base font-semibold">
                            {student.subject}
                          </h4>
                        </div>
                      </div>

                      {/* Institution */}
                      <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex items-start gap-4">
                        
                        <div className="bg-purple-500/20 p-3 rounded-xl">
                          <School
                            className="text-purple-300"
                            size={18}
                          />
                        </div>

                        <div>
                          <p className="text-slate-400 text-xs">
                            প্রতিষ্ঠান
                          </p>

                          <h4 className="text-white text-sm md:text-base font-semibold leading-relaxed">
                            {student.institutionName}
                          </h4>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Button */}
                    {/* <button className="mt-7 w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 rounded-2xl shadow-xl transition-all duration-300">
                      শিক্ষার্থীর মতামত
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default PreviousStudents;