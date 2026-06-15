import React from 'react';

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#D5E2D9]/20 scroll-mt-20 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-[0.2em] text-[#2B4C3F] uppercase mb-3">Live Visuals</h2>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2B4C3F]">
            Step Inside the Arena
          </h3>
          <div className="h-1 w-20 bg-[#E5C3A6] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Main Image (Occupies large column space) */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-lg shadow-sm border border-black/5 h-[400px]">
            <img 
              src="/turf-main.jpg" 
              alt="Strike Sports Turf Main Ground" 
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white" />
            <div className="absolute bottom-4 left-4 bg-[#2B4C3F]/90 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded backdrop-blur-sm">
              Strike Turf Ground View
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
