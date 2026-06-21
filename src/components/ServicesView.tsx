import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, TrendingUp, Target, Code, X, ShieldAlert, Award } from 'lucide-react';
import { caseStudies } from '../data';
import { CaseStudy } from '../types';

export default function ServicesView() {
  const [filterCategory, setFilterCategory] = useState<'All' | 'Branding & Strategy' | 'Digital Marketing' | 'Tech Products'>('All');
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  const categoriesOrdered: ('All' | 'Branding & Strategy' | 'Digital Marketing' | 'Tech Products')[] = [
    'All',
    'Branding & Strategy',
    'Digital Marketing',
    'Tech Products'
  ];

  const filteredProjects = caseStudies.filter(p => {
    if (filterCategory === 'All') return true;
    return p.category === filterCategory;
  });

  const mainServices = [
    {
      title: "Brand Strategy & Packaging Identity",
      slug: "strategy-design",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
      icon: Target,
      tag: "Visual Equity",
      description: "Carving out unmissable corporate and consumer footprints. We redefine packaging visuals, construct visual style guides, and design memorable digital identities that capture real buyer trust on supermarket shelves and mobile apps alike.",
      bullets: ["Aesthetic & packaging engineering", "Brand voice & slogan structures", "Multi-platform visual guides", "Corporate pitch storytelling"]
    },
    {
      title: "Headless Content & Semantic SEO",
      slug: "marketing-seo",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      icon: TrendingUp,
      tag: "Organic Search",
      description: "Escaping the pay-per-click loop. We map user intentions to formulate logical keyword clusters, execute deep backlink coordination, and optimize technical schema layers to ensure you secure durable Rank 1 positions.",
      bullets: ["Semantic gap & cluster audits", "Frictionless content writing", "Headless SEO rendering", "Lead-generation conversions"]
    },
    {
      title: "Technical Web & Product Infrastructure",
      slug: "technical-infra",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      icon: Code,
      tag: "Custom Systems",
      description: "Developing robust, lightweight digital experiences that load in milliseconds even in rural, low-bandwidth regions. We build React frontends integrated with secure Node/Express API proxies to safeguard client data.",
      bullets: ["Vite & React client interfaces", "Secured Node/Express REST APIs", "Database structures & offline caches", "Minimalist data bundles"]
    }
  ];

  return (
    <div className="w-full bg-white">
      
      {/* HEADER HERO BANNER */}
      <section className="bg-slate-50 py-16 lg:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold tracking-widest text-[#0F62FE] uppercase font-mono">Our Impact in Action</span>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl font-display leading-[1.1]">
            Architecting Resilient Growth
          </h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed font-sans">
            Explore our core service vectors and verified case studies illustrating how we help multinational programs, e-commerce giants, and emerging fintech hubs thrive across Africa and beyond.
          </p>
        </div>
      </section>

      {/* CORE SERVICES CARDS */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold tracking-widest text-[#0F62FE] uppercase font-mono">The Nexus Suite</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 font-display">Specialized Capabilities</h2>
          <p className="text-sm text-slate-500">Every vector is matched to quantitative performance. We do not design for empty pages, but for brand equity.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {mainServices.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                id={`service-card-${srv.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-slate-150 p-6 shadow-sm hover:shadow-md transition-shadow bg-white"
              >
                <div>
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-slate-100">
                    <img
                      referrerPolicy="no-referrer"
                      src={srv.img}
                      alt={srv.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-102"
                    />
                    <div className="absolute top-3 left-3 rounded-lg bg-[#0F62FE] text-white px-3 py-1 text-[10px] font-bold tracking-widest font-mono uppercase">
                      {srv.tag}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0F62FE]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-950 font-display leading-tight">{srv.title}</h3>
                  </div>

                  <p className="mt-4 text-xs tracking-wide uppercase font-mono font-bold text-[#0F62FE]">Capabilities & Blueprints</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-650">
                    {srv.bullets.map((bull, i) => (
                      <li key={i} className="flex gap-2 items-center">
                        <CheckCircle2 className="h-4 w-4 text-[#0F62FE] shrink-0" />
                        <span>{bull}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 text-sm text-slate-500 leading-relaxed font-sans">{srv.description}</p>
                </div>

                <div className="mt-8 border-t border-slate-100 pt-5">
                  <span className="text-xs font-bold text-slate-400 font-mono tracking-wider">ACE ARCHITECTS BLUEPRINT v1.0</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FILTERABLE PORTFOLIO SECTION */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
            <span className="text-xs font-bold tracking-widest text-[#0F62FE] uppercase font-mono text-center">Case Studies</span>
            <h2 className="text-3xl font-black text-slate-950 font-display">Verified Outcomes</h2>
            <p className="text-sm text-slate-550 max-w-md mx-auto">Click any project to inspect our implementation methods, direct resolutions, and scope details.</p>
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
            {categoriesOrdered.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all border ${
                  filterCategory === cat
                    ? 'bg-[#0F62FE] text-white border-[#0F62FE] shadow-sm'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {cat === 'All' ? 'All Operations' : cat}
              </button>
            ))}
          </div>

          {/* Grid display list */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-slate-150">
                    <img
                      referrerPolicy="no-referrer"
                      src={project.image}
                      alt={project.client}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-102"
                    />
                    <div className="absolute top-3 left-3 rounded-md bg-white px-2.5 py-1 text-[9px] font-bold text-slate-800 uppercase tracking-wider font-mono">
                      {project.category}
                    </div>
                  </div>

                  <h3 className="mt-5 text-xs font-bold text-[#0F62FE] tracking-wide uppercase font-mono">{project.client}</h3>
                  <h4 className="mt-1.5 text-lg font-extrabold text-slate-950 font-display leading-tight group-hover:text-[#0F62FE] transition-colors">
                    {project.title}
                  </h4>
                  <p className="mt-3 text-sm text-slate-550 line-clamp-3">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5 pr-1 flex items-center justify-between">
                  <div className="flex gap-4">
                    {project.metrics.map((met, idx) => (
                      <div key={idx}>
                        <div className="text-base font-black text-slate-900 font-display leading-tight">{met.value}</div>
                        <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider font-mono">{met.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-600 transition-colors group-hover:bg-[#0F62FE] group-hover:text-white">
                    <ArrowUpRight className="h-4.5 w-4.5" />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* DETAIL DRAWER / MODAL SHEET */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
          <div
            id="case-study-modal-container"
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Close trigger */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-950 focus:outline-none"
              title="Close Modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Content body */}
            <div className="space-y-6 text-left">
              
              <div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#0F62FE] uppercase tracking-wider font-mono">
                  Case Blueprint &bull; {selectedProject.category}
                </span>
                <span className="text-xs font-bold text-slate-400 block mt-2 font-mono">CLIENT: {selectedProject.client.toUpperCase()}</span>
                <h3 className="mt-2 text-2xl font-black text-slate-950 font-display leading-snug">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Graphic aspect */}
              <div className="aspect-video overflow-hidden rounded-2xl bg-slate-150">
                <img
                  referrerPolicy="no-referrer"
                  src={selectedProject.image}
                  alt={selectedProject.client}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Key numbers metrics */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 border-y border-slate-100 py-6">
                {selectedProject.metrics.map((metrics_data, idx) => (
                  <div key={idx} className="bg-slate-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-black text-[#0F62FE] font-display">{metrics_data.value}</div>
                    <div className="text-xs font-semibold text-slate-500 mt-1 font-mono uppercase tracking-wider">{metrics_data.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h4 className="text-base font-bold text-slate-950 font-display">Growth Diagnostics & Challenge</h4>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">{selectedProject.description}</p>
              </div>

              <div className="space-y-4">
                <h4 className="text-base font-bold text-slate-950 font-display">Our Engineered Solution</h4>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">{selectedProject.solution}</p>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-bold text-slate-950 font-display">Operational Scope Deliverables</h4>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {selectedProject.scope.map((scp, idx) => (
                    <div key={idx} className="flex gap-2.5 items-center text-sm text-slate-600">
                      <Award className="h-4 w-4 text-[#0F62FE] shrink-0" />
                      <span>{scp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex justify-end">
                <button
                  id="modal-dismiss-btn"
                  onClick={() => setSelectedProject(null)}
                  className="rounded-xl bg-[#0F62FE] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#074299]"
                >
                  Close Case Audit
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
