import React, { useState } from 'react';
import { MessageCircle, X, ArrowUpRight, Send } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/agencyData';

interface WhatsAppButtonProps {
  inline?: boolean;
  text?: string;
  className?: string;
  customMessage?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  inline = false,
  text = 'Chat on WhatsApp',
  className = '',
  customMessage,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const defaultMessage = customMessage || `Hi ${AGENCY_CONFIG.name}! I'm interested in building a new website/web app for my business.`;

  const getWhatsAppUrl = (msg: string) => {
    return `https://wa.me/${AGENCY_CONFIG.whatsappRaw}?text=${encodeURIComponent(msg || defaultMessage)}`;
  };

  if (inline) {
    return (
      <a
        href={getWhatsAppUrl(defaultMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-md bg-[#25D366] hover:bg-[#20BD5A] text-slate-950 hover:shadow-green-500/20 ${className}`}
      >
        <MessageCircle className="w-4 h-4 fill-slate-950 text-transparent" />
        <span>{text}</span>
        <ArrowUpRight className="w-4 h-4" />
      </a>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover dialog */}
      {isOpen && (
        <div className="mb-3 w-80 md:w-96 rounded-2xl bg-[#0F172A] border border-slate-700/80 shadow-2xl p-4 text-left animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">PixelCraft Digital</h4>
                <p className="text-[11px] text-slate-400">Direct WhatsApp Inquiry Desk</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800"
              aria-label="Close WhatsApp prompt"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="my-3 text-xs text-slate-300 leading-relaxed bg-[#0B1220] p-3 rounded-xl border border-slate-800/80">
            <p>
              Habari! Send us a direct message on WhatsApp. We typically respond within 30 minutes during EAT business hours (8am–6pm).
            </p>
          </div>

          <div className="space-y-2">
            <label htmlFor="wa-custom-msg" className="block text-[11px] font-medium text-slate-400">
              Quick message (or customize below):
            </label>
            <textarea
              id="wa-custom-msg"
              rows={2}
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              placeholder="e.g. Hi PixelCraft, I need a modern business website for my firm..."
              className="w-full px-3 py-2 text-xs bg-[#090D16] border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 resize-none"
            />

            <a
              href={getWhatsAppUrl(userMsg)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-[#25D366] hover:bg-[#20BD5A] text-slate-950 font-semibold rounded-lg text-xs transition-colors shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Start WhatsApp Chat</span>
            </a>
          </div>
        </div>
      )}

      {/* Trigger floating button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp chat with PixelCraft Digital"
        className="group relative flex items-center gap-2.5 p-3.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-slate-950 shadow-xl hover:shadow-green-500/30 transition-all hover:scale-105"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="hidden sm:inline-block text-xs font-bold tracking-tight pr-1">
          WhatsApp Us
        </span>
      </button>
    </div>
  );
};
