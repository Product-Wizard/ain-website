import React, { useState } from 'react';
import { teamMembers } from '../data';
import { TeamMember } from '../types';
import { Target, Lightbulb, Compass, Award, User, ChevronRight, MessageSquareCode } from 'lucide-react';

export default function AboutView() {
  const [activeLeader, setActiveLeader] = useState<TeamMember | null>(teamMembers[0]);

  const stats = [
    { value: "100%", label: "Remote-First Delivery Strategy" },
    { value: "4.9/5", label: "Client Sourcing Satisfaction" },
    { value: "$12M+", label: "Total Client Conversion Volume" },
    { value: "3+", label: "Operational Hub Networks" }
  ];

  const valueTenets = [
    {
      title: "Pragmatic Precision",
      icon: Target,
      desc: "We do not sell abstract vanity impressions. Every line of React code, pixel of packaging design, and semantic keyword cluster must maps directly to quantifiable client business scale."
    },
    {
      title: "Radical Directness",
      icon: Lightbulb,
      desc: "If your current paid conversion infrastructure contains leakage (such as inflated cost-per-clicks or high hydration load times), we present analytical diagnostics directly rather than sugar-coating performance reports."
    },
    {
      title: "Architectural Focus",
      icon: Compass,
      desc: "Our designs and technical backends are engineered for long-term endurance, delivering lightning-fast indexable rendering, minimal framework payloads, and highly visible digital assets."
    }
  ];

  return (
    <div className="w-full bg-white">
      
      {/* LANDING SECTION */}
      <section className="bg-slate-50 py-16 lg:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold tracking-widest text-[#0F62FE] uppercase font-mono">Our Founding Manifesto</span>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl font-display leading-[1.1]">
            Architects of <span className="text-[#0F62FE]">Digital Growth</span>
          </h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed font-sans">
            Ace Innovation Nexus is more than a creative shop. We are systematic operators working across engineering, branding, content, and search loops. Yes, we build fast websites—but more importantly, we construct client market leadership.
          </p>
        </div>
      </section>

      {/* CORE TIMELINE STORY GRID */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          
          <div className="space-y-6">
            <span className="text-xs font-bold text-[#0F62FE] uppercase font-mono tracking-widest block">Building the Bridge</span>
            <h2 className="text-2xl font-black text-slate-950 sm:text-3xl font-display leading-tight">
              Bridging local brilliance with hyper-performing international channels.
            </h2>
            <p className="text-sm text-slate-550 leading-relaxed font-sans">
              Our history began with a straightforward observation: regional brands and outstanding public upsellers (such as HP LIFE) create exceptional value but often lack the specialized performance platforms to scale on search models and capture wider trust. 
            </p>
            <p className="text-sm text-slate-550 leading-relaxed font-sans">
              We assembled a cross-functional squad of technical frontend engineers, semantic SEO managers, and visual consumer branding specialists. By replacing manual workflows with optimized headless setups, geofenced campaigns, and automated WhatsApp funnels, we turned standard websites into high-conversion machinery.
            </p>
            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="border-l-2 border-[#0F62FE] pl-4">
                <span className="text-xs font-bold uppercase text-slate-400 font-mono">ESTABLISHED IN</span>
                <p className="text-lg font-bold text-slate-900 font-display">Sub-Saharan Africa</p>
              </div>
              <div className="border-l-2 border-[#0F62FE] pl-4">
                <span className="text-xs font-bold uppercase text-slate-400 font-mono">RELIABLE STABILITY</span>
                <p className="text-lg font-bold text-slate-900 font-display">94% Client Retention</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#0F62FE] to-[#3B82F6] opacity-10 blur-md animate-pulse" />
            <div className="relative rounded-2xl bg-white p-2 border border-slate-150">
              <img
                referrerPolicy="no-referrer"
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
                alt="Ace Innovation Nexus Corporate Command"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* CORE CORPORATE VALUES */}
      <section className="bg-slate-50 py-20 lg:py-24 border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold tracking-widest text-[#0F62FE] uppercase font-mono">Our Core Commitments</span>
            <h2 className="text-3xl font-black text-slate-950 font-display">The Non-Negotiables</h2>
            <p className="text-sm text-slate-550">We run our agency operations with strict adherence to quantitative value metrics.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {valueTenets.map((tenet, idx) => {
              const Icon = tenet.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm">
                  <div className="space-y-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#0F62FE]">
                      <Icon className="h-5.5 w-5.5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-950 font-display">{tenet.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-sans">{tenet.desc}</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 font-mono">
                    <span>RULE {idx + 1} OF 3</span>
                    <span className="text-[#0F62FE]">VERIFIED &bull; OK</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* INTERACTIVE SHOCK TEAM SECTION */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-[#0F62FE] uppercase font-mono">Interactive Panel</span>
          <h2 className="text-3xl font-black text-slate-950 font-display">Meet the Growth Architects</h2>
          <p className="text-sm text-slate-550">Select a manager card below to load their specialized growth narrative and individual credentials in the diagnostic reader panel.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
          
          {/* Leaders Carousel Selection (left list) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {teamMembers.map((member) => {
              const isSelected = activeLeader?.id === member.id;
              return (
                <div
                  key={member.id}
                  onClick={() => setActiveLeader(member)}
                  className={`group cursor-pointer rounded-2xl p-4.5 border transition-all flex items-center gap-4 ${
                    isSelected
                      ? 'bg-blue-50/50 border-[#0F62FE] shadow-sm'
                      : 'bg-white border-slate-200 hover:border-slate-350'
                  }`}
                >
                  <img
                    referrerPolicy="no-referrer"
                    src={member.avatar}
                    alt={member.name}
                    className="h-16 w-16 rounded-xl object-cover border border-slate-200"
                  />
                  <div>
                    <h3 className="text-base font-bold text-slate-950 font-display group-hover:text-[#0F62FE] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium font-sans mt-0.5">{member.role}</p>
                    <span className="inline-block rounded-md bg-white px-2 py-0.5 text-[9px] font-bold text-[#0F62FE] tracking-wider font-mono border border-slate-150 mt-1.5">
                      {member.department.toUpperCase()}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Diagnostic Active Reader Panel (right viewport) */}
          <div className="lg:col-span-5 rounded-2xl border-2 border-dashed border-blue-100 bg-slate-50 p-6 sm:p-8 flex flex-col justify-between">
            {activeLeader ? (
              <div className="space-y-6">
                
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[9px] font-bold text-[#0F62FE] uppercase tracking-widest font-mono">Active Architect Diagnostics</span>
                    <h3 className="text-xl font-bold text-slate-950 font-display mt-1">{activeLeader.name}</h3>
                    <p className="text-xs text-[#0F62FE] font-mono mt-0.5 uppercase tracking-wide">{activeLeader.role}</p>
                  </div>
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <User className="h-3.5 w-3.5 text-[#0F62FE]" />
                  </div>
                </div>

                <div className="bg-white border border-slate-150 p-4.5 rounded-xl text-sm italic text-slate-600 relative">
                  <span className="absolute -top-3 left-4 bg-[#0F62FE] text-white px-2 py-0.5 text-[8px] font-bold tracking-widest font-mono uppercase rounded rounded-bl-none">Manifesto Statement</span>
                  <p className="mt-1 font-sans">
                    "{activeLeader.bio}"
                  </p>
                </div>

                <div className="space-y-2 text-xs">
                  <span className="font-bold text-slate-400 font-mono block uppercase">Operational Strengths</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeLeader.department === 'Leadership' && ['Global Strategy', 'Venture Capital Coordination', 'Corporate Development'].map(t => (
                      <span key={t} className="rounded-md bg-white border border-slate-200 px-2 py-1 font-medium text-slate-600">{t}</span>
                    ))}
                    {activeLeader.department === 'Creative & Brand' && ['Visual Packaging Redesign', '3D Media Production', 'Interactive Social Filters'].map(t => (
                      <span key={t} className="rounded-md bg-white border border-slate-200 px-2 py-1 font-medium text-slate-600">{t}</span>
                    ))}
                    {activeLeader.department === 'Marketing & SEO' && ['Semantic Topic Clustering', 'Heuristic Auditing', 'Organics Acquisition'].map(t => (
                      <span key={t} className="rounded-md bg-white border border-slate-200 px-2 py-1 font-medium text-slate-600">{t}</span>
                    ))}
                    {activeLeader.department === 'Tech & Product' && ['React / Headless PWAs', 'Secured Express Frameworks', 'Low-Latency Cache Design'].map(t => (
                      <span key={t} className="rounded-md bg-white border border-slate-200 px-2 py-1 font-medium text-slate-600">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200 flex items-center justify-between text-slate-400 font-mono text-[10px]">
                  <span>RECORD_ID: {activeLeader.id.toUpperCase()}</span>
                  <span className="text-[#0F62FE] font-bold uppercase">● SECURE ADVISOR</span>
                </div>

              </div>
            ) : (
              <div className="h-full flex flex-col justify-center items-center text-center text-slate-400">
                <User className="h-8 w-8 text-slate-300 stroke-dasharray animate-pulse" />
                <p className="text-xs font-semibold mt-2">Select an advisor on the left to read their bio pipeline.</p>
              </div>
            )}
          </div>

        </div>

      </section>

      {/* CORE STATS EMBASSY BANNER */}
      <section className="bg-slate-950 text-white py-14 border-t border-slate-900">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
            {stats.map((st, idx) => (
              <div key={idx}>
                <div className="text-3xl font-black text-[#0F62FE] font-display">{st.value}</div>
                <div className="text-[10px] uppercase font-bold text-slate-400 mt-1.5 font-mono tracking-widest">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
