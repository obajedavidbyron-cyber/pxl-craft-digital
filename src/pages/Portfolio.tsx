import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Filter, Sparkles, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/agencyData';
import { ProjectModal } from '../components/ProjectModal';
import { PortfolioProject, ServiceCategory } from '../types';

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | ServiceCategory>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'business-website', label: 'Business Websites' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'web-application', label: 'Web Applications' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeFilter);

  return (
    <div className="w-full py-12 md:py-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Our Work</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 tracking-tight">
            Digital Craftsmanship in Production
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Explore authentic web applications, high-converting storefronts, and bespoke corporate websites engineered for real-world performance, speed, and business return.
          </p>
        </div>

        {/* Filter Bar (Zero-pill compliant: functional button controls with clean segmented states) */}
        <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-1.5 p-1 bg-[#0F172A] rounded-xl border border-slate-800">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  activeFilter === tab.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#0F172A] border border-slate-800 overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              {/* Image Preview */}
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

              {/* Information */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-blue-400 uppercase tracking-wider">
                      {project.categoryLabel}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">{project.client}</span>
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
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Highlights */}
                  <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-1.5">
                    {project.deliverables.slice(0, 2).map((deliv, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0B1220] text-slate-300 border border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold text-white hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>View Case Study & Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <Link
                    to={`/quote?service=${project.category}`}
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300"
                  >
                    Start Project Like This
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#0F172A] border border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">Have a unique web project in mind?</h3>
            <p className="text-sm text-slate-400 mt-1">
              We specialize in custom challenges, API integrations, and conversion-engineered designs.
            </p>
          </div>
          <Link
            to="/quote"
            className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors whitespace-nowrap shadow-md shadow-blue-600/20"
          >
            Request a Custom Proposal
          </Link>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};
