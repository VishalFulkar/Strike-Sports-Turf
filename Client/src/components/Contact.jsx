import React from 'react';
import { MapPin, Clock, Phone, Mail, Compass } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Contact() {
  const { contactForm, handleContactChange, handleContactSubmit } = useBooking();

  return (
    <section id="contact" className="py-24 bg-[#D5E2D9]/30 border-t border-[#2B4C3F]/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Address, Hours, Maps Link */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-semibold tracking-[0.2em] text-[#2B4C3F] uppercase mb-3">Find Us</h3>
              <h4 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B4C3F] mb-6">Strike Sports Turf</h4>
              <div className="h-1 w-12 bg-[#E5C3A6] mb-8" />

              {/* Info List */}
              <div className="space-y-6 text-sm text-black/75">
                <div className="flex gap-4">
                  <MapPin className="text-[#2B4C3F] shrink-0 mt-0.5" size={20} />
                  <div>
                    <h5 className="font-bold text-black uppercase text-[10px] tracking-wider mb-1">Location Address</h5>
                    <p className="font-light">Multai, Madhya Pradesh, India</p>
                    <a 
                      href="https://maps.app.goo.gl/dZgBUjS1DAUA6adL8" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1.5 text-xs text-[#2B4C3F] font-bold underline decoration-1 underline-offset-4 mt-2 hover:text-emerald-950 transition-colors"
                    >
                      <span>Open in Google Maps</span>
                      <Compass size={12} />
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="text-[#2B4C3F] shrink-0 mt-0.5" size={20} />
                  <div>
                    <h5 className="font-bold text-black uppercase text-[10px] tracking-wider mb-1">Pitch Hours</h5>
                    <p className="font-light">Open Daily: 6:00 AM – 11:00 PM</p>
                    <p className="text-xs text-black/45 mt-0.5">Booking slots are hourly-based.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-[#2B4C3F] shrink-0 mt-0.5" size={20} />
                  <div>
                    <h5 className="font-bold text-black uppercase text-[10px] tracking-wider mb-1">Phone Inquiries</h5>
                    <p className="font-light">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="text-[#2B4C3F] shrink-0 mt-0.5" size={20} />
                  <div>
                    <h5 className="font-bold text-black uppercase text-[10px] tracking-wider mb-1">Email Support</h5>
                    <p className="font-light">info@strikesportsturf.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Link */}
            <div className="mt-10 pt-6 border-t border-[#2B4C3F]/10">
              <h5 className="text-[10px] uppercase font-bold text-black/50 mb-3 tracking-wider">Social Connect</h5>
              <a 
                href="https://www.instagram.com/strike_sports_turf/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2 bg-linear-to-r from-purple-600 via-pink-600 to-yellow-500 text-white rounded-md text-xs font-bold shadow hover:scale-[1.03] transition-transform"
              >
                <InstagramIcon size={14} />
                <span>@strike_sports_turf</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed and Quick Message Form */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Google Maps Interactive Embed */}
            <div className="w-full h-[300px] bg-white rounded-lg shadow-sm border border-black/5 overflow-hidden relative group">
              <iframe 
                title="Strike Sports Turf Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.201239669991!2d78.27567859999999!3d21.7724712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd5c1efa4034991%3A0x47e1b6f728429e7d!2sStrike%20sports%20turf!5e0!3m2!1sen!2sin!4v1781382165538!5m2!1sen!2sin" 
                className="w-full h-full border-0 grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Quick Contact Form */}
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-black/5 shadow-sm">
              <h5 className="font-serif text-lg font-bold text-[#2B4C3F] mb-4">Have Questions? Drop a Message</h5>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <input 
                      type="text" 
                      name="name" 
                      required
                      value={contactForm.name}
                      onChange={handleContactChange}
                      placeholder="Your Name" 
                      className="py-2 bg-transparent text-sm"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input 
                      type="email" 
                      name="email" 
                      required
                      value={contactForm.email}
                      onChange={handleContactChange}
                      placeholder="Your Email" 
                      className="py-2 bg-transparent text-sm"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <textarea 
                    name="message" 
                    rows="3" 
                    required
                    value={contactForm.message}
                    onChange={handleContactChange}
                    placeholder="Type your query here..." 
                    className="py-2 bg-transparent text-sm"
                  />
                </div>
                <button 
                  type="submit"
                  className="px-6 py-2.5 bg-[#2B4C3F] text-white text-xs font-semibold tracking-widest uppercase rounded shadow hover:bg-emerald-950 transition-colors cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
