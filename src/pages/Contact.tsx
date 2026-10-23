import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  ExternalLink,
  AlertCircle
} from 'lucide-react';
import { AGENCY_CONFIG, SERVICES } from '../data/agencyData';
import { WhatsAppButton } from '../components/WhatsAppButton';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'business-website',
    message: '',
    preferredContact: 'whatsapp',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a valid phone or WhatsApp number.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a brief description (at least 10 characters).';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    // Simulate instantaneous clean local dispatch with instant verification
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const [copied, setCopied] = useState(false);

  const getServiceTitle = (id: string) => {
    return SERVICES.find(s => s.id === id)?.title || id;
  };

  const getWhatsAppMessageDraft = () => {
    return `*PIXELCRAFT DIGITAL INQUIRY*\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Service:* ${getServiceTitle(formData.service)}\n*Message:* ${formData.message}`;
  };

  const getEmailSubject = () => {
    return `Inquiry: ${formData.name} - ${getServiceTitle(formData.service)}`;
  };

  const getEmailBody = () => {
    return `Hello PixelCraft Digital,\n\nI would like to make an inquiry regarding your services:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone/WhatsApp: ${formData.phone}\nService: ${getServiceTitle(formData.service)}\nPreferred Contact: ${formData.preferredContact}\n\nProject Details / Message:\n${formData.message}\n\n---\nSent via PixelCraft Digital Website Inquiry Form`;
  };

  const copyInquiryText = () => {
    const text = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${getServiceTitle(formData.service)}\nMessage: ${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full py-12 md:py-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Get in Touch</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 tracking-tight">
            Let's Talk About Your Next Website
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Have a project in mind, need technical advice, or want to explore working together? Reach out directly via WhatsApp, email, or our verified inquiry form below.
          </p>
        </div>

        {/* Main 2-Column Split: Contact Channels & Working Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Channels & Information */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Channel Cards */}
            <div className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white">Direct Communication</h3>
              
              {/* WhatsApp Card */}
              <div className="p-4 rounded-xl bg-[#0B1220] border border-slate-800 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#25D366]/20 text-[#25D366] shrink-0">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-slate-400 font-medium">Fastest Response (WhatsApp)</div>
                  <div className="text-sm font-bold text-white mt-0.5">{AGENCY_CONFIG.phoneDisplay}</div>
                  <p className="text-[11px] text-slate-400 mt-1">Available for direct messages & voice notes</p>
                  <div className="mt-2.5">
                    <WhatsAppButton inline={true} text="Chat with our Lead Engineer" />
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-[#0B1220] border border-slate-800 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-blue-600/20 text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-slate-400 font-medium">Email Inquiries</div>
                  <a
                    href={`mailto:${AGENCY_CONFIG.email}`}
                    className="text-sm font-bold text-white hover:text-blue-400 transition-colors mt-0.5 block font-mono"
                  >
                    {AGENCY_CONFIG.email}
                  </a>
                  <p className="text-[11px] text-slate-400 mt-1">Written proposals & RFPs answered within 2 hours</p>
                </div>
              </div>

              {/* Hours Card */}
              <div className="p-4 rounded-xl bg-[#0B1220] border border-slate-800 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-purple-600/20 text-purple-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-slate-400 font-medium">Studio Service Hours</div>
                  <div className="text-xs font-semibold text-white mt-0.5">Monday – Friday: 8:00 AM – 6:00 PM EAT</div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Async collaboration & scheduled calls available across European, UK, and US timezones.
                  </p>
                </div>
              </div>
            </div>

            {/* Client Delivery Note */}
            <div className="p-6 rounded-2xl bg-[#090E1A] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Nationwide & Global Remote Delivery</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                PixelCraft Digital operates as a digital-first studio. We deliver bespoke web design and custom software for clients across Kenya and internationally through structured async collaboration and video consultations.
              </p>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7 bg-[#0F172A] border border-slate-800 p-8 sm:p-10 rounded-3xl relative">
            {isSubmitted ? (
              <div className="text-left py-4 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">Inquiry Reflected to Email & WhatsApp</h3>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Your inquiry has been compiled for dispatch to both official agency channels.
                    </p>
                  </div>
                </div>

                {/* Dual Channel Reflection Boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* WhatsApp Channel Card */}
                  <div className="p-4 rounded-2xl bg-[#0B1220] border border-[#25D366]/40 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-[#25D366] text-xs font-bold">
                          <MessageCircle className="w-4 h-4 fill-current" />
                          <span>WhatsApp Channel</span>
                        </div>
                        <span className="text-[10px] bg-[#25D366]/15 text-[#25D366] px-2 py-0.5 rounded-full font-mono">
                          Ready to Chat
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-white mt-2">
                        {AGENCY_CONFIG.phoneDisplay}
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Opens direct WhatsApp conversation with your full project inquiry pre-typed.
                      </p>
                    </div>
                    <a
                      href={`https://wa.me/${AGENCY_CONFIG.whatsappRaw}?text=${encodeURIComponent(getWhatsAppMessageDraft())}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold bg-[#25D366] text-slate-950 hover:bg-[#20BD5A] transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Send via WhatsApp Chat</span>
                    </a>
                  </div>

                  {/* Email Channel Card */}
                  <div className="p-4 rounded-2xl bg-[#0B1220] border border-blue-500/40 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-blue-400 text-xs font-bold">
                          <Mail className="w-4 h-4" />
                          <span>Email Channel</span>
                        </div>
                        <span className="text-[10px] bg-blue-500/15 text-blue-400 px-2 py-0.5 rounded-full font-mono">
                          Ready to Send
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-white mt-2 font-mono truncate">
                        {AGENCY_CONFIG.email}
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Opens your email client with inquiry subject and message body pre-addressed.
                      </p>
                    </div>
                    <a
                      href={`mailto:${AGENCY_CONFIG.email}?subject=${encodeURIComponent(getEmailSubject())}&body=${encodeURIComponent(getEmailBody())}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-sm shadow-blue-600/20"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send to Agency Email</span>
                    </a>
                  </div>
                </div>

                {/* Inquiry Receipt Details Box */}
                <div className="bg-[#0B1220] p-4 rounded-2xl border border-slate-800 space-y-2 text-xs">
                  <div className="text-slate-400 font-semibold text-[11px] uppercase tracking-wider pb-1 border-b border-slate-800">
                    Compiled Inquiry Details
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-slate-300">
                    <div><span className="text-slate-500">Name:</span> {formData.name}</div>
                    <div><span className="text-slate-500">Service:</span> {getServiceTitle(formData.service)}</div>
                    <div><span className="text-slate-500">Email:</span> {formData.email}</div>
                    <div><span className="text-slate-500">Phone:</span> {formData.phone}</div>
                  </div>
                  <div className="pt-2 border-t border-slate-800/80">
                    <span className="text-slate-500 block text-[11px] mb-1">Message:</span>
                    <p className="text-slate-300 bg-slate-950 p-2.5 rounded-lg border border-slate-800/80 italic text-xs leading-relaxed">
                      "{formData.message}"
                    </p>
                  </div>
                </div>

                {/* Utility Buttons */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={copyInquiryText}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium text-slate-300 bg-slate-800 hover:text-white transition-colors"
                  >
                    <span>{copied ? 'Copied to Clipboard!' : 'Copy Inquiry Summary'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: 'business-website',
                        message: '',
                        preferredContact: 'whatsapp',
                      });
                    }}
                    className="text-xs text-blue-400 hover:text-blue-300 hover:underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Send an Enquiry</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill out the fields below and our engineering team will get back to you promptly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. David Mwangi"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#0B1220] border text-white text-sm placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-blue-500'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="david@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#0B1220] border text-white text-sm placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-blue-500'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="text"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+254 7XX XXX XXX"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#0B1220] border text-white text-sm placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-blue-500'
                      }`}
                    />
                    {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Service Interested In
                    </label>
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0B1220] border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-preference" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Preferred Communication Channel
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['whatsapp', 'email', 'phone'].map((ch) => (
                      <button
                        key={ch}
                        type="button"
                        onClick={() => setFormData({ ...formData, preferredContact: ch as any })}
                        className={`py-2 px-3 rounded-lg text-xs font-medium capitalize border transition-all ${
                          formData.preferredContact === ch
                            ? 'bg-blue-600 text-white border-blue-500'
                            : 'bg-[#0B1220] text-slate-400 border-slate-800 hover:text-white'
                        }`}
                      >
                        {ch}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-msg" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    id="contact-msg"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your business, what you need built, goals, or current website challenges..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#0B1220] border text-white text-sm placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                      errors.message ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-blue-500'
                    }`}
                  />
                  {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 disabled:opacity-70"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Submitting Inquiry...' : 'Send Inquiry to PixelCraft'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
