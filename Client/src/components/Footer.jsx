import React from 'react';
import { Compass } from 'lucide-react';

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

export default function Footer() {
  return (
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
  );
}
