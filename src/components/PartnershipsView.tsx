import React, { useState } from 'react';
import { partnerTiers, regionPartners } from '../data';
import { RegionPartner } from '../types';
import { Network, ArrowUpRight, Globe, CheckCircle2, ChevronRight, Sparkles, Database, Send, ThumbsUp } from 'lucide-react';

export default function PartnershipsView() {
  const [activePartner, setActivePartner] = useState<RegionPartner | null>(
    regionPartners.find(r => r.country === 'Nigeria') || regionPartners[0]
  );

  // Partnership form states
  const [candidateOrg, setCandidateOrg] = useState('');
  const [candidateContact, setCandidateContact] = useState('');
  const [candidateType, setCandidateType] = useState('Agency & Tech Implementation');
  const [collaborationProposal, setCollaborationProposal] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const handleSubmitProposal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!candidateOrg || !candidateContact) return alert("Please clarify organization name and contact email.");
    
    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      setFormSuccess(true);
    }, 1500);
  };

  const handleResetForm = () => {
    setCandidateOrg('');
    setCandidateContact('');
    setCollaborationProposal('');
    setFormSuccess(false);
  };

  return (
    <div className="w-full bg-white">
      
      {/* PARTNERSHIPS INTRO HERO */}
      <section className="bg-slate-50 py-16 lg:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold tracking-widest text-[#0F62FE] uppercase font-mono">Scaling Through Interconnection</span>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl font-display leading-[1.1]">
            Scaling Through Strategic Collaboration
          </h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed font-sans">
            Ace Innovation Nexus collaborates globally to sync operational intelligence, performance metrics, and digital assets. Our ecosystem ties leading design academies with global capital channels.
          </p>
        </div>
      </section>

      {/* CORE PARTNERS MAP PLOT viewport */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold tracking-widest text-[#0F62FE] uppercase font-mono">Hub Network Map</span>
          <h2 className="text-3xl font-black text-slate-950 font-display">Our Regional Nodes</h2>
          <p className="text-sm text-slate-550">Click any interactive highlighted pulse node below to view corporate partner details and scales.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-stretch">
          
          {/* Schematic Graphic Workspace Layout (left map) */}
          <div className="lg:col-span-7 relative min-h-[380px] bg-slate-950 rounded-3xl border border-slate-900 overflow-hidden p-6 flex flex-col justify-between">
            
            {/* Background subtle starry grids */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0F62FE_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F62FE]/5 to-transparent pointer-events-none" />

            <div className="relative flex justify-between items-center z-10">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">NODE VIEWER PANEL v1.2</span>
              <div className="flex gap-1.5 items-center bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[9px] font-semibold text-emerald-300 font-mono">ACTIVE SYSTEMS ONLINE</span>
              </div>
            </div>

            {/* Custom Styled Responsive World-Grid containing node pulses */}
            <div className="relative w-full h-[260px] my-auto">
              {regionPartners.map((node) => {
                const isActive = activePartner?.id === node.id;
                return (
                  <button
                    key={node.id}
                    id={`map-node-${node.id}`}
                    onClick={() => setActivePartner(node)}
                    style={{ top: node.latLng.top, left: node.latLng.left }}
                    className="absolute group -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                    title={`Hub: ${node.country}`}
                  >
                    <div className="relative flex items-center justify-center">
                      {/* Radiating concentric pulse colors */}
                      <span className={`absolute inline-flex h-12 w-12 rounded-full opacity-60 transition-transform ${
                        isActive ? 'bg-[#0F62FE]/30 scale-102 animate-ping' : 'bg-slate-700/0 hover:scale-105'
                      }`} />
                      <span className={`absolute inline-flex h-7 w-7 rounded-full opacity-40 transition-transform ${
                        isActive ? 'bg-[#0F62FE]/50 animate-pulse' : 'bg-slate-700/20 group-hover:bg-slate-700/40'
                      }`} />
                      
                      {/* Direct center point */}
                      <div className={`relative h-4 w-4 rounded-full border-2 transition-all shadow-sm ${
                        isActive ? 'bg-white border-[#0F62FE]' : 'bg-slate-700 border-slate-600 group-hover:bg-slate-200'
                      }`} />

                      {/* Tooltip text name */}
                      <span className="absolute left-6 text-[10px] font-bold tracking-wider text-slate-300 bg-slate-900/90 border border-slate-800 px-2 py-0.5 rounded shadow-lg opacity-85 pointer-events-none uppercase whitespace-nowrap font-mono max-w-xs block">
                        {node.country}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="relative text-left z-10 flex items-center gap-3 bg-slate-900/60 border border-slate-800 p-3 rounded-2xl">
              <Globe className="h-5 w-5 text-[#0F62FE] loader shrink-0" />
              <p className="text-[10px] sm:text-xs text-slate-400 font-sans tracking-wide">
                Interactive Map Coordinates represent localized nodes that feed core programmatic SEO metrics and technology development back into our operations command center.
              </p>
            </div>

          </div>

          {/* Active node detail viewport (right) */}
          <div className="lg:col-span-5 rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between bg-slate-50 relative">
            {activePartner ? (
              <div className="space-y-6 text-left">
                
                <div className="flex gap-4 items-center border-b border-slate-200 pb-5">
                  <div className="h-14 w-14 rounded-2xl bg-white p-2 border border-slate-200 flex items-center justify-center overflow-hidden">
                    <img
                      referrerPolicy="no-referrer"
                      src={activePartner.logo}
                      alt={activePartner.country}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 font-mono tracking-wider block uppercase">Hub location</span>
                    <h3 className="text-lg font-black text-slate-950 font-display leading-tight">{activePartner.name}</h3>
                    <span className="inline-block rounded bg-blue-50 border border-blue-100 px-2.5 py-0.5 text-[9px] font-bold text-[#0F62FE] tracking-wide font-mono mt-1.5 uppercase">
                      {activePartner.scale}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 font-mono block uppercase">Operational Directive</span>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">{activePartner.details}</p>
                </div>

                <div className="pt-5 border-t border-slate-250/60 space-y-3 text-xs">
                  <span className="font-bold text-slate-400 font-mono block uppercase">ECOSYSTEM CO-OPERATION BLUEPRINT</span>
                  <div className="flex items-center gap-2 text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-[#0F62FE]" />
                    <span>Cross-regional client resource scaling</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-[#0F62FE]" />
                    <span>Shared SEO indexing cluster configurations</span>
                  </div>
                </div>

              </div>
            ) : (
              <div className="h-full flex flex-col justify-center items-center text-center text-slate-400">
                <Network className="h-10 w-10 text-slate-300 stroke-dasharray animate-pulse" />
                <p className="text-xs font-semibold mt-2">Select a region node on the map to load full data metrics.</p>
              </div>
            )}

            <div className="mt-8 border-t border-slate-200 pt-5 flex items-center justify-between text-[11px] font-medium text-slate-400 font-mono">
              <span>NEXUS WORLD ECOSYSTEM</span>
              <span className="text-[#0F62FE] font-bold">100% VERIFIED</span>
            </div>
          </div>

        </div>

      </section>

      {/* COOPERATION TIERS DISPLAY LIST */}
      <section className="bg-slate-50 py-20 lg:py-24 border-y border-slate-150">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold tracking-widest text-[#0F62FE] uppercase font-mono">Cooperative Matrix</span>
            <h2 className="text-3xl font-black text-slate-950 font-display">Strategic Ecosystem Tiers</h2>
            <p className="text-sm text-slate-550">We operate three distinct coordination structures to scale collaborative operations smoothly.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {partnerTiers.map((tier) => (
              <div
                key={tier.id}
                className="group rounded-3xl border border-slate-250 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative"
              >
                <div className="space-y-5">
                  <div className="flex justify-between items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0F62FE]">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 tracking-wider font-mono uppercase bg-slate-50 border border-slate-150 px-2 py-0.5 rounded">
                      ID: {tier.id.split('-')[1].toUpperCase()}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-950 font-display leading-tight">{tier.name}</h3>
                    <p className="text-xs text-[#0F62FE] font-bold font-sans mt-1">{tier.tagline}</p>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed font-sans mt-3">{tier.description}</p>

                  <div className="space-y-2 pt-4 border-t border-slate-100 text-xs">
                    <span className="font-bold text-slate-400 font-mono block uppercase">Key Tier Benefits</span>
                    {tier.benefits.map((benefit, i) => (
                      <div key={i} className="flex gap-2 text-slate-600 leading-snug">
                        <CheckCircle2 className="h-4.5 w-4.5 text-[#0F62FE] shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>TARGET: {tier.targetAudience.toUpperCase()}</span>
                  <ChevronRight className="h-4 w-4 text-slate-300" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* STRATEGIC PROPOSAL SUBMISSION SYSTEM */}
      <section className="py-20 lg:py-24 max-w-4xl mx-auto px-6 sm:px-8 text-left">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-lg relative overflow-hidden">
          
          <div className="absolute -right-12 -bottom-12 h-32 w-32 bg-[#0F62FE]/3 rounded-full pointer-events-none" />

          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-[#0F62FE] uppercase font-mono block">Ecosystem Proposal</span>
            <h2 className="text-2xl font-black text-slate-950 mt-1.5 font-display">Initiate Strategic Inquiry</h2>
            <p className="text-slate-500 text-sm mt-3 leading-relaxed">
              Define your organizational parameters below. Our Operations Desk reviews inquiries on a weekly basis, preparing preliminary market strategy models for conforming proposals.
            </p>
          </div>

          <div className="mt-8 border-t border-slate-150 pt-8">
            {formSuccess ? (
              <div className="rounded-2xl border border-emerald-100 bg-emerald-500/5 p-6 text-center space-y-4 animate-in fade-in zoom-in-95 duration-250">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <ThumbsUp className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-display">Ecosystem Proposal Logged Successfully</h3>
                  <p className="text-xs text-slate-500 mt-1.5 max-w-md mx-auto">
                    The strategic inquiry has been indexed on the Nexus Operational desk database. A partner proposal validation task has been queued.
                  </p>
                </div>
                <div className="bg-white border border-emerald-100 rounded-xl p-4 text-left text-xs text-slate-650 max-w-sm mx-auto font-mono space-y-1 shadow-sm">
                  <div><span className="text-slate-400">ORGANIZATION:</span> {candidateOrg}</div>
                  <div><span className="text-slate-400">TIER CATEGORY:</span> {candidateType}</div>
                  <div><span className="text-slate-450">STATUS:</span> <span className="text-emerald-500 font-bold">IN_REVIEW (QUEUE_#14)</span></div>
                </div>
                <button
                  id="reset-part-form-btn"
                  onClick={handleResetForm}
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50"
                >
                  Submit Alternative Proposal
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitProposal} className="space-y-6">
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">Organization Name</label>
                    <input
                      required
                      type="text"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 focus:border-[#0F62FE] focus:outline-none"
                      placeholder="e.g. Nexus Capital Labs"
                      value={candidateOrg}
                      onChange={(e) => setCandidateOrg(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">Contact Coordinates (Email)</label>
                    <input
                      required
                      type="email"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 focus:border-[#0F62FE] focus:outline-none"
                      placeholder="e.g. lead@hq.co"
                      value={candidateContact}
                      onChange={(e) => setCandidateContact(e.target.value)}
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">Proposed Collaboration Tier</label>
                    <select
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 focus:border-[#0F62FE] focus:outline-none"
                      value={candidateType}
                      onChange={(e) => setCandidateType(e.target.value)}
                    >
                      <option>Strategic Consulting & Growth</option>
                      <option>Agency & Tech Implementation</option>
                      <option>Empowerment & Talent Hubs</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">Est Partnership Launch Target</label>
                    <select className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 focus:border-[#0F62FE] focus:outline-none">
                      <option>Immediate (30-60 Days)</option>
                      <option>Next fiscal Quarter</option>
                      <option>Flexible Timeline</option>
                    </select>
                  </div>

                </div>

                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">Proposed Collaboration Scope & Details (Optional)</label>
                  <textarea
                    rows={4}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 focus:border-[#0F62FE] focus:outline-none"
                    placeholder="Briefly detail resource sharing, desired markets, or co-selling objectives..."
                    value={collaborationProposal}
                    onChange={(e) => setCollaborationProposal(e.target.value)}
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    id="submit-proposal-form-btn"
                    disabled={formLoading}
                    type="submit"
                    className="group flex items-center justify-center gap-1.5 rounded-xl bg-[#0F62FE] px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#074299]"
                  >
                    {formLoading ? 'Synchronizing Pipeline...' : 'Submit Collaboration Inquiry'}
                    <Send className="h-4 w-4" />
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
