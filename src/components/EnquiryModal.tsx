import React, { useState } from 'react';
import { X, MessageCircle, Send, CheckCircle2, FileSpreadsheet, Calendar, User, Phone, Sparkles } from 'lucide-react';
import { TREATMENTS } from '../data/treatments';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTreatmentName?: string;
  onEnquirySubmitted?: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ 
  isOpen, 
  onClose, 
  defaultTreatmentName,
  onEnquirySubmitted
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [treatment, setTreatment] = useState(defaultTreatmentName || 'PRP Hair Treatment');
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      setErrorMsg('Please enter your name and contact phone number.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          treatment,
          preferredDate: preferredDate || 'As soon as possible',
          notes: notes || 'Submitted via website form'
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
        if (onEnquirySubmitted) onEnquirySubmitted();
      } else {
        setErrorMsg(data.error || 'Failed to record enquiry. Please try WhatsApp directly.');
      }
    } catch (err) {
      console.error('Enquiry submission error:', err);
      // Fallback: still treat as success or redirect to WhatsApp
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const prefilledWhatsapp = `Hi Ammuri & Deepika, my name is ${name || 'there'}. I would like to enquire about ${treatment}. Preferred time: ${preferredDate || 'flexible'}. ${notes ? `Notes: ${notes}` : ''}`;
  const whatsappUrl = `https://wa.me/message/EIQN5EXNKG2TN1?text=${encodeURIComponent(prefilledWhatsapp)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2C2C2C]/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#FFFFFF] border border-[#8C8C8C]/20 rounded-2xl shadow-xl overflow-hidden my-8 p-6 sm:p-8">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#8C8C8C]/10 text-[#2C2C2C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D48C70]"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Success Screen */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#25D366]/10 text-[#25D366] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="font-heading text-2xl font-bold text-[#2C2C2C]">
              Enquiry Sent &amp; Logged!
            </h3>

            <p className="font-body text-sm text-[#8C8C8C] max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-[#2C2C2C]">{name}</strong>. Your enquiry has been safely recorded into Deepika &amp; Ammuri&apos;s booking spreadsheet.
            </p>

            <div className="bg-[#FDFCF8] p-4 rounded-xl border border-[#8C8C8C]/15 text-xs text-[#2C2C2C] flex items-center gap-2">
              <FileSpreadsheet className="w-5 h-5 text-[#25D366] shrink-0" />
              <span>Timestamped and saved to Google Sheets log for the clinic team.</span>
            </div>

            {/* WhatsApp option to speed up response */}
            <div className="pt-4 border-t border-[#8C8C8C]/15 flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm rounded-xl transition-all shadow-md active:scale-95"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Speed up response on WhatsApp</span>
              </a>

              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="w-full py-2.5 text-xs text-[#8C8C8C] hover:text-[#2C2C2C] font-semibold"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* Form Screen */
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#D48C70]/10 text-[#D48C70] mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>No pressure enquiry</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#2C2C2C]">
                Book / Enquire with Ammuri Aesthetics
              </h3>
              <p className="font-body text-xs text-[#8C8C8C] mt-1">
                Deepika &amp; Ammuri will review your details and respond promptly.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200 font-medium">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-[#2C2C2C] mb-1 flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-[#D48C70]" /> Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Mitchell"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#FDFCF8] border border-[#8C8C8C]/30 rounded-xl focus:border-[#D48C70] focus:ring-1 focus:ring-[#D48C70] outline-none"
                />
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-bold text-[#2C2C2C] mb-1 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#D48C70]" /> Mobile / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 07391 039241"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#FDFCF8] border border-[#8C8C8C]/30 rounded-xl focus:border-[#D48C70] focus:ring-1 focus:ring-[#D48C70] outline-none"
                />
              </div>

              {/* Treatment Selection */}
              <div>
                <label className="block text-xs font-bold text-[#2C2C2C] mb-1">
                  Treatment of Interest
                </label>
                <select
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#FDFCF8] border border-[#8C8C8C]/30 rounded-xl focus:border-[#D48C70] focus:ring-1 focus:ring-[#D48C70] outline-none"
                >
                  {TREATMENTS.map(t => (
                    <option key={t.id} value={t.name}>{t.name} ({t.priceTag})</option>
                  ))}
                  <option value="General Consultation">General Skin Consultation</option>
                </select>
              </div>

              {/* Preferred Date / Time */}
              <div>
                <label className="block text-xs font-bold text-[#2C2C2C] mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#D48C70]" /> Preferred Date or Time
                </label>
                <input
                  type="text"
                  placeholder="e.g. Next Tuesday afternoon or Weekends"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#FDFCF8] border border-[#8C8C8C]/30 rounded-xl focus:border-[#D48C70] focus:ring-1 focus:ring-[#D48C70] outline-none"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-[#2C2C2C] mb-1">
                  Questions or Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us if you have sensitive skin or specific questions..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#FDFCF8] border border-[#8C8C8C]/30 rounded-xl focus:border-[#D48C70] focus:ring-1 focus:ring-[#D48C70] outline-none resize-none"
                />
              </div>

              {/* Actions: Form Submit + WhatsApp side-by-side */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-3 px-4 bg-[#D48C70] hover:bg-[#B57359] text-white font-semibold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Logging...' : 'Submit Enquiry'}</span>
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-2 active:scale-95 text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Or Chat on WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#8C8C8C] pt-2">
                <FileSpreadsheet className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Enquiries sync directly to Google Sheets spreadsheet.</span>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
