import React, { useEffect } from 'react';
import { Treatment } from '../types';
import { X, Clock, ShieldCheck, Sparkles, MessageCircle, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TreatmentModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onOpenBooking: (treatmentName: string) => void;
}

export const TreatmentModal: React.FC<TreatmentModalProps> = ({ treatment, onClose, onOpenBooking }) => {
  // ESC key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (treatment) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [treatment, onClose]);

  if (!treatment) return null;

  const prefilledMsg = `Hi Ammuri & Deepika, I would like to enquire about ${treatment.name} (from ${treatment.priceTag}). Could you share available slots?`;
  const whatsappUrl = `https://wa.me/message/EIQN5EXNKG2TN1?text=${encodeURIComponent(prefilledMsg)}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#2C2C2C]/60 backdrop-blur-sm">
        
        {/* Backdrop click */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Card Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="relative w-full max-w-xl bg-[#FFFFFF] border border-[#8C8C8C]/20 rounded-2xl shadow-xl overflow-hidden z-10 my-8"
        >
          {/* Header Image */}
          <div className="relative h-48 sm:h-56 w-full bg-[#2C2C2C]">
            <img
              src={treatment.afterImage}
              alt={treatment.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/80 via-transparent to-transparent" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-2 rounded-full bg-[#FFFFFF]/80 hover:bg-[#FFFFFF] text-[#2C2C2C] shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D48C70]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title on Image */}
            <div className="absolute bottom-4 left-5 right-5 text-white">
              <div className="flex items-center gap-2 mb-1">
                {treatment.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#D48C70] text-white">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="font-heading text-2xl font-bold">{treatment.name}</h2>
              <span className="text-xs text-white/90 font-medium">Starting at {treatment.priceTag}</span>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-5 sm:p-7 space-y-5 max-h-[60vh] overflow-y-auto">
            
            {/* Overview */}
            <div>
              <h3 className="font-heading text-xs font-bold text-[#8C8C8C] uppercase tracking-wider mb-1">
                Treatment Overview
              </h3>
              <p className="font-body text-sm text-[#2C2C2C] leading-relaxed">
                {treatment.description}
              </p>
            </div>

            {/* Details Bullet List */}
            <div className="bg-[#FDFCF8] p-4 rounded-xl border border-[#8C8C8C]/15 space-y-2">
              <h3 className="font-heading text-xs font-bold text-[#2C2C2C] flex items-center gap-1.5 mb-2">
                <Sparkles className="w-4 h-4 text-[#D48C70]" />
                Key Procedure Details
              </h3>
              <ul className="space-y-1.5 text-xs text-[#2C2C2C]">
                {treatment.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D48C70] mt-1.5 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practical Info Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-[#FDFCF8] rounded-xl border border-[#8C8C8C]/15">
                <span className="text-[#8C8C8C] font-semibold block flex items-center gap-1 mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#D48C70]" /> Duration
                </span>
                <span className="font-bold text-[#2C2C2C]">{treatment.duration}</span>
              </div>

              <div className="p-3 bg-[#FDFCF8] rounded-xl border border-[#8C8C8C]/15">
                <span className="text-[#8C8C8C] font-semibold block flex items-center gap-1 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D48C70]" /> Recovery / Downtime
                </span>
                <span className="font-bold text-[#2C2C2C]">{treatment.downtime}</span>
              </div>
            </div>

            {/* Expected Results */}
            <div className="p-3 bg-[#D48C70]/10 rounded-xl border border-[#D48C70]/20 text-xs">
              <span className="font-semibold text-[#D48C70] block">Expected Outcome:</span>
              <span className="text-[#2C2C2C] font-medium">{treatment.results}</span>
            </div>

          </div>

          {/* Modal Footer Actions */}
          <div className="p-4 sm:p-5 bg-[#FDFCF8] border-t border-[#8C8C8C]/15 flex flex-col sm:flex-row items-center justify-between gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs sm:text-sm rounded-xl transition-all text-center active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>

            <button
              onClick={() => { onClose(); onOpenBooking(treatment.name); }}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#D48C70] hover:bg-[#B57359] text-white font-semibold text-xs sm:text-sm rounded-xl transition-all text-center active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Request Appointment</span>
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
