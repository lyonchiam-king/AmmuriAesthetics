import React, { useState } from 'react';
import { FINDER_STEPS } from '../data/finderOptions';
import { CheckCircle2, MessageCircle, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const TreatmentMatcher: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedConcern, setSelectedConcern] = useState<string>('hair-thinning');
  const [selectedArea, setSelectedArea] = useState<string>('scalp-hairline');
  const [selectedGoal, setSelectedGoal] = useState<string>('goal-natural-regrowth');

  // Helper getters
  const currentStepData = FINDER_STEPS.find(s => s.step === currentStep) || FINDER_STEPS[0];
  
  const selectedConcernObj = FINDER_STEPS[0].options.find(o => o.id === selectedConcern);
  const selectedAreaObj = FINDER_STEPS[1].options.find(o => o.id === selectedArea);
  const selectedGoalObj = FINDER_STEPS[2].options.find(o => o.id === selectedGoal);

  // Suggested treatment determination
  let matchedTreatment = "PRP Hair Treatment";
  if (selectedConcern === 'hair-thinning') {
    matchedTreatment = "PRP Hair Treatment";
  } else if (selectedConcern === 'stubborn-fat') {
    matchedTreatment = "Lemon Bottle";
  } else if (selectedConcern === 'jaw-tension') {
    matchedTreatment = "Masseters Btox";
  } else if (selectedConcern === 'eye-tiredness') {
    matchedTreatment = "Vitaran Eyes";
  }

  const prefilledWhatsappMessage = `Hi, I used the finder. I'm interested in ${matchedTreatment} for ${selectedAreaObj?.label || 'treatment'}.`;
  const whatsappUrl = `https://wa.me/message/EIQN5EXNKG2TN1?text=${encodeURIComponent(prefilledWhatsappMessage)}`;

  const handleOptionSelect = (optionId: string) => {
    if (currentStep === 1) {
      setSelectedConcern(optionId);
      // Auto match related defaults if needed
      if (optionId === 'stubborn-fat') {
        setSelectedArea('chin-jawline');
        setSelectedGoal('goal-subtle-contour');
      } else if (optionId === 'jaw-tension') {
        setSelectedArea('chin-jawline');
        setSelectedGoal('goal-tension-relief');
      } else if (optionId === 'eye-tiredness') {
        setSelectedArea('under-eye');
        setSelectedGoal('goal-skin-hydration');
      } else {
        setSelectedArea('scalp-hairline');
        setSelectedGoal('goal-natural-regrowth');
      }
    } else if (currentStep === 2) {
      setSelectedArea(optionId);
    } else if (currentStep === 3) {
      setSelectedGoal(optionId);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setSelectedConcern('hair-thinning');
    setSelectedArea('scalp-hairline');
    setSelectedGoal('goal-natural-regrowth');
  };

  return (
    <section id="matcher" className="py-12 sm:py-16 bg-[#FFFFFF] border-y border-[#8C8C8C]/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#D48C70]/10 text-[#D48C70] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Treatment Finder</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#2C2C2C]">
            Find the right care for your skin in 3 simple taps
          </h2>
          <p className="font-body text-sm sm:text-base text-[#8C8C8C] mt-2">
            Not sure what you need? Answer 3 quick questions to receive a tailored treatment match with pre-composed WhatsApp enquiry.
          </p>
        </div>

        {/* Main Tool Container: 2-Column Split (Stepper + Summary Card) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: 3-Step Vertical Stepper */}
          <div className="md:col-span-7 bg-[#FDFCF8] border border-[#8C8C8C]/20 rounded-2xl p-5 sm:p-7 shadow-xs">
            
            {/* Step Indicators Header */}
            <div className="flex items-center justify-between border-b border-[#8C8C8C]/15 pb-4 mb-6">
              <div className="flex items-center gap-2">
                {[1, 2, 3].map((stepNum) => (
                  <button
                    key={stepNum}
                    onClick={() => setCurrentStep(stepNum)}
                    className={`w-8 h-8 rounded-full font-heading text-xs font-bold transition-all flex items-center justify-center ${
                      currentStep === stepNum
                        ? 'bg-[#D48C70] text-white shadow-xs'
                        : currentStep > stepNum
                        ? 'bg-[#25D366] text-white'
                        : 'bg-[#FFFFFF] text-[#8C8C8C] border border-[#8C8C8C]/30'
                    }`}
                  >
                    {currentStep > stepNum ? <CheckCircle2 className="w-4 h-4" /> : stepNum}
                  </button>
                ))}
              </div>
              <span className="text-xs font-semibold text-[#8C8C8C]">
                Step {currentStep} of 3
              </span>
            </div>

            {/* Step Question Title */}
            <h3 className="font-heading text-lg sm:text-xl font-semibold text-[#2C2C2C] mb-4">
              {currentStepData.title}
            </h3>

            {/* Step Options List */}
            <div className="space-y-3">
              {currentStepData.options.map((opt) => {
                const isSelected = 
                  (currentStep === 1 && selectedConcern === opt.id) ||
                  (currentStep === 2 && selectedArea === opt.id) ||
                  (currentStep === 3 && selectedGoal === opt.id);

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleOptionSelect(opt.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-150 flex items-start gap-3 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D48C70] ${
                      isSelected
                        ? 'bg-[#FFFFFF] border-[#D48C70] shadow-sm ring-1 ring-[#D48C70]'
                        : 'bg-[#FFFFFF] border-[#8C8C8C]/20 hover:border-[#D48C70]/50'
                    }`}
                  >
                    <div className={`mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                      isSelected ? 'border-[#D48C70] bg-[#D48C70]' : 'border-[#8C8C8C]/40'
                    }`}>
                      {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                    <div>
                      <div className="font-heading text-sm font-semibold text-[#2C2C2C]">
                        {opt.label}
                      </div>
                      <div className="font-body text-xs text-[#8C8C8C] mt-0.5">
                        {opt.description}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Stepper Navigation Actions */}
            <div className="mt-6 pt-4 border-t border-[#8C8C8C]/15 flex items-center justify-between">
              {currentStep > 1 ? (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="text-xs font-semibold text-[#8C8C8C] hover:text-[#2C2C2C] px-3 py-2 rounded-lg"
                >
                  ← Back
                </button>
              ) : (
                <div />
              )}

              {currentStep < 3 ? (
                <button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#D48C70] hover:bg-[#B57359] text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-xs active:scale-95"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <span className="text-xs text-[#25D366] font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Complete!
                </span>
              )}
            </div>

          </div>

          {/* Right Column: Live Summary Card */}
          <div className="md:col-span-5 bg-[#FFFFFF] border border-[#8C8C8C]/20 rounded-2xl p-5 sm:p-6 shadow-sm sticky top-24">
            <div className="flex items-center justify-between border-b border-[#8C8C8C]/15 pb-3 mb-4">
              <span className="font-heading text-xs font-bold tracking-wider text-[#8C8C8C] uppercase">
                Your Selection Summary
              </span>
              <button 
                onClick={handleReset}
                className="text-xs text-[#8C8C8C] hover:text-[#D48C70] flex items-center gap-1"
                title="Reset Matcher"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset
              </button>
            </div>

            {/* Live Choices List */}
            <div className="space-y-3 mb-6">
              <div className="bg-[#FDFCF8] p-3 rounded-xl border border-[#8C8C8C]/10">
                <span className="text-[10px] font-semibold text-[#8C8C8C] block uppercase">Concern</span>
                <span className="text-xs font-semibold text-[#2C2C2C]">{selectedConcernObj?.label}</span>
              </div>

              <div className="bg-[#FDFCF8] p-3 rounded-xl border border-[#8C8C8C]/10">
                <span className="text-[10px] font-semibold text-[#8C8C8C] block uppercase">Target Area</span>
                <span className="text-xs font-semibold text-[#2C2C2C]">{selectedAreaObj?.label}</span>
              </div>

              <div className="bg-[#FDFCF8] p-3 rounded-xl border border-[#8C8C8C]/10">
                <span className="text-[10px] font-semibold text-[#8C8C8C] block uppercase">Goal</span>
                <span className="text-xs font-semibold text-[#2C2C2C]">{selectedGoalObj?.label}</span>
              </div>
            </div>

            {/* Matched Result Box */}
            <div className="bg-[#D48C70]/10 border border-[#D48C70]/30 rounded-xl p-4 mb-6 text-center">
              <span className="text-xs font-medium text-[#8C8C8C] block">Recommended Match:</span>
              <span className="font-heading text-lg font-bold text-[#2C2C2C] block mt-0.5">
                {matchedTreatment}
              </span>
              <span className="text-xs text-[#D48C70] font-semibold inline-block mt-1">
                From [TO CONFIRM] • Non-invasive care
              </span>
            </div>

            {/* Final Action Button: Send to Ammuri on WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm rounded-xl transition-all shadow-md active:scale-95 text-center"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Send choices to Ammuri on WhatsApp</span>
            </a>

            <p className="text-[11px] text-[#8C8C8C] text-center mt-3">
              Pre-fills WhatsApp message: &ldquo;Hi, I used the finder...&rdquo;
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
