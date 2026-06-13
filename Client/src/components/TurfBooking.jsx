import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Calendar, 
  Award, 
  Sun, 
  ShieldCheck, 
  Compass, 
  ArrowRight, 
  Check, 
  MessageSquare,
  Menu,
  X
} from 'lucide-react';

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

export default function TurfBooking() {
  // Navigation State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Booking Form State
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    sport: 'Football'
  });

  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Calendar dates setup (Next 7 days)
  const getNextSevenDays = () => {
    const dates = [];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      dates.push({
        dayName: days[d.getDay()],
        dayNum: d.getDate(),
        month: months[d.getMonth()],
        fullDate: d.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
      });
    }
    return dates;
  };

  const datesList = getNextSevenDays();
  const [selectedDate, setSelectedDate] = useState(datesList[0]);

  // Initial Time Slots Data
  // Available Slots required: 6AM, 7AM, 8AM, 9AM, 10AM
  // We mark 6AM, 7AM, 9AM, 10AM as available (green), and 8AM as booked (red)
  // We also populate other slots for standard operation (6:00 AM - 11:00 PM)
  const initialSlots = [
    { id: '6am', time: '6:00 AM', status: 'available' },
    { id: '7am', time: '7:00 AM', status: 'available' },
    { id: '8am', time: '8:00 AM', status: 'booked' },
    { id: '9am', time: '9:00 AM', status: 'available' },
    { id: '10am', time: '10:00 AM', status: 'available' },
    { id: '11am', time: '11:00 AM', status: 'booked' },
    { id: '12pm', time: '12:00 PM', status: 'booked' },
    { id: '1pm', time: '1:00 PM', status: 'available' },
    { id: '2pm', time: '2:00 PM', status: 'available' },
    { id: '3pm', time: '3:00 PM', status: 'booked' },
    { id: '4pm', time: '4:00 PM', status: 'available' },
    { id: '5pm', time: '5:00 PM', status: 'available' },
    { id: '6pm', time: '6:00 PM', status: 'booked' },
    { id: '7pm', time: '7:00 PM', status: 'booked' },
    { id: '8pm', time: '8:00 PM', status: 'booked' },
    { id: '9pm', time: '9:00 PM', status: 'available' },
    { id: '10pm', time: '10:00 PM', status: 'available' },
  ];

  const [selectedSlots, setSelectedSlots] = useState([]);

  // Handle slot selection (Toggle blue highlight)
  const handleSlotClick = (slot) => {
    if (slot.status === 'booked') return;
    
    if (selectedSlots.includes(slot.id)) {
      setSelectedSlots(selectedSlots.filter(id => id !== slot.id));
    } else {
      setSelectedSlots([...selectedSlots, slot.id]);
    }
  };

  const handleInputChange = (e) => {
    setBookingForm({
      ...bookingForm,
      [e.target.name]: e.target.value
    });
  };

  const handleContactChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  // Pricing details
  const pricePerHour = 800;
  const totalPrice = selectedSlots.length * pricePerHour;

  // Handle final booking click
  const handleBookNow = (e) => {
    e.preventDefault();

    // Validations
    if (!bookingForm.name || !bookingForm.phone || !bookingForm.email) {
      alert("Please fill in your Name, Phone Number, and Email Address to proceed.");
      return;
    }

    if (selectedSlots.length === 0) {
      alert("Please select at least one available time slot (highlighted in Green) for your booking.");
      return;
    }

    // Get time strings for selected slots
    const bookedTimes = initialSlots
      .filter(s => selectedSlots.includes(s.id))
      .map(s => s.time)
      .join(', ');

    // Alert details
    const alertMessage = `
🎉 BOOKING CONFIRMED! 🎉

Turf Details:
• Name: Strike Sports Turf
• Location: Multai, Madhya Pradesh
• Map Link: https://maps.app.goo.gl/dZgBUjS1DAUA6adL8

Booking Details:
• Customer Name: ${bookingForm.name}
• Contact: ${bookingForm.phone}
• Email: ${bookingForm.email}
• Date: ${selectedDate.fullDate}
• Chosen Sport: ${bookingForm.sport}
• Booked Slot(s): ${bookedTimes}
• Total Price: ₹${totalPrice} (₹${pricePerHour}/hour)

Thank you for booking with us! See you on the pitch!
`;
    alert(alertMessage);

    // Reset slot selection and inputs on successful mock booking
    setSelectedSlots([]);
    setBookingForm({
      name: '',
      email: '',
      phone: '',
      sport: 'Football'
    });
  };

  // Handle Contact Submit
  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      alert("Please complete the contact form details before sending.");
      return;
    }
    alert(`Thank you, ${contactForm.name}! Your message has been received. We will get back to you shortly.`);
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#22252A] font-sans selection:bg-[#2B4C3F] selection:text-white">
      
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-[#2B4C3F] uppercase">
              Strike Sports <span className="text-emerald-500">Turf</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase text-black/60">
            <a href="#" className="hover:text-[#2B4C3F] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#2B4C3F] transition-colors">Why Us</a>
            <a href="#booking" className="hover:text-[#2B4C3F] transition-colors">Book Online</a>
            <a href="#gallery" className="hover:text-[#2B4C3F] transition-colors">Gallery</a>
            <a href="#testimonials" className="hover:text-[#2B4C3F] transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-[#2B4C3F] transition-colors">Contact</a>
          </nav>

          {/* Book Now Button */}
          <div className="hidden md:block">
            <a 
              href="#booking" 
              className="inline-block px-6 py-2.5 border border-[#2B4C3F] text-[#2B4C3F] hover:bg-[#2B4C3F] hover:text-white text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded"
            >
              Book Turf
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-black/80 hover:text-[#2B4C3F] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#FAF8F5] border-t border-black/5 py-6 px-4 absolute top-20 left-0 w-full shadow-lg flex flex-col gap-4 text-center">
            <a 
              href="#" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-medium tracking-widest uppercase py-2 hover:bg-[#2B4C3F]/5 rounded"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-medium tracking-widest uppercase py-2 hover:bg-[#2B4C3F]/5 rounded"
            >
              Why Us
            </a>
            <a 
              href="#booking" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-medium tracking-widest uppercase py-2 hover:bg-[#2B4C3F]/5 rounded"
            >
              Book Online
            </a>
            <a 
              href="#gallery" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-medium tracking-widest uppercase py-2 hover:bg-[#2B4C3F]/5 rounded"
            >
              Gallery
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-medium tracking-widest uppercase py-2 hover:bg-[#2B4C3F]/5 rounded"
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-medium tracking-widest uppercase py-2 hover:bg-[#2B4C3F]/5 rounded"
            >
              Contact
            </a>
            <a 
              href="#booking" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-2 py-3 bg-[#2B4C3F] text-white text-xs font-semibold tracking-widest uppercase rounded shadow hover:bg-emerald-950 transition-colors"
            >
              Book Now
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center bg-black overflow-hidden">
        {/* Background Image of Turf with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/turf-main.jpg" 
            alt="Strike Sports Turf Arena" 
            className="w-full h-full object-cover opacity-60 scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-[#2B4C3F]/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20 flex flex-col items-center">
          <span className="text-[#E5C3A6] text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold mb-4 block">
            ⭐ Multai's Premier Sports Destination ⭐
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-normal leading-[1.1] mb-6 drop-shadow-md">
            Strike Sports Turf
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-white/80 font-light mb-10 leading-relaxed">
            Experience peak performance on our professional artificial turf. Located in Multai, Madhya Pradesh. Available from 6:00 AM to 11:00 PM daily.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
            <a 
              href="#booking" 
              className="w-full sm:w-auto px-8 py-4 bg-[#E5C3A6] text-[#22252A] font-bold text-xs tracking-widest uppercase rounded shadow-lg hover:bg-[#FAF8F5] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Book Pitch Now</span>
              <ArrowRight size={16} />
            </a>
            <a 
              href="#about" 
              className="w-full sm:w-auto px-8 py-4 border border-white/40 text-white font-semibold text-xs tracking-widest uppercase rounded backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl mt-16 pt-10 border-t border-white/10 text-white/90">
            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-2xl font-bold font-serif text-[#E5C3A6]">₹800</span>
              <span className="text-xs uppercase tracking-wider text-white/60 mt-1">Per Hour Only</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-2xl font-bold font-serif text-[#E5C3A6]">6 AM - 11 PM</span>
              <span className="text-xs uppercase tracking-wider text-white/60 mt-1">Timings</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl sm:text-2xl font-bold font-serif text-[#E5C3A6]">Multai</span>
              <span className="text-xs uppercase tracking-wider text-white/60 mt-1">Madhya Pradesh</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US / FEATURES */}
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

      {/* HOW TO BOOK - STEPS */}
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

      {/* INTERACTIVE BOOKING DASHBOARD */}
      <section id="booking" className="py-24 bg-[#FAF8F5] scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-semibold tracking-[0.2em] text-[#2B4C3F] uppercase mb-3">Live Booking Center</h2>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B4C3F]">Reserve Your Slot</h3>
            <p className="text-sm text-black/60 font-light mt-3">
              Book the field at ₹800 per hour. Choose your preferred times and fill out your reservation below.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-black/5 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Form & Date & Time selector */}
            <div className="lg:col-span-8 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-black/5">
              
              <form onSubmit={handleBookNow}>
                
                {/* 1. Date Selector */}
                <div className="mb-8">
                  <label className="block text-xs font-bold tracking-widest uppercase text-[#2B4C3F] mb-4 flex items-center gap-1.5">
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

                {/* 2. Grid of Time Slots */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <label className="block text-xs font-bold tracking-widest uppercase text-[#2B4C3F] flex items-center gap-1.5">
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

                {/* 3. User Details Form */}
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-[#2B4C3F] mb-6 flex items-center gap-1.5 border-b border-black/5 pb-2">
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

              </form>

            </div>

            {/* Right Column: Checkout Summary Panel */}
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
                  onClick={handleBookNow}
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

          </div>

        </div>
      </section>

      {/* GALLERY / IMAGES SHOWCASE */}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white" />
              <div className="absolute bottom-4 left-4 bg-[#2B4C3F]/90 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded backdrop-blur-sm">
                Strike Turf Ground View
              </div>
            </div>

            {/* Sub-image column */}
            <div className="md:col-span-4 grid grid-cols-1 gap-4">
              <div className="group relative overflow-hidden rounded-lg shadow-sm border border-black/5 h-[192px]">
                <img 
                  src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800" 
                  alt="Football Action Close-up" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider">Fast-paced Play</span>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-sm border border-black/5 h-[192px]">
                <img 
                  src="https://images.unsplash.com/photo-1531415080290-b9b8bf7228c7?auto=format&fit=crop&q=80&w=800" 
                  alt="Cricket Batsman Play" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider">Box Cricket friendly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
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

      {/* CONTACT & LOCATION */}
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
                  className="inline-flex items-center gap-2.5 px-4 py-2 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 text-white rounded-md text-xs font-bold shadow hover:scale-[1.03] transition-transform"
                >
                  <InstagramIcon size={14} />
                  <span>@strike_sports_turf</span>
                </a>
              </div>
            </div>

            {/* Right Column: Google Maps Embed and Quick Message Form */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Google Maps Interactive Embed (Simplified Mock Representation or Iframe) */}
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
                        className="py-2.5 text-xs bg-transparent"
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
                        className="py-2.5 text-xs bg-transparent"
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
                      className="py-2.5 text-xs bg-transparent border-b border-black/20 focus:border-[#2B4C3F] outline-none"
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

      {/* FOOTER */}
      <footer className="bg-[#22252A] text-white/50 text-xs py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-serif text-base font-bold text-white tracking-widest uppercase">
              Strike Sports Turf
            </span>
            <p className="font-light mt-1 text-center md:text-left">
              © {new Date().getFullYear()} Strike Sports Turf, Multai, MP. All Rights Reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="https://www.instagram.com/strike_sports_turf/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <InstagramIcon size={14} />
              <span>Instagram</span>
            </a>
            <span className="text-white/10">|</span>
            <a 
              href="https://maps.app.goo.gl/dZgBUjS1DAUA6adL8" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Compass size={14} />
              <span>Google Maps</span>
            </a>
          </div>

        </div>
      </footer>

    </div>
  );
}
