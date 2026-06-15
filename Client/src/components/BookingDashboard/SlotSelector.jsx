import React from 'react';
import { Clock } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';

export default function SlotSelector() {
  const { initialSlots, selectedSlots, handleSlotClick } = useBooking();

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <label className="block text-xs font-bold tracking-widest uppercase text-[#2B4C3F] items-center gap-1.5">
          <Clock size={14} />
          <span>2. Select Time Slots (₹800/hr)</span>
        </label>
        <div className="flex gap-4 text-[10px] uppercase tracking-wider font-semibold">
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 block" />
            <span className="text-emerald-700">Available</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 block" />
            <span className="text-red-700">Booked</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 block" />
            <span className="text-blue-700">Selected</span>
          </div>
        </div>
      </div>

      {/* Time Slots Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2.5">
        {initialSlots.map((slot) => {
          const isSelected = selectedSlots.includes(slot.id);
          let btnClasses = '';
          
          if (slot.status === 'booked') {
            btnClasses = 'bg-red-550 border-red-200 text-red-600 cursor-not-allowed opacity-75';
            // Wait, in TurfBooking.jsx it said "bg-red-50" (line 547). Let's use the exact original styling: bg-red-50
            btnClasses = 'bg-red-50 border-red-200 text-red-600 cursor-not-allowed opacity-75';
          } else if (isSelected) {
            btnClasses = 'bg-blue-600 border-blue-600 text-white font-bold shadow-md scale-[1.02]';
          } else {
            btnClasses = 'bg-emerald-50 border-emerald-200 text-emerald-800 hover:border-emerald-500 hover:bg-emerald-100/50';
          }

          return (
            <button
              key={slot.id}
              type="button"
              disabled={slot.status === 'booked'}
              onClick={() => handleSlotClick(slot)}
              className={`py-3 px-1.5 rounded-lg border text-center text-xs font-semibold tracking-wide transition-all cursor-pointer ${btnClasses}`}
            >
              <div className="flex flex-col items-center gap-1">
                <span>{slot.time}</span>
                <span className="text-[8px] uppercase tracking-wider opacity-80">
                  {slot.status === 'booked' ? 'Booked' : isSelected ? 'Selected' : 'Available'}
                </span>
              </div>
            </button>
          );
        })}
      </div>
      <p className="text-[11px] text-black/40 mt-3 font-light leading-relaxed">
        * Available Slots required: 6AM, 7AM, 8AM, 9AM, 10AM (6AM, 7AM, 9AM, 10AM marked Available; 8AM marked Booked). Other day hours are listed for complete schedule.
      </p>
    </div>
  );
}
