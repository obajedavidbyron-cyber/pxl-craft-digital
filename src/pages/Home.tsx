import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ExternalLink, 
  Sparkles, 
  Check, 
  Code, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  CreditCard,
  ChevronRight,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { AGENCY_CONFIG, SERVICES, PORTFOLIO_PROJECTS, WORK_PROCESS, AGENCY_BENEFITS } from '../data/agencyData';
import { ProjectModal } from '../components/ProjectModal';
import { PortfolioProject } from '../types';

export const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
        {/* Background Ambient Glow & Visual */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/15 blur-[120px] rounded-full" />
          <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-blue-900/20 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Trust Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Web Design & Development Agency · Kenya & Worldwide</span>
              </div>

              {/* Exact User Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
                Your Business Deserves a Better Website.
              </h1>

              {/* Exact User Description */}
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
                We design and build modern digital experiences that help businesses stand out, reach customers, and grow.
              </p>

              {/* Exact User Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-[#0F172A] hover:bg-slate-800 border border-slate-700/80 transition-all hover:text-white"
                >
                  <span>View Portfolio</span>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </Link>
              </div>

              {/* Quick Trust Badges */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg text-left">
                <div>
                  <div className="text-xs text-slate-400 font-medium">Speed Standard</div>
                  <div className="text-sm font-bold text-white mt-0.5">&lt; 1.5s Load Time</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Local Checkout</div>
                  <div className="text-sm font-bold text-white mt-0.5">M-Pesa + Stripe</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Architecture</div>
                  <div className="text-sm font-bold text-white mt-0.5">100% Hand-Coded</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/70 shadow-2xl shadow-blue-950/50 bg-[#0F172A] group">
                <img
                  src="/src/assets/images/hero_agency_workspace_1792693348086.jpg"
                  alt="PixelCraft Digital Agency Modern Engineering Studio"
                  className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-102 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent opacity-80" />
                
                {/* Floating highlight card */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0B1220]/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-3.5 text-left">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white">PixelCraft Digital Studio</span>
                    <span className="text-blue-400 font-mono text-[11px]">Nairobi Hub</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Delivering high-performance digital architecture for high-growth businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES & SERVICES OVERVIEW */}
      <section className="py-20 bg-[#090E1A] border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 text-left">
            <div>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">What We Build</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
                Engineering Modern Web Solutions
              </h2>
              <p className="text-slate-400 mt-2 text-sm sm:text-base max-w-xl">
                From fast-loading company sites to bespoke web apps and automated payment gateways, our services are structured to deliver direct business value.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors shrink-0"
            >
              <span>Explore All Services & Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Grid of 6 Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="group relative p-6 rounded-2xl bg-[#0F172A] border border-slate-800 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-900/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-blue-400 font-semibold">0{index + 1}</span>
                    <span className="text-[11px] text-slate-400 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800">
                      {service.timeline}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <div className="mt-5 space-y-1.5 border-t border-slate-800/80 pt-4">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[11px] text-slate-500">From </span>
                    <span className="font-semibold text-white">{service.startingPriceKES}</span>
                  </div>
                  <Link
                    to={`/quote?service=${service.id}`}
                    className="inline-flex items-center gap-1 font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>Get Quote</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS / CASE STUDIES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 text-left">
            <div>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Proof of Work</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
                Featured Client Projects
              </h2>
              <p className="text-slate-400 mt-2 text-sm sm:text-base max-w-xl">
                A selection of high-performance websites and bespoke applications engineered for authentic clients in East Africa and globally.
              </p>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors shrink-0"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Project Showcase Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
            {PORTFOLIO_PROJECTS.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl bg-[#0F172A] border border-slate-800 overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                {/* Image Showcase */}
                <div 
                  className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-black/20" />
                  <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur px-3 py-1 rounded-full text-xs font-mono text-blue-300 border border-slate-800">
                    {project.year}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-semibold text-blue-400 uppercase tracking-wider">
                        {project.categoryLabel}
                      </span>
                      {project.liveUrl && project.liveUrl !== '#' && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-[11px] text-emerald-400 hover:text-emerald-300 font-mono transition-colors"
                        >
                          <span>{project.liveUrl.replace('https://', '')}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2.5 leading-relaxed line-clamp-2">
                      {project.summary}
                    </p>

                    {/* Tech Badges */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.technologies.map((t) => (
                        <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0B1220] text-slate-300 border border-slate-800">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-bold text-white hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>Read Case Study Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <Link
                      to={`/quote?service=${project.category}`}
                      className="text-xs font-medium text-slate-400 hover:text-white transition-colors"
                    >
                      Request Similar Build
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE PIXELCRAFT / AGENCY BENEFITS */}
      <section className="py-20 bg-[#090E1A] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">The Agency Difference</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
              Why Ambitious Brands Choose PixelCraft
            </h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base">
              We reject bloated page builders, generic templates, and sluggish offshore outsourcing. Every line of code is purposeful, fast, and engineered to generate revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AGENCY_BENEFITS.map((benefit, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 hover:border-slate-700 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-400 flex items-center justify-center mb-4 border border-blue-500/20">
                  {idx === 0 && <Zap className="w-5 h-5" />}
                  {idx === 1 && <CreditCard className="w-5 h-5" />}
                  {idx === 2 && <Cpu className="w-5 h-5" />}
                  {idx === 3 && <ShieldCheck className="w-5 h-5" />}
                </div>
                <h3 className="text-lg font-bold text-white">{benefit.title}</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK PROCESS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">How We Work</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
              Our 5-Step Engineering Process
            </h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base">
              A structured, transparent roadmap from initial concept to launch and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {WORK_PROCESS.map((step) => (
              <div
                key={step.step}
                className="relative p-5 rounded-xl bg-[#0F172A] border border-slate-800/90 flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black text-blue-500/80 font-mono">{step.step}</span>
                  <h3 className="text-base font-bold text-white mt-2">{step.name}</h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CALL TO ACTION */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-b from-[#172554] to-[#0B1220] border border-blue-500/30 p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="inline-block px-3 py-1 text-xs font-bold text-blue-300 bg-blue-900/60 rounded-full border border-blue-400/30">
                Ready to Upgrade Your Digital Presence?
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Let's Build a Website That Moves Your Business Forward.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Whether you need a brand-new corporate site, an e-commerce platform with M-Pesa integration, or a custom web app, our team is ready to engineer your solution.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/quote"
                  className="px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 transition-all hover:scale-102"
                >
                  Get an Instant Project Quote
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-[#0B1220] hover:bg-slate-800 border border-slate-700 transition-all"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project details modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};
