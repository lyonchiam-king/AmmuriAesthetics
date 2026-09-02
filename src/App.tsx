import React, { useState } from 'react';
import { GoogleSheetsBar } from './components/GoogleSheetsBar';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TreatmentMatcher } from './components/TreatmentMatcher';
import { ServiceCards } from './components/ServiceCards';
import { MeetTheTeam } from './components/MeetTheTeam';
import { SocialProof } from './components/SocialProof';
import { LocationAndHours } from './components/LocationAndHours';
import { ConnectSection } from './components/ConnectSection';
import { Footer } from './components/Footer';
import { MobileFloatingBar } from './components/MobileFloatingBar';
import { EnquiryModal } from './components/EnquiryModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [defaultTreatment, setDefaultTreatment] = useState<string | undefined>(undefined);
  const [sheetsUpdateTrigger, setSheetsUpdateTrigger] = useState<number>(0);

  const handleOpenBooking = (treatmentName?: string) => {
    setDefaultTreatment(treatmentName);
    setBookingModalOpen(true);
  };

  const handleEnquirySubmitted = () => {
    setSheetsUpdateTrigger(prev => prev + 1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCF8] text-[#2C2C2C] selection:bg-[#D48C70]/20 selection:text-[#2C2C2C]">
      
      {/* Top Google Sheets Connector Bar */}
      <GoogleSheetsBar lastUpdatedTrigger={sheetsUpdateTrigger} />

      {/* Main Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Scrollable Content */}
      <main className="flex-1">
        
        {/* 1. Hero Section */}
        <HeroSection onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Interactive Treatment Matcher */}
        <TreatmentMatcher />

        {/* 3. Service Cards with 'Mirror Wipe' Before/After */}
        <ServiceCards onOpenBooking={handleOpenBooking} />

        {/* 4. Meet the Team (Deepika & Ammuri) */}
        <MeetTheTeam />

        {/* 5. Social Proof & Reviews */}
        <SocialProof />

        {/* 6. Location, Map & Hours */}
        <LocationAndHours />

        {/* 7. Connect Links */}
        <ConnectSection />

      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Bottom Bar */}
      <MobileFloatingBar />

      {/* Booking / Enquiry Modal */}
      <EnquiryModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultTreatmentName={defaultTreatment}
        onEnquirySubmitted={handleEnquirySubmitted}
      />

    </div>
  );
}
