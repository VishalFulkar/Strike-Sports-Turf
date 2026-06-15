import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function BookingSteps() {
  return (
    <section className="py-20 bg-[#D5E2D9]/40 border-y border-[#2B4C3F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          <div className="lg:pr-8 text-center lg:text-left">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-[#2B4C3F] uppercase mb-3">Seamless Experience</h3>
            <h4 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B4C3F]">3 Easy Steps to Secure Your Slot</h4>
            <p className="text-sm text-black/60 font-light mt-4 leading-relaxed">
              Enjoy hassle-free online booking. Check availability, input your contact info, select sport preference, and receive instant scheduling details.
            </p>
            <a 
              href="#booking"
              className="inline-flex items-center gap-2 text-sm text-[#2B4C3F] font-semibold underline decoration-2 underline-offset-4 mt-6 hover:text-emerald-950 transition-colors"
            >
              <span>Jump to Reservation Dashboard</span>
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-black/5">
              <span className="font-serif text-4xl font-extrabold text-[#2B4C3F]/20 mb-4">01</span>
              <h5 className="font-bold text-base text-[#2B4C3F] mb-2">Select Date & Time</h5>
              <p className="text-xs text-black/50 leading-relaxed">
                Choose a date and match it with available slots (6:00 AM to 11:00 PM).
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-black/5">
              <span className="font-serif text-4xl font-extrabold text-[#2B4C3F]/20 mb-4">02</span>
              <h5 className="font-bold text-base text-[#2B4C3F] mb-2">Enter Details</h5>
              <p className="text-xs text-black/50 leading-relaxed">
                Fill in your name, contact phone, email, and choose Football or Cricket format.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-black/5">
              <span className="font-serif text-4xl font-extrabold text-[#2B4C3F]/20 mb-4">03</span>
              <h5 className="font-bold text-base text-[#2B4C3F] mb-2">Confirm & Play</h5>
              <p className="text-xs text-black/50 leading-relaxed">
                Click 'Book Now' to secure your slot, view alert details, and hit the grass!
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
