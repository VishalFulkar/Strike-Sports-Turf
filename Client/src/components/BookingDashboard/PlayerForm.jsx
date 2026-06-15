import React from 'react';
import { MessageSquare } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';

export default function PlayerForm() {
  const { bookingForm, handleInputChange } = useBooking();

  return (
    <div>
      <label className="block text-xs font-bold tracking-widest uppercase text-[#2B4C3F] mb-6 items-center gap-1.5 border-b border-black/5 pb-2">
        <MessageSquare size={14} />
        <span>3. Fill Player & Sport Information</span>
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-[10px] uppercase font-bold text-black/50 mb-1 tracking-wider">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={bookingForm.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            className="py-2 bg-transparent text-sm"
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-[10px] uppercase font-bold text-black/50 mb-1 tracking-wider">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            value={bookingForm.phone}
            onChange={handleInputChange}
            placeholder="Enter phone number"
            className="py-2 bg-transparent text-sm"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-[10px] uppercase font-bold text-black/50 mb-1 tracking-wider">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={bookingForm.email}
            onChange={handleInputChange}
            placeholder="Enter email address"
            className="py-2 bg-transparent text-sm"
          />
        </div>

        {/* Preferred Sport */}
        <div className="flex flex-col">
          <label htmlFor="sport" className="text-[10px] uppercase font-bold text-black/50 mb-1 tracking-wider">
            Select Sport Format
          </label>
          <select
            name="sport"
            id="sport"
            value={bookingForm.sport}
            onChange={handleInputChange}
            className="py-2 bg-transparent text-sm border-b border-black/20 focus:border-[#2B4C3F] outline-none cursor-pointer"
          >
            <option value="Football">Football (5-v-5 / 6-v-6)</option>
            <option value="Cricket">Box Cricket</option>
            <option value="Other">Other Sports</option>
          </select>
        </div>
      </div>
    </div>
  );
}
