import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import {
  GraduationCap,
  School,
  CalendarDays,
  Users,
} from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { studentsData } from "../datum/studentData";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [selectedClass, setSelectedClass] = useState("All Classes");
  const [loading, setLoading] = useState(false);

  const classOptions = [
    "All Classes",
    "Class 8",
    "Class 9",
    "Class 10",
  ];

  // Fetch Students
  const fetchStudents = (className) => {
    setLoading(true);

    setTimeout(() => {
      let allStudents = [];

      Object.entries(studentsData).forEach(([key, value]) => {
        const formattedStudents = value.map((student) => ({
          ...student,
          className: key,
        }));

        allStudents.push(...formattedStudents);
      });

      if (className === "All Classes") {
        setStudents(allStudents);
      } else {
        const classMap = {
          "Class 8": "Eight",
          "Class 9": "Nine",
          "Class 10": "Ten",
        };

        setStudents(studentsData[classMap[className]] || []);
      }

      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    fetchStudents(selectedClass);
  }, [selectedClass]);

  // Slider Settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1100,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 700,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-20 px-4">
      
      {/* Blur Background */}
      <div className="absolute top-0 left-0 h-72 w-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-14">
          
          <div>
            <span className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/20 text-cyan-300 px-5 py-2 rounded-full text-sm font-medium">
              <Users size={16} />
              বর্তমান শিক্ষার্থী
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-5 leading-tight">
              বর্তমানে অধ্যায়নরত 
              <span className="text-cyan-400 ml-3">
                 শিক্ষার্থীরা
              </span>
            </h2>

            {/* <p className="text-slate-300 mt-4 max-w-2xl leading-relaxed">
              প্রতিটি শিক্ষার্থীকে ব্যক্তিগতভাবে গাইডলাইন এবং
              ব্যাসিক থেকে বোর্ড প্রশ্ন পর্যন্ত ধাপে ধাপে প্রস্তুত করা হয়।
            </p> */}
          </div>

          {/* Filter */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-5 shadow-2xl">
            
            <label className="block text-slate-300 mb-3 font-medium">
              শ্রেণি নির্বাচন কর
            </label>

            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="bg-slate-900/70 border border-slate-700 text-white px-5 py-3 rounded-2xl outline-none w-full"
            >
              {classOptions.map((option) => (
                <option
                  key={option}
                  value={option}
                  className="bg-slate-900"
                >
                  {option}
                </option>
              ))}
            </select>

            <div className="mt-4 text-center">
              <span className="text-cyan-300 text-3xl font-bold">
                {students.length}
              </span>

              <p className="text-slate-400 text-sm mt-1">
                জন শিক্ষার্থী
              </p>
            </div>
          </div>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="h-14 w-14 rounded-full border-4 border-slate-700 border-t-cyan-400 animate-spin"></div>
          </div>
        ) : students.length === 0 ? (
          <div className="text-center py-20 text-slate-400 text-xl">
            কোনো শিক্ষার্থী পাওয়া যায়নি
          </div>
        ) : (
          <Slider {...sliderSettings}>
            {students.map((student) => (
              <div key={student.id} className="px-3 py-5">
                
                {/* Card */}
                <div className="group relative overflow-hidden rounded-[28px] bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl hover:-translate-y-2 transition-all duration-500">
  
  {/* Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

  {/* Top Gradient */}
  <div className="h-20 md:h-28 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500"></div>

  {/* Image */}
  <div className="relative -mt-12 md:-mt-16 flex justify-center">
    <div className="relative">
      <img
        src={
          student.imgLink?.trim()
            ? student.imgLink
            : "https://i.ibb.co.com/LzN9NS0z/default.png"
        }
        alt={student.name}
        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-2xl"
      />

      {/* Online Badge */}
      <div className="absolute bottom-1 right-1 h-4 w-4 rounded-full bg-green-400 border-2 border-white"></div>
    </div>
  </div>

  {/* Content */}
  <div className="p-4 md:p-7 text-center relative z-10">
    
    {/* Name */}
    <h3 className="font-classic  text-2xl md:text-2xl font-bold text-white ">
      {student.name}
    </h3>

    <p className="text-cyan-300 mt-1 text-sm md:text-base font-medium">
      {student.subject}
    </p>

    {/* Info */}
    <div className="space-y-3 mt-5 text-left">

      {/* Class */}
      <div className="flex items-start gap-3 bg-white/5 rounded-2xl p-3">
        <GraduationCap className="text-cyan-400 mt-1" size={18} />

        <div>
          <p className="text-slate-400 text-xs">
            শ্রেণি
          </p>

          <h4 className="text-white text-sm font-semibold">
            {student.class_name}
          </h4>
        </div>
      </div>

      {/* Institution */}
      <div className="flex items-start gap-3 bg-white/5 rounded-2xl p-3">
        <School className="text-purple-400 mt-1" size={18} />

        <div>
          <p className="text-slate-400 text-xs">
            প্রতিষ্ঠান
          </p>

          <h4 className="text-white text-sm font-semibold leading-snug">
            {student.institutionName}
          </h4>
        </div>
      </div>

      {/* Year */}
      <div className="flex items-start gap-3 bg-white/5 rounded-2xl p-3">
        <CalendarDays className="text-yellow-300 mt-1" size={18} />

        <div>
          <p className="text-slate-400 text-xs">
            Batch Time:  
          </p>

          <h4 className="text-white text-sm font-semibold">
            {student.batchTime}
          </h4>
        </div>
      </div>
      {/* Year
      <div className="flex items-start gap-3 bg-white/5 rounded-2xl p-3">
        <CalendarDays className="text-yellow-300 mt-1" size={18} />

        <div>
          <p className="text-slate-400 text-xs">
            ভর্তির তথ্যঃ 
          </p>

          <h4 className="text-white text-sm font-semibold">
            {student.joinYear}
          </h4>
        </div>
      </div> */}
    </div>

    {/* Button */}
    {/* <button className="mt-5 w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm md:text-base font-semibold py-3 rounded-2xl transition duration-300 shadow-lg">
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

export default Students;