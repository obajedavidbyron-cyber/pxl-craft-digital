import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Calculator, 
  Check, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  MessageCircle, 
  ArrowRight,
  FileText,
  Copy,
  Sparkles,
  Mail
} from 'lucide-react';
import { SERVICES, AGENCY_CONFIG } from '../data/agencyData';
import { ServiceCategory } from '../types';

export const Quote: React.FC = () => {
  const [searchParams] = useSearchParams();

  const [currency, setCurrency] = useState<'KES' | 'USD'>('KES');
  const [projectType, setProjectType] = useState<ServiceCategory>('business-website');
  const [budgetRange, setBudgetRange] = useState<string>('KES 60,000 – 120,000');
  const [deadline, setDeadline] = useState<string>('2 – 4 weeks');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['seo', 'mobile-first']);
  
  const [contactName, setContactName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectBrief, setProjectBrief] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sync query params if present
  useEffect(() => {
    const sParam = searchParams.get('service') as ServiceCategory;
    if (sParam && SERVICES.some(s => s.id === sParam)) {
      setProjectType(sParam);
    }
    const cParam = searchParams.get('currency') as 'KES' | 'USD';
    if (cParam === 'KES' || cParam === 'USD') {
      setCurrency(cParam);
    }
  }, [searchParams]);

  // Dynamic budget ranges based on currency
  const budgetOptionsKES = [
    'KES 35,000 – 60,000 (Starter / Single-page)',
    'KES 60,000 – 120,000 (Complete Business Website)',
    'KES 120,000 – 250,000 (E-Commerce with M-Pesa / Custom Features)',
    'KES 250,000 – 500,000+ (Full Custom Web Application / SaaS)',
    'Flexible / Seeking Professional Scope Recommendation',
  ];

  const budgetOptionsUSD = [
    '$300 – $600 (Starter / Campaign Landing Page)',
    '$600 – $1,200 (Complete Business Website)',
    '$1,200 – $2,500 (E-Commerce / Custom Storefront)',
    '$2,500 – $5,000+ (Custom Full-Stack Application)',
    'Flexible / Scope-Based Recommendation',
  ];

  const featureOptions = [
    { id: 'mobile-first', label: 'Ultra-Fast Mobile Optimization (< 1.5s)' },
    { id: 'mpesa', label: 'Kenyan Mobile Money (M-Pesa STK Push / Airtel)' },
    { id: 'stripe', label: 'International Card Processing (Stripe / Pesapal)' },
    { id: 'cms', label: 'CMS Dashboard for Easy Text & Image Updates' },
    { id: 'seo', label: 'Advanced SEO & Schema.org Structured Data' },
    { id: 'auth', label: 'User Authentication & Member Accounts' },
    { id: 'multilang', label: 'Multi-Language Support (English/Swahili)' },
    { id: 'analytics', label: 'Conversion Tracking & Custom Analytics Events' },
  ];

  const deadlineOptions = [
    'Urgent (Under 2 weeks)',
    '2 – 4 weeks (Standard)',
    '1 – 2 months (Comprehensive)',
    'Flexible / Milestone-Driven',
  ];

  const toggleFeature = (id: string) => {
    setSelectedFeatures(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!contactName.trim()) errs.contactName = 'Please enter your full name.';
    if (!email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!phone.trim()) {
      errs.phone = 'Please provide a valid phone or WhatsApp number.';
    }
    if (!projectBrief.trim() || projectBrief.trim().length < 15) {
      errs.projectBrief = 'Please share a brief description of what you need (min. 15 characters).';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const getQuoteSummaryText = () => {
    const serviceName = SERVICES.find(s => s.id === projectType)?.title || projectType;
    return `PIXELCRAFT DIGITAL QUOTE REQUEST
Client: ${contactName} (${businessName || 'Independent'})
Email: ${email} | Phone: ${phone}
Service: ${serviceName}
Currency: ${currency}
Budget Range: ${budgetRange}
Target Deadline: ${deadline}
Features: ${selectedFeatures.join(', ')}
Brief: ${projectBrief}`;
  };

  const copySummary = () => {
    navigator.clipboard.writeText(getQuoteSummaryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getWhatsAppQuoteUrl = () => {
    const serviceName = SERVICES.find(s => s.id === projectType)?.title || projectType;
    const text = `*PIXELCRAFT DIGITAL QUOTE INQUIRY*\n*Name:* ${contactName} (${businessName || 'Client'})\n*Email:* ${email}\n*Phone:* ${phone}\n*Service:* ${serviceName}\n*Budget:* ${budgetRange}\n*Timeline:* ${deadline}\n*Brief:* ${projectBrief}`;
    return `https://wa.me/${AGENCY_CONFIG.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  const getEmailQuoteSubject = () => {
    const serviceName = SERVICES.find(s => s.id === projectType)?.title || projectType;
    return `Quote Request: ${contactName} - ${serviceName} (${currency})`;
  };

  const getEmailQuoteBody = () => {
    const serviceName = SERVICES.find(s => s.id === projectType)?.title || projectType;
    return `Hello PixelCraft Digital,\n\nI have prepared a quote inquiry for a new project:\n\nContact Name: ${contactName}\nOrganization: ${businessName || 'N/A'}\nEmail: ${email}\nPhone/WhatsApp: ${phone}\n\nProject Type: ${serviceName}\nCurrency: ${currency}\nBudget Range: ${budgetRange}\nTarget Timeline: ${deadline}\nSelected Requirements: ${selectedFeatures.join(', ')}\n\nProject Brief & Goals:\n${projectBrief}\n\n---\nTransmitted via PixelCraft Digital Estimator`;
  };

  return (
    <div className="w-full py-12 md:py-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Project Estimator</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 tracking-tight">
            Request an Accurate Project Quote
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Tell us about your business goals and technical specifications. We provide clear, itemized proposals with zero hidden costs, fixed schedules, and milestone delivery.
          </p>
        </div>

        {/* Currency Switcher Pill */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-slate-400">Currency Preference:</span>
          <div className="inline-flex rounded-lg bg-[#0F172A] p-1 border border-slate-800">
            <button
              type="button"
              onClick={() => {
                setCurrency('KES');
                setBudgetRange(budgetOptionsKES[1]);
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                currency === 'KES' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Kenyan Shillings (KES)
            </button>
            <button
              type="button"
              onClick={() => {
                setCurrency('USD');
                setBudgetRange(budgetOptionsUSD[1]);
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                currency === 'USD' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              US Dollars (USD $)
            </button>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-6 sm:p-10 md:p-12 relative shadow-2xl">
          {isSubmitted ? (
            <div className="text-left py-4 space-y-6 max-w-2xl mx-auto">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white">Quote Request Reflected to Both Channels</h2>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Your request has been compiled for instant dispatch to both WhatsApp and Email.
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
                      Direct chat with lead engineer with full quote specifications pre-typed.
                    </p>
                  </div>
                  <a
                    href={getWhatsAppQuoteUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold bg-[#25D366] text-slate-950 hover:bg-[#20BD5A] transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Send to WhatsApp Chat</span>
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
                      Opens email client with complete itemized quote request addressed to agency.
                    </p>
                  </div>
                  <a
                    href={`mailto:${AGENCY_CONFIG.email}?subject=${encodeURIComponent(getEmailQuoteSubject())}&body=${encodeURIComponent(getEmailQuoteBody())}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-sm shadow-blue-600/20"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send to Agency Email</span>
                  </a>
                </div>
              </div>

              {/* Summary box */}
              <div className="bg-[#0B1220] p-4 rounded-2xl border border-slate-800 text-left text-xs space-y-2">
                <div className="text-slate-400 uppercase text-[10px] font-semibold pb-1 border-b border-slate-800">
                  Compiled Quote Summary
                </div>
                <div className="grid grid-cols-2 gap-2 text-slate-300">
                  <div><span className="text-slate-500">Client:</span> {contactName}</div>
                  <div><span className="text-slate-500">Service:</span> {SERVICES.find(s => s.id === projectType)?.title}</div>
                  <div><span className="text-slate-500">Budget:</span> {budgetRange}</div>
                  <div><span className="text-slate-500">Timeline:</span> {deadline}</div>
                </div>
                <div className="text-slate-400 text-[11px] pt-1 border-t border-slate-800/80">
                  <span className="text-slate-500">Features Selected:</span> {selectedFeatures.join(', ')}
                </div>
              </div>

              {/* Fast Action Options */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={copySummary}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-200 hover:text-white transition-colors"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-blue-400 hover:underline"
                >
                  Edit or submit another quote request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Step 1: Project Type */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
                  <span className="w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center font-mono">1</span>
                  <span>Select Project Type</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {SERVICES.map((srv) => (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setProjectType(srv.id)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        projectType === srv.id
                          ? 'border-blue-500 bg-blue-950/40 text-white shadow-md'
                          : 'border-slate-800 bg-[#0B1220] text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="font-semibold text-white text-sm">{srv.title}</div>
                      <div className="text-xs text-slate-400 mt-1 line-clamp-1">{srv.tagline}</div>
                      <div className="text-[11px] text-blue-400 font-mono mt-2 font-medium">
                        {currency === 'KES' ? srv.startingPriceKES : srv.startingPriceUSD} base
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Budget Range */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
                  <span className="w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center font-mono">2</span>
                  <span>Expected Budget Range ({currency})</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(currency === 'KES' ? budgetOptionsKES : budgetOptionsUSD).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setBudgetRange(opt)}
                      className={`p-3.5 rounded-xl border text-left text-xs transition-all ${
                        budgetRange === opt
                          ? 'border-blue-500 bg-blue-950/40 text-white font-semibold'
                          : 'border-slate-800 bg-[#0B1220] text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Target Timeline */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
                  <span className="w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center font-mono">3</span>
                  <span>Target Launch Timeline</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {deadlineOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setDeadline(opt)}
                      className={`p-3 rounded-xl border text-center text-xs transition-all ${
                        deadline === opt
                          ? 'border-blue-500 bg-blue-950/40 text-white font-semibold'
                          : 'border-slate-800 bg-[#0B1220] text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Feature Requirements Checklist */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
                  <span className="w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center font-mono">4</span>
                  <span>Specific Requirements & Features (Select all needed)</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {featureOptions.map((feat) => {
                    const isChecked = selectedFeatures.includes(feat.id);
                    return (
                      <div
                        key={feat.id}
                        onClick={() => toggleFeature(feat.id)}
                        className={`p-3 rounded-xl border cursor-pointer flex items-center gap-3 text-xs transition-all ${
                          isChecked
                            ? 'border-blue-500/80 bg-blue-950/30 text-white'
                            : 'border-slate-800 bg-[#0B1220] text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded flex items-center justify-center border ${isChecked ? 'bg-blue-600 border-blue-500 text-white' : 'border-slate-700 bg-slate-900'}`}>
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                        <span>{feat.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 5: Contact Details & Project Description */}
              <div className="space-y-4 pt-4 border-t border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
                  <span className="w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center font-mono">5</span>
                  <span>Your Details & Project Brief</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="quote-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      id="quote-name"
                      type="text"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Sarah Otieno"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#0B1220] border text-white text-sm placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.contactName ? 'border-red-500' : 'border-slate-800 focus:border-blue-500'
                      }`}
                    />
                    {errors.contactName && <p className="text-xs text-red-400 mt-1">{errors.contactName}</p>}
                  </div>

                  <div>
                    <label htmlFor="quote-biz" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Company / Organization Name (Optional)
                    </label>
                    <input
                      id="quote-biz"
                      type="text"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="e.g. Apex Safari Co."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0B1220] border border-slate-800 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="quote-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="quote-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="sarah@apexsafaris.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#0B1220] border text-white text-sm placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500' : 'border-slate-800 focus:border-blue-500'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="quote-phone" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      id="quote-phone"
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+254 7XX XXX XXX"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#0B1220] border text-white text-sm placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-slate-800 focus:border-blue-500'
                      }`}
                    />
                    {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="quote-brief" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Project Goals & Requirements Description *
                  </label>
                  <textarea
                    id="quote-brief"
                    rows={4}
                    value={projectBrief}
                    onChange={(e) => setProjectBrief(e.target.value)}
                    placeholder="Tell us what you want to achieve, any example sites you like, your target customers, or integrations required..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#0B1220] border text-white text-sm placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                      errors.projectBrief ? 'border-red-500' : 'border-slate-800 focus:border-blue-500'
                    }`}
                  />
                  {errors.projectBrief && <p className="text-xs text-red-400 mt-1">{errors.projectBrief}</p>}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400 text-left">
                  <ShieldCheck className="w-4 h-4 text-blue-400 inline mr-1.5" />
                  <span>No obligation · 100% confidential · Direct engineer response</span>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Generating Proposal Request...' : 'Submit Quote Request'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
