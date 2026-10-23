import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  ArrowRight, 
  Clock, 
  Tag, 
  Layers, 
  Cpu, 
  HelpCircle,
  CreditCard,
  Sparkles,
  Calculator
} from 'lucide-react';
import { SERVICES, AGENCY_CONFIG } from '../data/agencyData';
import { ServiceCategory } from '../types';

export const Services: React.FC = () => {
  const [currency, setCurrency] = useState<'KES' | 'USD'>('KES');
  const [selectedService, setSelectedService] = useState<ServiceCategory>('business-website');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['seo-pack']);

  const addonsList = [
    { id: 'mpesa', name: 'M-Pesa STK Push & Daraja API', priceKES: 25000, priceUSD: 195 },
    { id: 'seo-pack', name: 'Advanced SEO & Schema.org Structured Data', priceKES: 15000, priceUSD: 120 },
    { id: 'cms', name: 'Headless CMS for Instant Content Editing', priceKES: 20000, priceUSD: 155 },
    { id: 'multilang', name: 'Multi-Language Support (English/Swahili/French)', priceKES: 18000, priceUSD: 140 },
    { id: 'analytics', name: 'Google Analytics 4 & Custom Conversion Tracking', priceKES: 12000, priceUSD: 95 },
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const currentServiceObj = SERVICES.find(s => s.id === selectedService) || SERVICES[0];

  // Base pricing
  const basePricesKES: Record<ServiceCategory, number> = {
    'business-website': 65000,
    'landing-page': 35000,
    'ecommerce': 110000,
    'web-application': 180000,
    'redesign': 55000,
    'maintenance': 18000,
  };

  const basePricesUSD: Record<ServiceCategory, number> = {
    'business-website': 500,
    'landing-page': 280,
    'ecommerce': 850,
    'web-application': 1400,
    'redesign': 420,
    'maintenance': 140,
  };

  const calculateEstimate = () => {
    const base = currency === 'KES' ? basePricesKES[selectedService] : basePricesUSD[selectedService];
    const addonsTotal = selectedAddons.reduce((sum, addonId) => {
      const addon = addonsList.find(a => a.id === addonId);
      if (!addon) return sum;
      return sum + (currency === 'KES' ? addon.priceKES : addon.priceUSD);
    }, 0);

    return base + addonsTotal;
  };

  return (
    <div className="w-full py-12 md:py-20 text-left">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Service Catalog</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 tracking-tight">
            Web Solutions Built for Conversion & Scale
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Every business requires a distinct technical strategy. Explore our six core service offerings, complete with transparent deliverables, technology stacks, and realistic project timelines.
          </p>
        </div>
      </div>

      {/* Services Deep Dive */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {SERVICES.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className="p-8 md:p-10 rounded-3xl bg-[#0F172A] border border-slate-800 hover:border-slate-700 transition-all scroll-mt-28"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Title, Tagline, Overview */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-blue-400">0{index + 1}</span>
                  <span className="text-xs text-slate-400">·</span>
                  <span className="text-xs font-medium text-slate-300">{service.idealFor}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {service.title}
                </h2>
                
                <p className="text-sm font-semibold text-blue-300">
                  {service.tagline}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed pt-1">
                  {service.fullDescription}
                </p>

                {/* Tech Stack */}
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Core Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.techStack.map(tech => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-[#0B1220] text-blue-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Deliverables & Pricing */}
              <div className="lg:col-span-5 bg-[#0B1220] p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                    What's Included
                  </h4>
                  <ul className="space-y-2.5">
                    {service.deliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Standard Timeline</div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5 mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-blue-400" />
                      <span>{service.timeline}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] text-slate-500 font-medium">Starting Investment</div>
                    <div className="text-sm font-bold text-white">
                      {service.startingPriceKES}
                      <span className="text-xs text-slate-400 font-normal"> / {service.startingPriceUSD}</span>
                    </div>
                  </div>
                </div>

                <Link
                  to={`/quote?service=${service.id}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-md shadow-blue-600/20"
                >
                  <span>Request Quote for {service.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* INTERACTIVE SCOPE & COST ESTIMATOR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="rounded-3xl bg-[#0F172A] border border-blue-500/30 p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-2xl mb-8">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Calculator className="w-4 h-4" />
              <span>Interactive Estimator</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Calculate Your Project Scope & Estimate
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              Select your required service and add-ons below for an instant transparent investment range.
            </p>
          </div>

          {/* Currency Toggle */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-medium text-slate-400">Display Currency:</span>
            <div className="inline-flex rounded-lg bg-[#0B1220] p-1 border border-slate-800">
              <button
                type="button"
                onClick={() => setCurrency('KES')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                  currency === 'KES' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                KES (Kenya Shilling)
              </button>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                  currency === 'USD' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                USD ($)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Selection */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                  1. Select Core Service
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedService(s.id)}
                      className={`p-3 rounded-xl border text-left text-xs transition-all ${
                        selectedService === s.id
                          ? 'border-blue-500 bg-blue-950/40 text-white font-semibold'
                          : 'border-slate-800 bg-[#0B1220] text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="font-semibold text-white">{s.title}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {currency === 'KES' ? s.startingPriceKES : s.startingPriceUSD}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                  2. Optional Add-ons & Integrations
                </label>
                <div className="space-y-2">
                  {addonsList.map((addon) => {
                    const isChecked = selectedAddons.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between text-xs transition-all ${
                          isChecked
                            ? 'border-blue-500/80 bg-blue-950/30 text-white'
                            : 'border-slate-800 bg-[#0B1220] text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`w-4 h-4 rounded flex items-center justify-center border ${isChecked ? 'bg-blue-600 border-blue-500 text-white' : 'border-slate-700 bg-slate-900'}`}>
                            {isChecked && <Check className="w-3 h-3" />}
                          </div>
                          <span>{addon.name}</span>
                        </div>
                        <span className="font-mono text-slate-300 text-[11px]">
                          +{currency === 'KES' ? `KES ${addon.priceKES.toLocaleString()}` : `$${addon.priceUSD}`}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5 bg-[#0B1220] p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Estimated Project Scope
              </h3>

              <div className="space-y-3 text-xs border-b border-slate-800 pb-4">
                <div className="flex justify-between">
                  <span className="text-slate-400">Core Service:</span>
                  <span className="font-semibold text-white">{currentServiceObj.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Est. Timeline:</span>
                  <span className="font-semibold text-blue-400">{currentServiceObj.timeline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Add-ons Selected:</span>
                  <span className="font-semibold text-white">{selectedAddons.length} item(s)</span>
                </div>
              </div>

              <div>
                <div className="text-xs text-slate-400 font-medium">Estimated Investment:</div>
                <div className="text-3xl font-extrabold text-white mt-1">
                  {currency === 'KES'
                    ? `KES ${calculateEstimate().toLocaleString()}`
                    : `$${calculateEstimate().toLocaleString()}`}
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  *Indicative base estimate. Final fixed quotation delivered following discovery consultation.
                </p>
              </div>

              <Link
                to={`/quote?service=${selectedService}&budget=${calculateEstimate()}&currency=${currency}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30"
              >
                <span>Request Formal Proposal with this Scope</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
