import React from 'react';
import { MapPin, Phone, Clock, Car, Navigation, MessageCircle, ExternalLink } from 'lucide-react';

export const LocationAndHours: React.FC = () => {
  const mapUrl = "https://maps.google.com/?cid=3244908935253147947&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA";
  const whatsappUrl = "https://wa.me/message/EIQN5EXNKG2TN1";

  return (
    <section id="location" className="py-12 sm:py-16 bg-[#FFFFFF] border-t border-[#8C8C8C]/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#D48C70]/10 text-[#D48C70] mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Convenient Ealing Clinic</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#2C2C2C]">
            Location & Opening Hours
          </h2>
          <p className="font-body text-sm sm:text-base text-[#8C8C8C] mt-2">
            Easy to reach in West London with convenient nearby street parking.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Address, Hours, Parking info */}
          <div className="md:col-span-6 bg-[#FDFCF8] border border-[#8C8C8C]/20 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
            
            {/* Address Block */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#D48C70]/10 flex items-center justify-center text-[#D48C70] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-[#2C2C2C]">Clinic Address</h3>
                <p className="font-body text-sm text-[#2C2C2C] mt-1 font-medium">
                  53 The Grove, London W5 5DX, UK
                </p>
                <p className="text-xs text-[#8C8C8C] mt-0.5">
                  Located in the heart of Ealing, West London.
                </p>

                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-[#D48C70] hover:underline"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <hr className="border-[#8C8C8C]/15" />

            {/* Telephone Contact */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#D48C70]/10 flex items-center justify-center text-[#D48C70] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-[#2C2C2C]">Direct Telephone</h3>
                <a 
                  href="tel:+447391039241"
                  className="font-body text-sm font-bold text-[#2C2C2C] hover:text-[#D48C70] transition-colors block mt-1"
                >
                  +44 7391 039241
                </a>
                <span className="text-xs text-[#8C8C8C]">Tappable direct phone link for calls or SMS</span>
              </div>
            </div>

            <hr className="border-[#8C8C8C]/15" />

            {/* Opening Hours Block */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#D48C70]/10 flex items-center justify-center text-[#D48C70] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="w-full">
                <h3 className="font-heading text-base font-bold text-[#2C2C2C]">Opening Hours</h3>
                
                <div className="mt-2 space-y-1.5 text-xs text-[#2C2C2C]">
                  <div className="flex justify-between py-1 border-b border-[#8C8C8C]/10">
                    <span className="font-medium text-[#8C8C8C]">Monday - Friday</span>
                    <span className="font-semibold">10:00 - 18:00 [TO CONFIRM]</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#8C8C8C]/10">
                    <span className="font-medium text-[#8C8C8C]">Saturday</span>
                    <span className="font-semibold">10:00 - 17:00 [TO CONFIRM]</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="font-medium text-[#8C8C8C]">Sunday</span>
                    <span className="font-semibold text-[#D48C70]">By Appointment [TO CONFIRM]</span>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-[#8C8C8C]/15" />

            {/* Parking Note */}
            <div className="flex items-start gap-4 bg-[#FFFFFF] p-4 rounded-xl border border-[#8C8C8C]/15">
              <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0">
                <Car className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-heading text-xs font-bold text-[#2C2C2C]">Park Nearby</h4>
                <p className="text-xs text-[#8C8C8C] mt-0.5">
                  Pay &amp; display parking available right along The Grove and nearby Ealing Broadway station car parks.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Location Visualizer Frame */}
          <div className="md:col-span-6 bg-[#FDFCF8] border border-[#8C8C8C]/20 rounded-2xl p-6 shadow-xs flex flex-col justify-between h-full min-h-[420px]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-heading text-xs font-bold text-[#8C8C8C] uppercase tracking-wider">
                  Ealing Broadway Map Pin
                </span>
                <span className="text-xs text-[#25D366] font-semibold flex items-center gap-1">
                  ● Open for appointments
                </span>
              </div>

              {/* Map Canvas Visualizer */}
              <div className="relative rounded-xl overflow-hidden border border-[#8C8C8C]/20 bg-[#e5e3df] aspect-[4/3] flex flex-col items-center justify-center p-6 text-center shadow-inner">
                <div className="w-12 h-12 rounded-full bg-[#D48C70] text-white flex items-center justify-center shadow-lg animate-bounce mb-3">
                  <MapPin className="w-6 h-6" />
                </div>

                <h4 className="font-heading text-base font-bold text-[#2C2C2C]">
                  53 The Grove, London W5 5DX
                </h4>
                <p className="text-xs text-[#8C8C8C] mt-1 max-w-xs">
                  Just 4 minutes walk from Ealing Broadway station (Elizabeth, District &amp; Central lines).
                </p>

                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  <span className="px-2.5 py-1 bg-white text-[11px] font-medium rounded-md border border-[#8C8C8C]/20">
                    🚇 Ealing Broadway Station
                  </span>
                  <span className="px-2.5 py-1 bg-white text-[11px] font-medium rounded-md border border-[#8C8C8C]/20">
                    🚌 Bus Stops nearby
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 pt-4 border-t border-[#8C8C8C]/15 flex flex-col sm:flex-row gap-3">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#D48C70] hover:bg-[#B57359] text-white font-semibold text-xs rounded-xl transition-all text-center"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions in Google Maps</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs rounded-xl transition-all text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask for Location Help</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
