// client/src/components/PhysicsRoadmap.js

import React, { useState } from "react";
import {
  BookOpen,
  FlaskConical,
  Calculator,
  Clock3,
  FileCheck2,
  ChevronDown,
} from "lucide-react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const categories = {
  "১ম ধাপ": [
    {
      id: 1,
      duration: "৪ মাস",
      exam: "প্রতি মাসে ১ টি এক্সাম",
      physics:
        "পদার্থবিজ্ঞানের ব্যাসিক বিষয়গুলো সহজভাবে বুঝানো হবে এবং অনুধাবন ও উচ্চতর দক্ষতামূলক প্রশ্ন সমাধানের কৌশল শেখানো হবে।",
      chemistry:
        "রসায়নের জ্ঞানমূলক ও অনুধাবনমূলক প্রশ্ন, যৌগের সংকেত ও গুরুত্বপূর্ণ রাসায়নিক বিক্রিয়া শেখানো হবে। এছাড়াও গণিতের সাধারণ ভুলগুলো আলোচনা করা হবে।",
      result:
        "এই ধাপ শেষে পদার্থবিজ্ঞানের বোর্ড প্রশ্নের প্রায় ৬০% সমাধান করতে পারবে,এবং রসায়ন ও গণিত ভীতি দূর হয়ে আত্মবিশ্বাস জন্ম নেবে ইনশা-আল্লাহ।",
    },
  ],

  "২য় ধাপ": [
    {
      id: 2,
      duration: "৬ মাস",
      exam: "প্রতি মাসে ২ টি এক্সাম",
      physics:
        "পদার্থবিজ্ঞানের জটিল বিষয়গুলো সহজভাবে বুঝার জন্য গভীর অনুশীলন করানো হবে। একটি সমস্যা সমাধানে একাধিক সমাধান কিভাবে বের করা যায় তার কৌশল আয়ত্বে নেয়া হবে।",
      chemistry:
        "রসায়নের প্রয়োগ ও উচ্চতর দক্ষতামূলক প্রশ্ন এবং গণিত MCQ সমাধানের বিশেষ অনুশীলন করানো হবে। গণিতের সুত্রগুলো মুখস্থ না করে কিভাবে নিজে নিজে বানানো যায় তার কৌশল শেখানো হবে।",
      result:
        "এই ধাপ শেষে পদার্থবিজ্ঞানের প্রায় ৯০% এবং রসায়নের ৭০% প্রশ্ন  সহজ মনে হবে। এছাড়াও গণিতের MCQ সমাধানে আত্মবিশ্বাসের জন্ম নেবে। ইনশা-আল্লাহ।",
    },
  ],

  "৩য় ধাপ": [
    {
      id: 3,
      duration: "৪ মাস",
      exam: "প্রতি মাসে ৩/৪ টি এক্সাম",
      physics:
        "পুরো বই রিভিশন এবং ৯০%-১০০% কমন পাওয়ার মত গুরুত্বপূর্ণ প্রশ্ন অনুশীলন করানো হবে।",
      chemistry:
        "রসায়ন বিজ্ঞানের পুর্বের বোর্ড সমুহে আসা গুরুত্বপূর্ন প্রশ্নের সমাধান করতে পারবে ও গণিতের MCQ যত রকম প্রশ্ন হতে পারে তার সম্পূর্ণ অনুশীলন করানো হবে।",
      result:
        "আলোচ্য তিনটি বিষয়েই  চূড়ান্ত প্রস্তুতির মাধ্যমে আত্মবিশ্বাসের সাথে পরীক্ষায় অংশগ্রহণ করতে পারবে ইনশা-আল্লাহ।",
    },
  ],
};

const PhysicsRoadmap = () => {
  const [activeStep, setActiveStep] = useState(null);

  // Get the current step data
  const currentPost = activeStep ? categories[activeStep][0] : null;

  // Get all step keys
  const stepKeys = Object.keys(categories);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-20 px-4">
      {/* Blur Effect */}
      <div className="absolute top-0 left-0 h-72 w-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="bg-cyan-500/20 text-cyan-300 px-5 py-2 rounded-full text-sm font-medium border border-cyan-400/20">
            Roadmap to Success
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-white leading-tight">
            ধাপে ধাপে Physics, Chemistry & Math MCQ
            <span className="block text-cyan-400 mt-2">
              সমাধান করার পূর্ণ পরিকল্পনা
            </span>
          </h1>

          <p className="mt-6 text-slate-300 max-w-3xl mx-auto leading-relaxed text-lg">
            এমনভাবে কোর্স সাজানো হয়েছে যাতে শিক্ষার্থীরা <span className="text-lg text-yellow-400"> চাপ ছাড়াই </span>
            ধীরে ধীরে <span className="text-lg text-yellow-400">  ব্যাসিক থেকে শুরু করে বোর্ড প্রশ্ন সমাধানে </span> দক্ষতা অর্জন করতে পারে।
          </p>
        </div>

        {/* Step Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          {stepKeys.map((step) => (
            <button
              key={step}
              onClick={() => setActiveStep(step)}
              className={classNames(
                "px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 outline-none",
                activeStep === step
                  ? "bg-cyan-500 text-white shadow-2xl scale-105"
                  : "bg-white/10 text-slate-300 hover:bg-white/20"
              )}
            >
              {step}
            </button>
          ))}
        </div>

        {/* Content - Only shows when a button is clicked */}
        {activeStep && currentPost && (
          <div className="animate-fadeIn">
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/10 backdrop-blur-xl p-8 md:p-12 shadow-2xl">
              {/* Top Info */}
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="bg-cyan-500/20 border border-cyan-400/20 px-5 py-3 rounded-xl text-cyan-300 font-semibold flex items-center gap-2">
                  <Clock3 size={18} />
                  সময়ঃ {currentPost.duration}
                </div>

                <div className="bg-purple-500/20 border border-purple-400/20 px-5 py-3 rounded-xl text-purple-300 font-semibold flex items-center gap-2">
                  <FileCheck2 size={18} />
                  {currentPost.exam}
                </div>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Physics */}
                <div className="bg-slate-900/50 rounded-3xl p-6 border border-cyan-500/20 hover:scale-[1.02] transition">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-cyan-500/20 p-3 rounded-xl">
                      <BookOpen className="text-cyan-400" />
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                      পদার্থবিজ্ঞান
                    </h3>
                  </div>

                  <p className="text-slate-300 leading-relaxed">
                    {currentPost.physics}
                  </p>
                </div>

                {/* Chemistry + Math */}
                <div className="bg-slate-900/50 rounded-3xl p-6 border border-purple-500/20 hover:scale-[1.02] transition">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-500/20 p-3 rounded-xl">
                      <FlaskConical className="text-purple-400" />
                    </div>

                    <div className="bg-yellow-500/20 p-3 rounded-xl">
                      <Calculator className="text-yellow-300" />
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                      রসায়ন + গণিত
                    </h3>
                  </div>

                  <p className="text-slate-300 leading-relaxed">
                    {currentPost.chemistry}
                  </p>
                </div>
              </div>

              {/* Result */}
              <div className="mt-8 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/20 p-6">
                <h3 className="text-xl font-bold text-cyan-300 mb-3">
                  এই ধাপ শেষে যা হবে
                </h3>

                <p className="text-slate-200 leading-relaxed text-lg">
                  {currentPost.result}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Optional: Message when no button is clicked */}
        {!activeStep && (
          <div className="text-center text-slate-400 py-12">
            <p className="text-lg">বিস্তারিত দেখতে <span  className="rounded text-cyan-200  text-xl border border-gray-400 px-2">☝☝ উপরের ☝☝</span> যেকোনো ধাপে ক্লিক কর </p>
            <ChevronDown className="mx-auto mt-4 text-cyan-400 animate-bounce" size={32} />
          </div>
        )}
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default PhysicsRoadmap;