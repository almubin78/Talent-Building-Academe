import React from "react";
import {
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import {
  GraduationCap,
  BookOpen,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-20 px-4">
      
      {/* Background Blur */}
      <div className="absolute top-0 left-0 h-72 w-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block bg-cyan-500/20 border border-cyan-400/20 text-cyan-300 px-5 py-2 rounded-full text-sm font-medium">
            যোগাযোগ করুন
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-white">
            তোমার শেখার
            <span className="text-cyan-400 ml-3">
              যাত্রা শুরু হোক
            </span>
          </h2>

          <p className="text-slate-300 mt-5 max-w-2xl mx-auto leading-relaxed">
            Physics, Chemistry এবং Math সহজভাবে বুঝতে এবং
            আত্মবিশ্বাসের সাথে প্রস্তুতি নিতে  যোগাযোগ কর।
          </p>
        </div>

        {/* Main Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="relative overflow-hidden rounded-[35px] bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl p-8 md:p-10">

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>

            <div className="relative z-10 flex flex-col items-center text-center">

              {/* Image */}
              <div className="relative">
                
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full bg-cyan-400 blur-2xl opacity-30"></div>

                <img
                  src="https://i.ibb.co.com/99RN1XPM/me3-removebg-preview.png"
                  alt="Profile"
                  className="relative w-44 h-44 rounded-full object-cover border-4 border-white shadow-2xl"
                />

                {/* Floating Tooltip */}
                <div className="absolute top-2 left-full ml-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs md:text-sm px-4 py-3 rounded-2xl shadow-xl w-max max-w-[220px] text-left">
                  কঠিন বিষয়গুলো সহজভাবে বুঝাতে ভালোবাসি।
                </div>

                {/* Online Badge */}
                <div className="absolute bottom-3 right-3 h-5 w-5 rounded-full bg-green-400 border-2 border-white"></div>
              </div>

              {/* Name */}
              <h2 className="mt-8 text-4xl font-extrabold text-white tracking-wide">
                AL-MUBIN
                <span className="text-cyan-400 ml-2">
                  SARKER
                </span>
              </h2>

              {/* Qualification */}
              <div className="mt-6 space-y-4 w-full">

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4">
                  <div className="bg-cyan-500/20 p-3 rounded-xl">
                    <GraduationCap className="text-cyan-400" />
                  </div>

                  <div className="text-left">
                    <h4 className="text-white font-semibold">
                      অনার্স (পদার্থবিজ্ঞান)
                    </h4>

                    <p className="text-slate-400 text-sm">
                      Physics Instructor
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4">
                  <div className="bg-yellow-500/20 p-3 rounded-xl">
                    <BookOpen className="text-yellow-300" />
                  </div>

                  <div className="text-left">
                    <h4 className="text-white font-semibold">
                      JavaScript Developer
                    </h4>

                    <p className="text-slate-400 text-sm">
                      MERN Stack Enthusiast
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-8 w-full space-y-4">

                {/* Phone */}
                <div className="bg-white/5 rounded-2xl border border-white/10 p-4 flex items-center gap-4 hover:bg-white/10 transition">
                  <div className="bg-cyan-500/20 p-3 rounded-xl">
                    <FaPhoneAlt className="text-cyan-400" />
                  </div>

                  <div className="text-left">
                    <p className="text-slate-400 text-sm">
                      ফোন নাম্বার
                    </p>

                    <h4 className="text-white font-semibold">
                      01701906543
                    </h4>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white/5 rounded-2xl border border-white/10 p-4 flex items-center gap-4 hover:bg-white/10 transition">
                  <div className="bg-purple-500/20 p-3 rounded-xl">
                    <FaEnvelope className="text-purple-300" />
                  </div>

                  <div className="text-left">
                    <p className="text-slate-400 text-sm">
                      ইমেইল
                    </p>

                    <h4 className="text-white font-semibold break-all">
                      almubin78@gmail.com
                    </h4>
                  </div>
                </div>
              </div>

              {/* Facebook Button */}
              <a
                href="https://www.facebook.com/profile.php?id=100012428898735"
                target="_blank"
                rel="noreferrer"
                className="mt-8 w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-4 rounded-2xl transition-all duration-300 shadow-xl"
              >
                <span className="flex items-center justify-center gap-3">
                  <FaFacebookF />
                  Facebook Profile
                </span>
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative overflow-hidden rounded-[35px] bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl p-8 md:p-10">
            
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10"></div>

            <div className="relative z-10">
              
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-cyan-500/20 p-3 rounded-xl">
                  <MessageCircle className="text-cyan-400" />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white">
                    মেসেজ পাঠান
                  </h3>

                  <p className="text-slate-400 mt-1">
                    যেকোনো প্রশ্ন বা তথ্য জানতে যোগাযোগ করুন
                  </p>
                </div>
              </div>

              {/* Form */}
              <form className="space-y-6">

                <div>
                  <label className="block text-slate-300 mb-2">
                    আপনার নাম
                  </label>

                  <input
                    type="text"
                    placeholder="আপনার নাম লিখুন"
                    className="w-full bg-slate-900/60 border border-slate-700 text-white rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">
                    মোবাইল নাম্বার
                  </label>

                  <input
                    type="text"
                    placeholder="01XXXXXXXXX"
                    className="w-full bg-slate-900/60 border border-slate-700 text-white rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-2">
                    আপনার মেসেজ
                  </label>

                  <textarea
                    rows="6"
                    placeholder="আপনার প্রশ্ন লিখুন..."
                    className="w-full bg-slate-900/60 border border-slate-700 text-white rounded-2xl px-5 py-4 outline-none resize-none focus:border-cyan-400 transition"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 rounded-2xl shadow-2xl transition-all duration-300"
                >
                  মেসেজ পাঠান
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;