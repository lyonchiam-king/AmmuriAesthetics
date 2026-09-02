import React from 'react';
import { MessageCircle, ShieldCheck, Heart, Sparkles, MapPin, Calendar } from 'lucide-react';
import heroImage from '../assets/images/ealing_clinic_hero_1788340022407.jpg';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const whatsappUrl = "https://wa.me/message/EIQN5EXNKG2TN1";

  return (
    <section id="hero" className="relative w-full bg-[#FDFCF8] overflow-hidden pt-4 pb-12 sm:pb-16">
      
      {/* Main Hero Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Full-bleed style image hero card */}
        <div className="relative rounded-2xl overflow-hidden min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] flex items-end shadow-sm border border-[#8C8C8C]/20">
          
          {/* Background Image - Renders with zero delay for performance */}
          <img
            src={heroImage}
            alt="Ammuri Aesthetics clinic interior in Ealing London"
            className="absolute inset-0 w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />

          {/* Warm gradient overlay ensuring readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/90 via-[#2C2C2C]/40 to-transparent" />

          {/* Hero Content Overlay */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-12 w-full max-w-2xl text-white">
            
            {/* Location & Trust Tag */}
            <div className="inline-flex items-center gap-2 bg-[#FFFFFF]/20 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium text-white mb-4 border border-white/20">
              <MapPin className="w-3.5 h-3.5 text-[#D48C70]" />
              <span>53 The Grove, Ealing London W5</span>
            </div>

            {/* Headline - Exact required text */}
            <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-4">
              Natural-looking aesthetics in Ealing, without the clinic chill.
            </h1>

            {/* Subcopy - Exact required text */}
            <p className="font-body text-base sm:text-lg text-white/90 leading-relaxed mb-6 max-w-xl">
              Deepika and Ammuri guide you through safe, hygienic treatments that feel like care, not procedures.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Primary CTA - Exact text: Chat on WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm sm:text-base rounded-xl transition-all shadow-md active:scale-95 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Secondary CTA - Direct Enquiry */}
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#2C2C2C] font-semibold text-sm sm:text-base rounded-xl transition-all shadow-sm active:scale-95 border border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D48C70]"
              >
                <Calendar className="w-5 h-5 text-[#D48C70]" />
                <span>Book Consultation</span>
              </button>
            </div>

            {/* Trust reassurance note */}
            <p className="mt-3 text-xs text-white/80 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" />
              No pressure consultations. Zero obligation to book.
            </p>
          </div>
        </div>

        {/* HIGHLIGHTS STRIP (directly under hero, one row of badges) */}
        <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-4 max-w-2xl mx-auto">
          <div className="bg-[#FFFFFF] border border-[#8C8C8C]/20 rounded-xl p-3 sm:p-4 text-center shadow-xs flex flex-col sm:flex-row items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#D48C70] shrink-0" />
            <span className="font-heading text-xs sm:text-sm font-semibold text-[#2C2C2C]">Hygienic & Clean</span>
          </div>

          <div className="bg-[#FFFFFF] border border-[#8C8C8C]/20 rounded-xl p-3 sm:p-4 text-center shadow-xs flex flex-col sm:flex-row items-center justify-center gap-2">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#D48C70] shrink-0" />
            <span className="font-heading text-xs sm:text-sm font-semibold text-[#2C2C2C]">Friendly Specialists</span>
          </div>

          <div className="bg-[#FFFFFF] border border-[#8C8C8C]/20 rounded-xl p-3 sm:p-4 text-center shadow-xs flex flex-col sm:flex-row items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#D48C70] shrink-0" />
            <span className="font-heading text-xs sm:text-sm font-semibold text-[#2C2C2C]">Natural Results</span>
          </div>
        </div>

      </div>
    </section>
  );
};
