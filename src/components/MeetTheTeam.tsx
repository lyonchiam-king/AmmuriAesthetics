import React from 'react';
import { TEAM } from '../data/team';
import { Heart, ShieldCheck, Sparkles, MessageCircle, Award } from 'lucide-react';

export const MeetTheTeam: React.FC = () => {
  const whatsappUrl = "https://wa.me/message/EIQN5EXNKG2TN1";

  return (
    <section id="team" className="py-12 sm:py-16 bg-[#FFFFFF] border-t border-[#8C8C8C]/15">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#D48C70]/10 text-[#D48C70] mb-3">
            <Heart className="w-3.5 h-3.5" />
            <span>Your Ealing Specialists</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#2C2C2C]">
            Meet Deepika & Ammuri
          </h2>
          <p className="font-body text-sm sm:text-base text-[#8C8C8C] mt-2">
            Real humans dedicated to keeping you safe, comfortable, and feeling cared for at every visit.
          </p>
        </div>

        {/* Two-Column Split Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {TEAM.map((member, index) => (
            <div 
              key={member.name}
              className="bg-[#FDFCF8] border border-[#8C8C8C]/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#D48C70]/40 transition-all"
            >
              <div>
                {/* Photo Header */}
                <div className="relative mb-6 rounded-xl overflow-hidden aspect-[4/3] bg-[#2C2C2C]">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#D48C70] inline-block mb-1">
                      {index === 0 ? 'Deepika' : 'Ammuri'}
                    </span>
                    <h3 className="font-heading text-lg font-bold">{member.name}</h3>
                    <p className="text-xs text-white/80">{member.role}</p>
                  </div>
                </div>

                {/* Personal Bio */}
                <p className="font-body text-sm text-[#2C2C2C] leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Personal Quote Card */}
                <div className="bg-[#FFFFFF] p-3.5 rounded-xl border border-[#8C8C8C]/15 mb-4 text-xs italic text-[#2C2C2C]/90">
                  &ldquo;{member.quote}&rdquo;
                </div>

                {/* Specialities Tags */}
                <div className="mb-6">
                  <span className="text-[10px] font-bold text-[#8C8C8C] uppercase block mb-2">Specialisms</span>
                  <div className="flex flex-wrap gap-1.5">
                    {member.specialities.map((spec) => (
                      <span key={spec} className="px-2.5 py-1 bg-[#FFFFFF] border border-[#8C8C8C]/20 rounded-lg text-xs font-medium text-[#2C2C2C] flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-[#D48C70]" />
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp button per practitioner */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#FFFFFF] hover:bg-[#D48C70] text-[#2C2C2C] hover:text-white border border-[#8C8C8C]/25 hover:border-[#D48C70] rounded-xl font-semibold text-xs transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Chat directly with {member.name}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Hygiene & Warmth Guarantee Banner */}
        <div className="mt-10 p-5 bg-[#FDFCF8] border border-[#8C8C8C]/20 rounded-2xl flex flex-col sm:flex-row items-center justify-around gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#25D366]" />
            <span className="text-xs sm:text-sm font-semibold text-[#2C2C2C]">
              Strict UK Clinical Hygiene Protocols
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#D48C70]" />
            <span className="text-xs sm:text-sm font-semibold text-[#2C2C2C]">
              100% Unhurried Consultations
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#D48C70]" />
            <span className="text-xs sm:text-sm font-semibold text-[#2C2C2C]">
              Empathetic, Gentle Care
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
