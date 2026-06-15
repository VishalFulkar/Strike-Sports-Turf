import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image of Turf with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/turf-main.jpg" 
          alt="Strike Sports Turf Arena" 
          className="w-full h-full object-cover opacity-60 scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-[#2B4C3F]/40" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20 flex flex-col items-center">
        <span className="text-[#E5C3A6] text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold mb-4 block">
          ⭐ Multai's Premier Sports Destination ⭐
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-normal leading-[1.1] mb-6 drop-shadow-md">
          Strike Sports Turf
        </h1>
        <p className="max-w-2xl text-base sm:text-lg text-white/80 font-light mb-10 leading-relaxed">
          Experience peak performance on our professional artificial turf. Located in Multai, Madhya Pradesh. Available from 6:00 AM to 11:00 PM daily.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
          <a 
            href="#booking" 
            className="w-full sm:w-auto px-8 py-4 bg-[#E5C3A6] text-[#22252A] font-bold text-xs tracking-widest uppercase rounded shadow-lg hover:bg-[#FAF8F5] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Book Pitch Now</span>
            <ArrowRight size={16} />
          </a>
          <a 
            href="#about" 
            className="w-full sm:w-auto px-8 py-4 border border-white/40 text-white font-semibold text-xs tracking-widest uppercase rounded backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300"
          >
            Learn More
          </a>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl mt-16 pt-10 border-t border-white/10 text-white/90">
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-bold font-serif text-[#E5C3A6]">₹800</span>
            <span className="text-xs uppercase tracking-wider text-white/60 mt-1">Per Hour Only</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-bold font-serif text-[#E5C3A6]">6 AM - 11 PM</span>
            <span className="text-xs uppercase tracking-wider text-white/60 mt-1">Timings</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-bold font-serif text-[#E5C3A6]">Multai</span>
            <span className="text-xs uppercase tracking-wider text-white/60 mt-1">Madhya Pradesh</span>
          </div>
        </div>
      </div>
    </section>
  );
}
