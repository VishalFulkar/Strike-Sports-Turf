import React from 'react';
import { BookingProvider } from './context/BookingContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import BookingSteps from './components/BookingSteps';
import BookingDashboard from './components/BookingDashboard/BookingDashboard';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <BookingProvider>
      <div className="min-h-screen bg-[#FAF8F5] text-[#22252A] font-sans selection:bg-[#2B4C3F] selection:text-white">
        <Header />
        <Hero />
        <Features />
        <BookingSteps />
        <BookingDashboard />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </BookingProvider>
  );
}

export default App;
