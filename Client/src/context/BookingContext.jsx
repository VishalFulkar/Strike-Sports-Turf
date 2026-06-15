import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

export function BookingProvider({ children }) {
  // Navigation State (Can be shared or local, but we keep it here for accessibility if needed)
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
    if (e && e.preventDefault) e.preventDefault();

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
    if (e && e.preventDefault) e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      alert("Please complete the contact form details before sending.");
      return;
    }
    alert(`Thank you, ${contactForm.name}! Your message has been received. We will get back to you shortly.`);
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <BookingContext.Provider
      value={{
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        bookingForm,
        setBookingForm,
        contactForm,
        setContactForm,
        datesList,
        selectedDate,
        setSelectedDate,
        initialSlots,
        selectedSlots,
        setSelectedSlots,
        handleSlotClick,
        handleInputChange,
        handleContactChange,
        pricePerHour,
        totalPrice,
        handleBookNow,
        handleContactSubmit
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}
