import React from 'react';

const Header = () => {
    return (
        <header className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 text-white py-16 md:py-24">
  
  {/* Background Blur */}
  <div className="absolute top-0 left-0 h-72 w-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 h-72 w-72 bg-blue-500/20 blur-3xl rounded-full"></div>

  {/* Grid Effect */}
  <div className="absolute inset-0 opacity-10">
    <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:40px_40px]"></div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    
    <div className="max-w-4xl mx-auto text-center">

      {/* Badge */}
      

      {/* Main Heading */}
      <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
        <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
          Talent Building
        </span>

        <br />

        <span className="text-yellow-300">
          Academy
        </span>
      </h1>

      {/* Teacher */}
      <div className="mt-5 flex justify-center items-center gap-3">
        
        <div className="h-[1px] w-10 bg-cyan-400"></div>

        <p className="text-sm md:text-lg text-slate-300">
          by
          <span className="ml-2 text-cyan-300 font-bold">
            আল মুবিন স্যার
          </span>
        </p>

        <div className="h-[1px] w-10 bg-cyan-400"></div>
      </div>

      {/* Subjects */}
      <p className="mt-7 text-base sm:text-xl md:text-2xl font-medium text-slate-200 leading-relaxed">
        পদার্থবিজ্ঞান 
        <span className="text-cyan-400 mx-2">|</span>

        রসায়ন 
        <span className="text-cyan-400 mx-2">|</span>

        গণিত MCQ
      </p>

      {/* Description */}
      <p className="mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed">
        Basic থেকে Advanced পর্যন্ত ধাপে ধাপে প্রস্তুতি নিয়ে সর্বোচ্চ নাম্বার পাওয়ার মত 
         আত্মবিশ্বাসী করে তোলা হয়।
      </p>

      

      
    </div>
  </div>
</header>
    );
};

export default Header;