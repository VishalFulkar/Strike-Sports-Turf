import React from 'react';
import { Check } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';

export default function BookingSummary() {
  const { 
    selectedSlots, 
    selectedDate, 
    bookingForm, 
    pricePerHour, 
    totalPrice, 
    initialSlots, 
    handleBookNow 
  } = useBooking();

  return (
    <div className="lg:col-span-4 bg-[#FAF8F5]/80 p-6 sm:p-10 flex flex-col justify-between">
      <div>
        <h4 className="font-serif text-2xl font-bold text-[#2B4C3F] mb-6 pb-4 border-b border-black/10">
          Booking Summary
        </h4>

        {/* Summary Info */}
        <div className="space-y-4 text-sm">
          <div className="flex justify-between">
            <span className="text-black/50">Pitch Name</span>
            <span className="font-semibold text-right text-[#2B4C3F]">Strike Sports Turf</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black/50">Location</span>
            <span className="font-semibold text-right">Multai, MP</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black/50">Chosen Date</span>
            <span className="font-semibold text-right">{selectedDate.dayNum} {selectedDate.month}, {selectedDate.dayName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black/50">Sport Format</span>
            <span className="font-semibold text-right">{bookingForm.sport}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black/50">Price Per Hour</span>
            <span className="font-semibold text-right">₹800</span>
          </div>

          {/* Selected Slots List */}
          <div className="pt-4 border-t border-black/5">
            <span className="text-xs uppercase tracking-wider text-black/50 font-bold block mb-2">Selected Hours:</span>
            {selectedSlots.length === 0 ? (
              <span className="text-xs text-red-500 italic">No slots selected yet. Please click available green slots on the left grid.</span>
            ) : (
              <div className="flex flex-wrap gap-1.5">
                {initialSlots
                  .filter(s => selectedSlots.includes(s.id))
                  .map(s => (
                    <span key={s.id} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#2B4C3F] text-white text-xs font-bold shadow-sm">
                      {s.time}
                    </span>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Total pricing and CTA */}
      <div className="mt-10 pt-6 border-t border-black/10">
        <div className="flex justify-between items-baseline mb-6">
          <span className="text-base text-black/60 font-medium">Total Amount:</span>
          <span className="text-3xl font-serif font-bold text-[#2B4C3F] flex items-center">
            ₹{totalPrice}
          </span>
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-[#2B4C3F] text-white text-xs font-bold tracking-widest uppercase rounded-lg shadow-md hover:bg-emerald-950 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <Check size={14} />
          <span>Confirm Booking</span>
        </button>
        <p className="text-[10px] text-center text-black/40 mt-3 font-light">
          * Instant confirmation. Cancellation/rescheduling subject to availability and terms.
        </p>
      </div>
    </div>
  );
}
