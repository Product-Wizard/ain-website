import React, { useState, useRef } from 'react';
import { jobRoles } from '../data';
import { JobRole } from '../types';
import { Search, Briefcase, MapPin, DollarSign, CheckCircle2, ChevronDown, ChevronUp, UploadCloud, Send, FileText, Check, Award, Compass } from 'lucide-react';

export default function CareersView() {
  const [selectedDept, setSelectedDept] = useState<'All' | 'Tech' | 'Growth' | 'Creative' | 'Operations'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  // Apply form states
  const [applyingJob, setApplyingJob] = useState<JobRole | null>(null);
  const [candidateName, setCandidateName] = useState('');
  const [candidateEmail, setCandidateEmail] = useState('');
  const [portfolioLink, setPortfolioLink] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  
  // Custom drag & drop feedback
  const [dragActive, setDragActive] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [applicationCompleted, setApplicationCompleted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const departments: ('All' | 'Tech' | 'Growth' | 'Creative' | 'Operations')[] = [
    'All', 'Tech', 'Growth', 'Creative', 'Operations'
  ];

  const filteredJobs = jobRoles.filter(job => {
    const matchesDept = selectedDept === 'All' || job.department === selectedDept;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  const toggleExpandJob = (jobId: string) => {
    setExpandedJobId(expandedJobId === jobId ? null : jobId);
  };

  const perkCards = [
    {
      title: "Remote-First Agility",
      icon: Compass,
      desc: "Our primary engineering nodes operate from Ibadan, Nigeria. We default to asynchronous progress mappings, leaving you free to manage output with maximum personal autonomy."
    },
    {
      title: "Self-Upskilling Support",
      icon: Award,
      desc: "Through our core partnership network with professional skill academies, we sponsors ongoing developer certs, premium SEO materials, design license costs, and specialized books."
    },
    {
      title: "Co-Working Hub Access",
      icon: Briefcase,
      desc: "Need physical separation from bedroom workspaces? We provide corporate accounts mapping leading shared offices across Nigerian technology corridors."
    }
  ];

  // Drag and drop event handlers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setResumeFile(file);
      simulateResumeUpload();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
      simulateResumeUpload();
    }
  };

  const simulateResumeUpload = () => {
    setIsUploading(true);
    setUploadProgress(10);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setUploadSuccess(true);
          return 100;
        }
        return prev + 30;
      });
    }, 150);
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!candidateName || !candidateEmail || !resumeFile) {
      return alert("Complete essential inputs: Name, Email, and resume upload required.");
    }
    setApplicationCompleted(true);
  };

  const resetIntakeForm = () => {
    setApplyingJob(null);
    setCandidateName('');
    setCandidateEmail('');
    setPortfolioLink('');
    setResumeFile(null);
    setUploadProgress(0);
    setUploadSuccess(false);
    setApplicationCompleted(false);
  };

  return (
    <div className="w-full bg-white">
      
      {/* HEADER BANNER */}
      <section className="bg-slate-50 py-16 lg:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold tracking-widest text-[#0F62FE] uppercase font-mono">Build with the Best</span>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl font-display leading-[1.1]">
            Join the Architects of <span className="text-[#0F62FE]">Digital Growth</span>
          </h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed font-sans">
            We are looking for self-directed technical engineers, detailed search directors, and visual branding leaders. Live and work anywhere, delivering tangible, high-conforming solutions.
          </p>
        </div>
      </section>

      {/* PERKS CARDS STRIP */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold tracking-widest text-[#0F62FE] uppercase font-mono">The Nexus Experience</span>
          <h2 className="text-3xl font-black text-slate-950 font-display">Work Culture Frameworks</h2>
          <p className="text-sm text-slate-500">We replace corporate micromanagement with absolute delivery parameters.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {perkCards.map((perk, i) => {
            const Icon = perk.icon;
            return (
              <div key={i} className="rounded-2xl border border-slate-205 p-6 sm:p-8 bg-white flex flex-col justify-between shadow-sm">
                <div className="space-y-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#0F62FE]">
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 font-display">{perk.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-sans">{perk.desc}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono tracking-wider font-bold">
                  <span>BLUEPRINT &bull; ENG-C1</span>
                  <span className="text-[#0F62FE]">OK</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SEARCH AND GRID */}
      <section className="bg-slate-50 border-y border-slate-150 py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 text-left">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#0F62FE] uppercase font-mono">Current Career Paths</span>
              <h2 className="text-3xl font-black text-slate-950 font-display mt-0.5">Explore Open Roles</h2>
            </div>

            {/* Input Search box */}
            <div className="relative w-full max-w-xs shrink-0">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                <Search className="h-4.5 w-4.5" />
              </span>
              <input
                type="text"
                className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-2.5 text-sm text-slate-900 focus:border-[#0F62FE] focus:outline-none shadow-sm"
                placeholder="Search job title or tech stack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Department tags strip */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {departments.map(dept => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold border transition-all ${
                  selectedDept === dept
                    ? 'bg-[#0F62FE] text-white border-[#0F62FE] shadow-sm'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {dept === 'All' ? 'All Departments' : `${dept} Division`}
              </button>
            ))}
          </div>

          {/* Careers vacancy expansion panels */}
          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((role) => {
                const isExpanded = expandedJobId === role.id;
                return (
                  <div
                    key={role.id}
                    id={`job-panel-${role.id}`}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition-all"
                  >
                    
                    {/* Collapsed Header */}
                    <div
                      onClick={() => toggleExpandJob(role.id)}
                      className="flex cursor-pointer items-center justify-between gap-4"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0F62FE]">
                          <Briefcase className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-slate-950 font-display group-hover:text-[#0F62FE]">
                            {role.title}
                          </h3>
                          <div className="mt-1 flex flex-wrap gap-4 text-xs text-slate-500">
                            <span className="flex items-center gap-1.5 font-medium"><MapPin className="h-3.5 w-3.5" />{role.location}</span>
                            <span className="flex items-center gap-1.5 font-semibold font-mono"><DollarSign className="h-3.5 w-3.5" />{role.salaryEstimate}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="hidden sm:inline-block rounded-md bg-slate-100 px-3 py-1 text-[10px] font-bold text-slate-600 uppercase tracking-wider font-mono">
                          {role.type}
                        </span>
                        {isExpanded ? <ChevronUp className="h-5 w-5 text-slate-400" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}
                      </div>
                    </div>

                    {/* Expanding viewport content */}
                    {isExpanded && (
                      <div className="mt-6 border-t border-slate-100 pt-6 space-y-6">
                        
                        <div className="space-y-2">
                          <h4 className="text-sm font-bold text-slate-900 font-display">Role Overview</h4>
                          <p className="text-sm text-slate-600 leading-relaxed font-sans">{role.description}</p>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 font-display mb-3">Key Responsibilities</h4>
                            <ul className="space-y-2.5 text-xs text-slate-600">
                              {role.responsibilities.map((resp, idx) => (
                                <li key={idx} className="flex gap-2.5 leading-relaxed">
                                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0F62FE] shrink-0 mt-0.5" />
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-sm font-bold text-slate-900 font-display mb-3">Prerequisites & Requirements</h4>
                            <ul className="space-y-2.5 text-xs text-slate-600">
                              {role.requirements.map((req, idx) => (
                                <li key={idx} className="flex gap-2.5 leading-relaxed">
                                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0F62FE] shrink-0 mt-0.5" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                          <span className="text-xs text-slate-400 font-mono">ACE CAREERS PANEL &bull; AUTO VERIFIED</span>
                          <button
                            id={`apply-trigger-${role.id}`}
                            onClick={() => setApplyingJob(role)}
                            className="rounded-xl bg-[#0F62FE] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#074299]"
                          >
                            Apply for this Position &rarr;
                          </button>
                        </div>

                      </div>
                    )}

                  </div>
                );
              })
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-12 text-center text-slate-400">
                <Briefcase className="mx-auto h-8 w-8 text-slate-300 stroke-dasharray animate-pulse" />
                <h3 className="mt-4 text-sm font-bold text-slate-700 font-display">No matching roles detected</h3>
                <p className="text-xs text-slate-500 mt-1">Adjust search strings or switch division filtering tabs.</p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* MULTI STEP INTAKE APPLICATION PORTAL (MODAL) */}
      {applyingJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm">
          <div
            id="careers-modal-container"
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Close trigger button */}
            <button
              onClick={resetIntakeForm}
              className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 hover:bg-slate-100 hover:text-slate-950 focus:outline-none"
              title="Cancel Apply"
            >
              <Check className="h-4 w-4 rotate-45" />
            </button>

            {/* Complete output sequence success */}
            {applicationCompleted ? (
              <div className="space-y-6 text-center py-6">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Check className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-950 font-display">Candidate Intake Pipeline Succeeded</h3>
                  <p className="text-xs text-slate-500 mt-2 max-w-md mx-auto">
                    Excellent, {candidateName}. We've indexed your submission coordinates for the <strong>{applyingJob.title}</strong> role. Our Talent operations squad will audit details within 4 business days.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-4.5 rounded-xl text-left text-xs max-w-md mx-auto font-mono space-y-1.5 shadow-sm text-slate-750">
                  <div><span className="text-slate-400">APPLICANT NAME:</span> {candidateName}</div>
                  <div><span className="text-slate-400">APPLYING FOR:</span> {applyingJob.title}</div>
                  <div><span className="text-slate-400">ATTACHED FILE:</span> {resumeFile ? resumeFile.name : 'Simulated Upload File'}</div>
                  <div><span className="text-slate-400">TRACKING COORD:</span> <span className="text-[#0F62FE] font-bold">NEXUS-VAC-{(Math.floor(Math.random() * 9000) + 1000)}</span></div>
                </div>

                <div className="pt-4 flex justify-center">
                  <button
                    id="finish-intake-modal-btn"
                    onClick={resetIntakeForm}
                    className="rounded-xl bg-[#0F62FE] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#074299]"
                  >
                    Finish Profile Intake
                  </button>
                </div>
              </div>
            ) : (
              // Intake Form view
              <div className="space-y-6 text-left">
                
                <div>
                  <span className="rounded bg-blue-50 border border-blue-100 px-2.5 py-0.5 text-[10px] font-bold text-[#0F62FE] uppercase tracking-wider font-mono">
                    Official Application Intake
                  </span>
                  <span className="text-xs font-bold text-slate-400 block mt-2 font-mono">ROLE: {applyingJob.title.toUpperCase()}</span>
                  <h3 className="text-xl font-black text-slate-950 font-display mt-0.5 leading-snug">
                    Submit Candidate Dossier
                  </h3>
                </div>

                <form onSubmit={handleApplySubmit} className="space-y-5">
                  
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    
                    <div>
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">Full Legal Name</label>
                      <input
                        required
                        type="text"
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-[#0F62FE] focus:outline-none"
                        placeholder="Tega John-Sola"
                        value={candidateName}
                        onChange={(e) => setCandidateName(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">Digital Address (Email)</label>
                      <input
                        required
                        type="email"
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-[#0F62FE] focus:outline-none"
                        placeholder="team@nexus-hq.co"
                        value={candidateEmail}
                        onChange={(e) => setCandidateEmail(e.target.value)}
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    
                    <div>
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">Portfolio link / Github (Optional)</label>
                      <input
                        type="url"
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-[#0F62FE] focus:outline-none"
                        placeholder="https://github.com/my-profile"
                        value={portfolioLink}
                        onChange={(e) => setPortfolioLink(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">Core Tech Stack Specialty</label>
                      <select className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-[#0F62FE] focus:outline-none">
                        <option>TypeScript / Headless React</option>
                        <option>Semantic Content Auditing</option>
                        <option>Packaging Layout & Branding</option>
                        <option>Operations & Project Coordination</option>
                      </select>
                    </div>

                  </div>

                  {/* DRAG & DROP RESUME SIMULATOR BOX */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">Curriculum Vitae / Resume (PDF / DOC)</label>
                    
                    <div
                      onDragEnter={handleDrag}
                      onDragOver={handleDrag}
                      onDragLeave={handleDrag}
                      onDrop={handleDrop}
                      className={`mt-2 rounded-2xl border-2 border-dashed p-6 text-center flex flex-col items-center justify-center gap-3 transition-colors ${
                        dragActive 
                          ? 'border-[#0F62FE] bg-blue-50/20' 
                          : resumeFile 
                            ? 'border-slate-300 bg-slate-50/50' 
                            : 'border-slate-200 hover:border-slate-350 bg-white'
                      }`}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />

                      {resumeFile ? (
                        <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-2.5 shadow-sm max-w-sm">
                          <FileText className="h-5 w-5 text-[#0F62FE]" />
                          <span className="text-xs font-semibold text-slate-700 truncate max-w-[200px]">{resumeFile.name}</span>
                          {uploadSuccess ? (
                            <span className="rounded bg-emerald-500/10 text-emerald-600 px-1.5 py-0.5 text-[9px] font-bold">READY</span>
                          ) : (
                            <span className="rounded bg-blue-50/50 text-[#0F62FE] px-1.5 py-0.5 text-[9px] font-bold">UPLOADING</span>
                          )}
                        </div>
                      ) : (
                        <>
                          <UploadCloud className="h-8 w-8 text-slate-400 stroke-dasharray font-sans" />
                          <div>
                            <p className="text-xs text-slate-600">
                              <button type="button" onClick={triggerFileSelect} className="text-[#0F62FE] font-bold hover:underline focus:outline-none">Choose file</button>
                              <span> or drag resume directly into this container</span>
                            </p>
                            <p className="text-[10px] text-slate-400 mt-1 font-mono">PDF, DOC up to 5MB</p>
                          </div>
                        </>
                      )}

                      {/* Line Progress indicator if actively loading */}
                      {isUploading && (
                        <div className="w-full max-w-xs bg-slate-100 rounded-full h-1 mt-2 overflow-hidden">
                          <div className="bg-[#0F62FE] h-1 rounded-full transition-all duration-150" style={{ width: `${uploadProgress}%` }} />
                        </div>
                      )}

                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={resetIntakeForm}
                      className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50"
                    >
                      Cancel
                    </button>
                    <button
                      id="submit-applicant-dossier"
                      type="submit"
                      disabled={isUploading || !resumeFile}
                      className="group flex items-center gap-1.5 rounded-xl bg-[#0F62FE] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#074299] disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Submit Candidate Dossier
                      <Send className="h-4 w-4" />
                    </button>
                  </div>

                </form>

              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
