import React from 'react';
import { Award, Sun, ShieldCheck, Compass } from 'lucide-react';

export default function Features() {
  return (
    <section id="about" className="py-24 bg-[#FAF8F5] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-[0.2em] text-[#2B4C3F] uppercase mb-3">Designed for the Play</h2>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2B4C3F]">
            Why Play at Strike Sports Turf?
          </h3>
          <div className="h-1 w-20 bg-[#E5C3A6] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-[#FAF8F5] p-8 border border-black/5 hover:border-[#2B4C3F]/20 hover:bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-[#D5E2D9] flex items-center justify-center text-[#2B4C3F] mb-6 group-hover:scale-110 transition-transform">
              <Award size={28} />
            </div>
            <h4 className="font-serif text-xl font-bold text-[#2B4C3F] mb-3">Premium Grass Quality</h4>
            <p className="text-sm text-black/60 leading-relaxed font-light">
              Best quality grass minimizing knee/ankle strain while maintaining perfect ball bounce.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#FAF8F5] p-8 border border-black/5 hover:border-[#2B4C3F]/20 hover:bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-[#D5E2D9] flex items-center justify-center text-[#2B4C3F] mb-6 group-hover:scale-110 transition-transform">
              <Sun size={28} />
            </div>
            <h4 className="font-serif text-xl font-bold text-[#2B4C3F] mb-3">HD Floodlights</h4>
            <p className="text-sm text-black/60 leading-relaxed font-light">
              Shadow-free high-intensity LED floodlights illuminate every corner of the pitch, offering the ultimate night match experience.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#FAF8F5] p-8 border border-black/5 hover:border-[#2B4C3F]/20 hover:bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-[#D5E2D9] flex items-center justify-center text-[#2B4C3F] mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck size={28} />
            </div>
            <h4 className="font-serif text-xl font-bold text-[#2B4C3F] mb-3">Enclosed Cage Setup</h4>
            <p className="text-sm text-black/60 leading-relaxed font-light">
              Full high-tension safety nets on all sides and ceiling allow non-stop, continuous game play without worry of losing the ball.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-[#FAF8F5] p-8 border border-black/5 hover:border-[#2B4C3F]/20 hover:bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-[#D5E2D9] flex items-center justify-center text-[#2B4C3F] mb-6 group-hover:scale-110 transition-transform">
              <Compass size={28} />
            </div>
            <h4 className="font-serif text-xl font-bold text-[#2B4C3F] mb-3">Excellent Amenities</h4>
            <p className="text-sm text-black/60 leading-relaxed font-light">
              Features modern changing areas, clean washrooms, spacious spectator seats, private parking, and on-site mineral water refreshments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
