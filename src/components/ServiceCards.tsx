import React, { useState } from 'react';
import { TREATMENTS } from '../data/treatments';
import { Treatment } from '../types';
import { MirrorWipeCard } from './MirrorWipeCard';
import { TreatmentModal } from './TreatmentModal';
import { Sparkles, HelpCircle } from 'lucide-react';

interface ServiceCardsProps {
  onOpenBooking: (treatmentName?: string) => void;
}

export const ServiceCards: React.FC<ServiceCardsProps> = ({ onOpenBooking }) => {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  return (
    <section id="treatments" className="py-12 sm:py-16 bg-[#FDFCF8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#D48C70]/10 text-[#D48C70] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Specialist Treatments</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#2C2C2C]">
            Safe, hygienic care tailored to your natural skin structure
          </h2>
          <p className="font-body text-sm sm:text-base text-[#8C8C8C] mt-2">
            Every procedure starts with an in-depth, gentle consultation with Deepika or Ammuri.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TREATMENTS.map((treatment) => (
            <MirrorWipeCard
              key={treatment.id}
              treatment={treatment}
              onSelect={(t) => setSelectedTreatment(t)}
            />
          ))}
        </div>

        {/* Pricing Reassurance Note */}
        <div className="mt-10 p-4 bg-[#FFFFFF] border border-[#8C8C8C]/20 rounded-2xl max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D48C70]/10 flex items-center justify-center shrink-0 text-[#D48C70]">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading text-sm font-semibold text-[#2C2C2C]">
                Unsure about pricing or suitablity?
              </h4>
              <p className="text-xs text-[#8C8C8C]">
                All price tags are transparently listed starting from &ldquo;From [TO CONFIRM]&rdquo;. Chat with us for a direct estimate.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenBooking()}
            className="px-4 py-2.5 bg-[#D48C70] hover:bg-[#B57359] text-white text-xs font-semibold rounded-xl transition-all active:scale-95 shrink-0"
          >
            Ask for Price List
          </button>
        </div>

      </div>

      {/* Expanded Modal */}
      <TreatmentModal
        treatment={selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
        onOpenBooking={onOpenBooking}
      />
    </section>
  );
};
