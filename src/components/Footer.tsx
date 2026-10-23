import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Mail, Phone, MessageCircle, MapPin, ArrowUpRight } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/agencyData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070D18] border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5 text-xl font-bold tracking-tight text-white">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Code2 className="w-5 h-5" />
              </div>
              <span>PixelCraft Digital</span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {AGENCY_CONFIG.tagline}
            </p>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              We engineer custom business websites, high-converting landing pages, e-commerce stores with M-Pesa integration, and scalable web apps for brands in Kenya and worldwide.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://wa.me/${AGENCY_CONFIG.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500 transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${AGENCY_CONFIG.email}`}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={AGENCY_CONFIG.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500 transition-colors"
                aria-label="LinkedIn"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors">Portfolio & Work</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About the Agency</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/quote" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">Get an Instant Quote</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/services#business-website" className="hover:text-white transition-colors">Business Websites</Link>
              </li>
              <li>
                <Link to="/services#landing-page" className="hover:text-white transition-colors">Campaign Landing Pages</Link>
              </li>
              <li>
                <Link to="/services#ecommerce" className="hover:text-white transition-colors">E-Commerce & M-Pesa</Link>
              </li>
              <li>
                <Link to="/services#web-application" className="hover:text-white transition-colors">Custom Web Applications</Link>
              </li>
              <li>
                <Link to="/services#redesign" className="hover:text-white transition-colors">Website Redesign</Link>
              </li>
              <li>
                <Link to="/services#maintenance" className="hover:text-white transition-colors">Website Maintenance</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Delivery */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Contact & Delivery</h4>
            <div className="space-y-2 text-xs">
              <p className="text-slate-400">
                Serving businesses throughout Kenya and internationally via structured remote development.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`tel:${AGENCY_CONFIG.phone}`} className="hover:text-white transition-colors">
                  {AGENCY_CONFIG.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`mailto:${AGENCY_CONFIG.email}`} className="hover:text-white transition-colors">
                  {AGENCY_CONFIG.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} PixelCraft Digital. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Built with clean React, TypeScript & Tailwind</span>
            <span>·</span>
            <Link to="/contact" className="hover:text-slate-400 transition-colors">Privacy & Scope Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
