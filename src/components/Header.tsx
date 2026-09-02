import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: (treatmentName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappUrl = "https://wa.me/message/EIQN5EXNKG2TN1";

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FDFCF8]/95 backdrop-blur-md border-b border-[#8C8C8C]/20 transition-all duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo / Title */}
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
          className="flex flex-col group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D48C70] rounded-lg p-1"
        >
          <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#2C2C2C] group-hover:text-[#D48C70] transition-colors">
            Ammuri Aesthetics
          </span>
          <span className="text-xs text-[#8C8C8C] flex items-center gap-1 font-medium">
            <MapPin className="w-3 h-3 text-[#D48C70]" />
            Ealing, London W5
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#2C2C2C]">
          <button 
            onClick={() => scrollToSection('treatments')} 
            className="hover:text-[#D48C70] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D48C70] rounded px-2 py-1"
          >
            Treatments & Pricing
          </button>
          <button 
            onClick={() => scrollToSection('matcher')} 
            className="hover:text-[#D48C70] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D48C70] rounded px-2 py-1"
          >
            Treatment Finder
          </button>
          <button 
            onClick={() => scrollToSection('team')} 
            className="hover:text-[#D48C70] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D48C70] rounded px-2 py-1"
          >
            Meet Deepika & Ammuri
          </button>
          <button 
            onClick={() => scrollToSection('location')} 
            className="hover:text-[#D48C70] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D48C70] rounded px-2 py-1"
          >
            Location & Hours
          </button>
        </nav>

        {/* Desktop Header Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+447391039241"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 text-[#2C2C2C] bg-[#FFFFFF] border border-[#8C8C8C]/30 rounded-lg hover:border-[#D48C70] transition-all"
            title="Call Ammuri Aesthetics"
          >
            <Phone className="w-3.5 h-3.5 text-[#D48C70]" />
            +44 7391 039241
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-lg transition-all shadow-sm active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="inline-flex items-center text-xs font-semibold px-4 py-2.5 text-white bg-[#D48C70] hover:bg-[#B57359] active:bg-[#965A45] rounded-lg transition-all active:scale-95"
          >
            Enquire
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium px-3 py-2 bg-[#25D366] text-white rounded-lg active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            WhatsApp
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#2C2C2C] hover:bg-[#8C8C8C]/10 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D48C70]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFFFF] border-b border-[#8C8C8C]/20 px-4 py-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3 font-medium text-base text-[#2C2C2C]">
            <button 
              onClick={() => scrollToSection('treatments')} 
              className="text-left py-2 border-b border-[#8C8C8C]/10 hover:text-[#D48C70]"
            >
              Treatments & Pricing
            </button>
            <button 
              onClick={() => scrollToSection('matcher')} 
              className="text-left py-2 border-b border-[#8C8C8C]/10 hover:text-[#D48C70]"
            >
              Treatment Matcher Tool
            </button>
            <button 
              onClick={() => scrollToSection('team')} 
              className="text-left py-2 border-b border-[#8C8C8C]/10 hover:text-[#D48C70]"
            >
              Meet Deepika & Ammuri
            </button>
            <button 
              onClick={() => scrollToSection('location')} 
              className="text-left py-2 border-b border-[#8C8C8C]/10 hover:text-[#D48C70]"
            >
              Location & Hours
            </button>
          </nav>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="tel:+447391039241"
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-[#2C2C2C] bg-[#FDFCF8] border border-[#8C8C8C]/30 rounded-xl"
            >
              <Phone className="w-4 h-4 text-[#D48C70]" />
              Call +44 7391 039241
            </a>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="w-full py-3 text-sm font-semibold text-white bg-[#D48C70] rounded-xl text-center"
            >
              Request Appointment / Enquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
