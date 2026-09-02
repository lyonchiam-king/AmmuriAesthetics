import React, { useState, useRef, useCallback } from 'react';
import { Treatment } from '../types';
import { Sparkles, MoveHorizontal, Info } from 'lucide-react';

interface MirrorWipeCardProps {
  treatment: Treatment;
  onSelect: (treatment: Treatment) => void;
}

export const MirrorWipeCard: React.FC<MirrorWipeCardProps> = ({ treatment, onSelect }) => {
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="bg-[#FFFFFF] border border-[#8C8C8C]/20 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group">
      
      {/* Interactive 'Mirror Wipe' Visual Header */}
      <div 
        ref={containerRef}
        className="relative w-full aspect-[4/3] bg-[#2C2C2C] overflow-hidden select-none cursor-ew-resize touch-none"
        onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={(e) => { setIsDragging(true); handleTouchMove(e); }}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        
        {/* Base Layer: Natural Skin / After Image */}
        <img
          src={treatment.afterImage}
          alt={`${treatment.name} treatment result`}
          className="absolute inset-0 w-full h-full object-cover filter brightness-[1.02]"
          referrerPolicy="no-referrer"
        />

        {/* Wiped / Revealed Layer Overlay (with clip path) */}
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          {/* Steamy / Un-wiped Image with soft blur effect */}
          <img
            src={treatment.beforeImage}
            alt={`${treatment.name} before`}
            className="absolute inset-0 w-full h-full object-cover filter contrast-[0.95] saturate-[0.85] brightness-[0.95]"
            referrerPolicy="no-referrer"
          />
          
          {/* Mirror condensation effect overlay */}
          <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />
        </div>

        {/* Vertical Divider handle line */}
        <div 
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-20 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Circular Drag Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FFFFFF] border-2 border-[#D48C70] shadow-md flex items-center justify-center text-[#D48C70]">
            <MoveHorizontal className="w-4 h-4" />
          </div>
        </div>

        {/* Labels */}
        <span className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-[#2C2C2C]/70 backdrop-blur-md text-white text-[10px] font-semibold rounded-md border border-white/20">
          Initial State
        </span>
        <span className="absolute top-3 right-3 z-10 px-2.5 py-1 bg-[#D48C70]/90 backdrop-blur-md text-white text-[10px] font-semibold rounded-md border border-white/20">
          Refreshed Glow
        </span>

        {/* Mirror Wipe Hint Instruction */}
        <div className="absolute bottom-2 inset-x-0 mx-auto w-max px-3 py-1 bg-[#2C2C2C]/80 backdrop-blur-md rounded-full text-[10px] font-medium text-white/90 flex items-center gap-1.5 pointer-events-none">
          <Sparkles className="w-3 h-3 text-[#D48C70]" />
          <span>Drag thumb to wipe mirror</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Tags */}
          <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
            {treatment.tags.map(tag => (
              <span 
                key={tag}
                className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#FDFCF8] text-[#D48C70] border border-[#8C8C8C]/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Treatment Name */}
          <h3 className="font-heading text-lg font-bold text-[#2C2C2C] group-hover:text-[#D48C70] transition-colors">
            {treatment.name}
          </h3>

          {/* Subtitle / Description */}
          <p className="font-body text-xs text-[#8C8C8C] mt-1 line-clamp-2 leading-relaxed">
            {treatment.subtitle}
          </p>
        </div>

        {/* Price & Modal Trigger */}
        <div className="mt-5 pt-3 border-t border-[#8C8C8C]/15 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-semibold text-[#8C8C8C] uppercase block">Price</span>
            <span className="font-heading text-sm font-bold text-[#2C2C2C]">{treatment.priceTag}</span>
          </div>

          <button
            onClick={() => onSelect(treatment)}
            className="inline-flex items-center gap-1 text-xs font-semibold px-3.5 py-2 bg-[#FDFCF8] hover:bg-[#D48C70] text-[#2C2C2C] hover:text-white border border-[#8C8C8C]/20 hover:border-[#D48C70] rounded-lg transition-all active:scale-95"
          >
            <Info className="w-3.5 h-3.5" />
            <span>Details</span>
          </button>
        </div>

      </div>

    </div>
  );
};
