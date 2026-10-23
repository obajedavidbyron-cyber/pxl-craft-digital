import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Check, 
  Code2, 
  ShieldCheck, 
  Cpu, 
  Globe2, 
  Sparkles, 
  Layers, 
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { AGENCY_CONFIG, WORK_PROCESS, FAQS } from '../data/agencyData';

export const About: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const values = [
    {
      title: 'Craftsmanship Over Templates',
      description: 'We believe your business is too unique to be crammed into a generic WordPress or Shopify template. Every component is intentionally written for speed and readability.'
    },
    {
      title: 'Performance Is a Feature',
      description: 'Slow websites bleed revenue. We benchmark every build against strict Core Web Vitals, ensuring sub-1.5s load times on Kenyan 4G and international networks.'
    },
    {
      title: 'Transparent Collaboration',
      description: 'No jargon or hidden fees. We work with open GitHub repositories, staging URLs, clear milestones, and direct communication with senior engineers.'
    },
    {
      title: 'Local Roots, Global Horizons',
      description: 'Headquartered with our service-area hub in Nairobi, we build digital infrastructure for local Kenyan champions and international businesses alike.'
    }
  ];

  return (
    <div className="w-full py-12 md:py-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Hero Section */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">About PixelCraft Digital</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 tracking-tight">
            We Engineer Digital Experiences That Move Businesses Forward.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            PixelCraft Digital was founded to solve a pervasive problem in digital agency services: slow, cookie-cutter websites that fail to convert visitors into customers. We blend clean software engineering with thoughtful design to build enduring web products.
          </p>
        </div>

        {/* Agency Mission & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0F172A] border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Our Purpose</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                Elevating African & Global Businesses Through Code
              </h2>
              <p className="text-sm text-slate-300 mt-4 leading-relaxed">
                Whether you are a Kenyan tour operator competing for European safari bookings, a specialty agricultural exporter selling to international buyers, or a fintech automating merchant payments, your website is your most valuable digital asset.
              </p>
              <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                We bridge the gap between creative visual presentation and robust full-stack engineering, making sure your digital presence operates smoothly 24/7.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center gap-6">
              <div>
                <div className="text-2xl font-black text-white font-mono">100%</div>
                <div className="text-xs text-slate-400 mt-0.5">Custom Codebase</div>
              </div>
              <div className="h-8 w-px bg-slate-800" />
              <div>
                <div className="text-2xl font-black text-white font-mono">24/7</div>
                <div className="text-xs text-slate-400 mt-0.5">Uptime Standard</div>
              </div>
              <div className="h-8 w-px bg-slate-800" />
              <div>
                <div className="text-2xl font-black text-white font-mono">&lt; 1.5s</div>
                <div className="text-xs text-slate-400 mt-0.5">Target Speed</div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-blue-400 mb-2">0{i + 1}</div>
                  <h3 className="text-base font-bold text-white">{v.title}</h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development Methodology */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0F172A] border border-slate-800">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Engineering Rigor</span>
            <h2 className="text-3xl font-extrabold text-white mt-2">
              Our 5-Stage Delivery Process
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              Every project follows an agile, transparent lifecycle designed to eliminate uncertainty and ensure on-time delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {WORK_PROCESS.map((wp) => (
              <div key={wp.step} className="p-5 rounded-xl bg-[#0B1220] border border-slate-800">
                <span className="text-xl font-bold font-mono text-blue-400">{wp.step}</span>
                <h3 className="text-sm font-bold text-white mt-2">{wp.name}</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {wp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Brand & Domain Diligence Notice (Prompt Requirement) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#090E1A] border border-slate-800">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-400 shrink-0 mt-1 border border-blue-500/20">
              <Globe2 className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-bold text-white">
                Brand & Domain Verification Advisory
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed max-w-3xl">
                In strict adherence to business naming diligence, PixelCraft Digital is presented as an independent digital web engineering agency. For domain deployment:
              </p>
              <ul className="text-xs text-slate-300 space-y-1 list-disc pl-5">
                <li>
                  <strong className="text-white">pixelcraftdigital.co.ke:</strong> Can be verified and registered through KeNIC (Kenya Network Information Centre) accredited registrars (such as Safaricom Domains, Truehost Kenya, or Kenya Website Experts).
                </li>
                <li>
                  <strong className="text-white">pixelcraftdigital.com:</strong> Subject to ICANN registry availability and trademark clearance prior to international brand launch.
                </li>
              </ul>
              <p className="text-[11px] text-slate-500 pt-1">
                We assist all clients with DNS configuration, domain protection, and professional Google Workspace email setup during launch.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Got Questions?</span>
            <h2 className="text-3xl font-extrabold text-white mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-[#0F172A] border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-white text-sm hover:text-blue-400 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                      openFaq === idx ? 'rotate-180 text-blue-400' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-8">
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30"
          >
            <span>Start Your Project With Us</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
