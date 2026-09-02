import React, { useEffect, useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const MobileFloatingBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal once scrolled past 300px (past hero)
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/message/EIQN5EXNKG2TN1";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
          className="fixed bottom-0 inset-x-0 z-50 p-3 bg-[#FFFFFF]/95 backdrop-blur-md border-t border-[#8C8C8C]/20 shadow-lg md:hidden"
        >
          <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
            
            {/* Call Action */}
            <a
              href="tel:+447391039241"
              className="flex items-center justify-center gap-2 py-3 px-3 bg-[#FDFCF8] hover:bg-[#FFFFFF] text-[#2C2C2C] border border-[#8C8C8C]/30 rounded-xl font-semibold text-xs transition-all active:scale-95 shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#D48C70]" />
              <span>Call +44 7391</span>
            </a>

            {/* WhatsApp Action */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-semibold text-xs transition-all active:scale-95 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
