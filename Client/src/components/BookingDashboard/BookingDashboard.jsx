import React from 'react';
import DateSelector from './DateSelector';
import SlotSelector from './SlotSelector';
import PlayerForm from './PlayerForm';
import BookingSummary from './BookingSummary';
import { useBooking } from '../../context/BookingContext';

export default function BookingDashboard() {
  const { handleBookNow } = useBooking();

  return (
    <section id="booking" className="py-24 bg-[#FAF8F5] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-[0.2em] text-[#2B4C3F] uppercase mb-3">Live Booking Center</h2>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B4C3F]">Reserve Your Slot</h3>
          <p className="text-sm text-black/60 font-light mt-3">
            Book the field at ₹800 per hour. Choose your preferred times and fill out your reservation below.
          </p>
        </div>

        <form onSubmit={handleBookNow} className="bg-white rounded-xl shadow-lg border border-black/5 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Form & Date & Time selector */}
          <div className="lg:col-span-8 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-black/5">
            <DateSelector />
            <SlotSelector />
            <PlayerForm />
          </div>

          {/* Right Column: Checkout Summary Panel */}
          <BookingSummary />
        </form>

      </div>
    </section>
  );
}
