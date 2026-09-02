import React from 'react';
import { MapPin, Phone, MessageCircle, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const linktreeUrl = "https://linktr.ee/ammuriaesthetics";
  const whatsappUrl = "https://wa.me/message/EIQN5EXNKG2TN1";
  const mapUrl = "https://maps.google.com/?cid=3244908935253147947&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA";

  return (
    <footer className="bg-[#2C2C2C] text-white pt-12 pb-24 md:pb-12 border-t border-[#8C8C8C]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <span className="font-heading text-2xl font-bold tracking-tight text-white block">
              Ammuri Aesthetics
            </span>
            <p className="font-body text-xs text-white/70 max-w-sm leading-relaxed">
              Natural-looking aesthetics in Ealing, London, without the clinic chill. Safe, hygienic skin care and aesthetic treatments administered by Deepika and Ammuri.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#25D366]">
              <ShieldCheck className="w-4 h-4" />
              <span>Registered UK Aesthetic Practitioners</span>
            </div>
          </div>

          {/* Location & Contact */}
          <div className="md:col-span-4 space-y-2.5 text-xs text-white/80">
            <span className="font-heading text-xs font-bold text-white uppercase tracking-wider block mb-3">
              Visit Clinic
            </span>
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#D48C70] shrink-0 mt-0.5" />
              <span>53 The Grove, London W5 5DX, UK</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#D48C70] shrink-0" />
              <a href="tel:+447391039241" className="hover:text-white underline">
                +44 7391 039241
              </a>
            </p>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#D48C70] hover:underline pt-1"
            >
              <span>View on Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <span className="font-heading text-xs font-bold text-white uppercase tracking-wider block mb-3">
              Connect Online
            </span>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2.5 bg-white/5 hover:bg-white/10 rounded-xl transition-all text-white/90"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp @message</span>
            </a>

            <a
              href={linktreeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2.5 bg-white/5 hover:bg-white/10 rounded-xl transition-all text-white/90"
            >
              <ExternalLink className="w-4 h-4 text-[#D48C70]" />
              <span>Linktree @ammuriaesthetics</span>
            </a>
          </div>

        </div>

        {/* Bottom Legal Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/60">
          <p>
            &copy; {new Date().getFullYear()} Ammuri Aesthetics. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-center sm:text-right">
            <Heart className="w-3 h-3 text-[#D48C70]" />
            <span>All treatments follow strict UK clinical hygiene and safety protocols.</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
