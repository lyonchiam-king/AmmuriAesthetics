import React from 'react';
import { REVIEWS } from '../data/reviews';
import { Star, CheckCircle2, ExternalLink, Instagram, Heart } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const linktreeUrl = "https://linktr.ee/ammuriaesthetics";

  return (
    <section className="py-12 sm:py-16 bg-[#FDFCF8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#D48C70]/10 text-[#D48C70] mb-3">
            <Star className="w-3.5 h-3.5 fill-[#D48C70]" />
            <span>Verified Customer Experiences</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#2C2C2C]">
            Why West London trusts Deepika & Ammuri
          </h2>
          <p className="font-body text-sm sm:text-base text-[#8C8C8C] mt-2">
            Real feedback from first-timers and returning clients in Ealing.
          </p>
        </div>

        {/* 5-Star Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {REVIEWS.map((review) => (
            <div 
              key={review.id}
              className="bg-[#FFFFFF] border border-[#8C8C8C]/20 rounded-2xl p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Verification */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-[#D48C70]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D48C70]" />
                    ))}
                  </div>
                  <span className="text-xs text-[#8C8C8C] font-medium">{review.date}</span>
                </div>

                {/* Review Text */}
                <p className="font-body text-sm text-[#2C2C2C] leading-relaxed mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Author & Treatment */}
              <div className="pt-3 border-t border-[#8C8C8C]/15 flex items-center justify-between">
                <div>
                  <span className="font-heading text-sm font-bold text-[#2C2C2C] block">{review.author}</span>
                  <span className="text-xs text-[#D48C70] font-medium">{review.treatmentName}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-[#25D366] bg-[#25D366]/10 px-2.5 py-1 rounded-full">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified Review
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Linktree & Instagram Feed Highlights Embed Box */}
        <div className="bg-[#FFFFFF] border border-[#8C8C8C]/20 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto shadow-sm text-center">
          <div className="w-12 h-12 rounded-full bg-[#D48C70]/10 mx-auto flex items-center justify-center text-[#D48C70] mb-4">
            <Instagram className="w-6 h-6" />
          </div>

          <h3 className="font-heading text-xl font-bold text-[#2C2C2C] mb-2">
            Explore Results & Stories on Linktree
          </h3>
          <p className="font-body text-sm text-[#8C8C8C] max-w-lg mx-auto mb-6">
            View real patient highlight stories, before/after showcases, and direct updates on the official Ammuri Aesthetics Linktree page.
          </p>

          <a
            href={linktreeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white font-semibold text-sm rounded-xl transition-all shadow-md active:scale-95"
          >
            <span>Visit @ammuriaesthetics Linktree</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
