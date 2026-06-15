import React from 'react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#FAF8F5] scroll-mt-20 border-t border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-[0.2em] text-[#2B4C3F] uppercase mb-3">Player Reviews</h2>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B4C3F]">What Players Are Saying</h3>
          <div className="h-1 w-20 bg-[#E5C3A6] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-xl border border-black/5 shadow-sm relative">
            <span className="text-5xl font-serif text-[#2B4C3F]/20 absolute top-4 left-6 leading-none">“</span>
            <div className="relative z-10">
              <p className="text-sm text-black/70 italic leading-relaxed mb-6 font-light">
                The artificial grass quality here is excellent! Played football with my friends at night under the high floodlights. Superb bounce and great safety nets.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2B4C3F] text-white flex items-center justify-center font-bold text-sm">
                  SK
                </div>
                <div>
                  <h5 className="text-sm font-bold text-[#2B4C3F]">Sameer Khan</h5>
                  <span className="text-[10px] text-black/40 uppercase tracking-wider font-semibold">Football Enthusiast</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-xl border border-black/5 shadow-sm relative">
            <span className="text-5xl font-serif text-[#2B4C3F]/20 absolute top-4 left-6 leading-none">“</span>
            <div className="relative z-10">
              <p className="text-sm text-black/70 italic leading-relaxed mb-6 font-light">
                Highly recommend Strike Sports Turf in Multai. Booking a slot online was so simple and immediate. The box cricket setup is brilliant!
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2B4C3F] text-white flex items-center justify-center font-bold text-sm">
                  AP
                </div>
                <div>
                  <h5 className="text-sm font-bold text-[#2B4C3F]">Anshul Patel</h5>
                  <span className="text-[10px] text-black/40 uppercase tracking-wider font-semibold">Box Cricket Player</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-8 rounded-xl border border-black/5 shadow-sm relative">
            <span className="text-5xl font-serif text-[#2B4C3F]/20 absolute top-4 left-6 leading-none">“</span>
            <div className="relative z-10">
              <p className="text-sm text-black/70 italic leading-relaxed mb-6 font-light">
                The pitch size is perfect for five-a-side matches. The sitting area is clean and they have private parking spaces too. Best sports ground in Multai!
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2B4C3F] text-white flex items-center justify-center font-bold text-sm">
                  RD
                </div>
                <div>
                  <h5 className="text-sm font-bold text-[#2B4C3F]">Rahul Deshmukh</h5>
                  <span className="text-[10px] text-black/40 uppercase tracking-wider font-semibold">Regular Player</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
