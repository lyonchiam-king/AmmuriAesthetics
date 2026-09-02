import React from 'react';
import { MessageCircle, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export const ConnectSection: React.FC = () => {
  const linktreeUrl = "https://linktr.ee/ammuriaesthetics";
  const whatsappUrl = "https://wa.me/message/EIQN5EXNKG2TN1";

  return (
    <section className="py-12 sm:py-16 bg-[#FDFCF8] border-t border-[#8C8C8C]/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#D48C70]/10 text-[#D48C70] mb-3">
          <Heart className="w-3.5 h-3.5" />
          <span>Connect With Deepika &amp; Ammuri</span>
        </div>

        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#2C2C2C] mb-2">
          Ready to ask a question or book your visit?
        </h2>
        <p className="font-body text-sm sm:text-base text-[#8C8C8C] max-w-lg mx-auto mb-8">
          We are always happy to chat on WhatsApp or help you browse our full profile links on Linktree. No pressure, ever.
        </p>

        {/* Link Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          
          {/* WhatsApp Direct Link */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-[#FFFFFF] border border-[#25D366]/30 hover:border-[#25D366] rounded-2xl shadow-xs hover:shadow-md transition-all flex flex-col items-center justify-center group active:scale-98"
          >
            <div className="w-12 h-12 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6" />
            </div>
            <span className="font-heading text-base font-bold text-[#2C2C2C]">
              Chat on WhatsApp
            </span>
            <span className="text-xs text-[#8C8C8C] mt-1">
              Direct message Deepika &amp; Ammuri
            </span>
            <span className="mt-4 px-4 py-2 bg-[#25D366] text-white text-xs font-semibold rounded-xl inline-flex items-center gap-1">
              Open WhatsApp Chat <ExternalLink className="w-3 h-3" />
            </span>
          </a>

          {/* Linktree Profile Link */}
          <a
            href={linktreeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-[#FFFFFF] border border-[#8C8C8C]/20 hover:border-[#D48C70] rounded-2xl shadow-xs hover:shadow-md transition-all flex flex-col items-center justify-center group active:scale-98"
          >
            <div className="w-12 h-12 rounded-full bg-[#D48C70]/10 text-[#D48C70] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <ExternalLink className="w-6 h-6" />
            </div>
            <span className="font-heading text-base font-bold text-[#2C2C2C]">
              Linktree @ammuriaesthetics
            </span>
            <span className="text-xs text-[#8C8C8C] mt-1">
              Official links, highlights &amp; photos
            </span>
            <span className="mt-4 px-4 py-2 bg-[#2C2C2C] text-white text-xs font-semibold rounded-xl inline-flex items-center gap-1">
              View Linktree Profile <ExternalLink className="w-3 h-3" />
            </span>
          </a>

        </div>

        {/* Safe & Hygienic Assurance Note */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#8C8C8C]">
          <ShieldCheck className="w-4 h-4 text-[#25D366]" />
          <span>Ammuri Aesthetics • 53 The Grove, Ealing, London W5 5DX</span>
        </div>

      </div>
    </section>
  );
};
