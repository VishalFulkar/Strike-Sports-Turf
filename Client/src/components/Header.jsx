import React from 'react';
import { Menu, X } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

export default function Header() {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useBooking();

  return (
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
  );
}
