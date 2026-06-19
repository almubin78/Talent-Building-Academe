import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const slides = [
    {
      title: "পদার্থ বিজ্ঞান সমস্যা?",
      description:
        "পদার্থ বিজ্ঞান জানার ইচ্ছা প্রচুর-  কিন্তু কিভাবে কোথায় থেকে শুরু করব?  কোন অংশের পর কোন অংশ করব? সূত্র মুখস্থ রাখি কিন্তু কোন সূত্র কোথায় কিভাবে প্রয়োগ করব?  — এইসব প্রশ্ন যদি মনে ঘুরপাক খায় তবে সাহায্য নিতে পার।",
    },
    {
      title: "রসায়ন মাথায় ঢুকেনা? ",
      description:
        "এই বিষয়টি বেশিরভাগই মুখস্থ বিদ্যার উপর নির্ভরশীল। তবে প্রশ্নসমূহ বিশ্লেষণ করে একটি সাধারণ কিন্তু দুর্দান্ত ফর্মুলা অনুসরন করে বিভিন্ন কৌশলের ভিত্তিতে রসায়ন আয়ত্বে নেয়া যায়। ",
    },
    {
      title: "গণিত MCQ",
      description:
        "৯৫% শিক্ষার্থী গনিতের লিখিত অংশে ভাল করলেও এই MCQ অংশে এসে অনেকটাই চিন্তিত হয়ে পড়ে। বিজ্ঞান বিভাগের শিক্ষার্থীদের এই MCQ নিয়ে সমস্যা সমাধান থাকছে বোনাস হিসেবে। ",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 py-12 md:py-24">
      {/* Blur Effects */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-xl px-5 py-2 rounded-full text-cyan-300 text-xs md:text-sm font-medium shadow-lg">
              ✨ SSC 2027 & SSC 2028 ভর্তি চলছে
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
              এখন Physics,
              <span className="text-cyan-300"> Chemistry</span>
              <br />
              <span className="text-pink-600"> & </span>
              <span className="text-yellow-300"> Math-MCQ  </span>
              <span className="text-green-300">হবে পানির মত সহজ  </span>
            </h1>

            {/* Description */}
            <p className="mt-5 text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              কঠিন বিষয়গুলো সহজভাবে বুঝিয়ে MCQ ভিত্তিক প্রস্তুতির মাধ্যমে
              শিক্ষার্থীদের আত্মবিশ্বাসী করে তোলা হয়।
            </p>

            {/* Buttons */}
            {/* <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-6 py-3 rounded-2xl shadow-2xl transition duration-300">
                ভর্তি হতে যোগাযোগ কর
              </button>

              <button className="border border-white/20 bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-2xl transition">
                বিস্তারিত দেখ
              </button>
            </div> */}

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8 md:mt-10">
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-6">
                <h3 className="text-2xl md:text-4xl font-extrabold text-yellow-300">
                  ১৪
                </h3>

                <p className="text-xs md:text-sm text-slate-300 mt-2 leading-relaxed">
                  মাসে ধাপে ধাপে সম্পূর্ণ প্রস্তুতি
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-6">
                <h3 className="text-2xl md:text-4xl font-extrabold text-cyan-300">
                  ৮৫%+
                </h3>

                <p className="text-xs md:text-sm text-slate-300 mt-2 leading-relaxed">
                  নম্বর প্রাপ্তির লক্ষ্য
                </p>
              </div>
            </div>
          </div>

          {/* Right Slider */}
          <div className="relative">
            {/* Outer Glow */}
            <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full"></div>

            <div className="relative bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[30px] p-3 md:p-6 shadow-2xl">
              <Slider {...sliderSettings}>
                {slides.map((slide, index) => (
                  <div key={index}>
                    <div className="bg-white rounded-[24px] p-5 md:p-8 min-h-[280px] md:min-h-[340px] flex flex-col justify-center">
                      {/* Badge */}
                      <div className="mb-5">
                        <span className="bg-blue-100 text-blue-700 text-xs md:text-sm px-4 py-2 rounded-full font-semibold">
                          ভর্তি চলছে
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 leading-snug">
                        {slide.title}
                      </h2>

                      {/* Description */}
                      <p className="mt-5 text-sm md:text-lg text-gray-600 leading-relaxed">
                        {slide.description}
                      </p>

                      {/* Button */}
                      <div className="mt-7">
                        <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-6 py-3 rounded-2xl font-semibold transition shadow-lg">
                          যোগাযোগ কর
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
