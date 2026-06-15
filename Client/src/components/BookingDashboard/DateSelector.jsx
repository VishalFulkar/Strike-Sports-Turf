import React from 'react';
import { Calendar } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';

export default function DateSelector() {
  const { datesList, selectedDate, setSelectedDate } = useBooking();

  return (
    <div className="mb-8">
      <label className="block text-xs font-bold tracking-widest uppercase text-[#2B4C3F] mb-4 items-center gap-1.5">
        <Calendar size={14} />
        <span>1. Select Playing Date</span>
      </label>
      
      {/* Date Cards Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-7 gap-2">
        {datesList.map((d, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelectedDate(d)}
            className={`py-3 px-2 rounded-lg border text-center transition-all flex flex-col items-center justify-center cursor-pointer ${
              selectedDate.dayNum === d.dayNum 
              ? 'border-[#2B4C3F] bg-[#2B4C3F]/5 text-[#2B4C3F] font-bold shadow-sm'
              : 'border-black/5 hover:border-black/20 text-black/70'
            }`}
          >
            <span className="text-[10px] uppercase tracking-wider text-black/40 font-semibold">{d.dayName}</span>
            <span className="text-lg font-serif mt-0.5">{d.dayNum}</span>
            <span className="text-[10px] uppercase font-light">{d.month}</span>
          </button>
        ))}
      </div>
      <p className="text-xs text-[#2B4C3F]/80 font-medium mt-2.5 italic">
        Selected Date: {selectedDate.fullDate}
      </p>
    </div>
  );
}
