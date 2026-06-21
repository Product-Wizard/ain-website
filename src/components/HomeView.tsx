import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, TrendingUp, Users, Target, Laptop, ChevronRight, Zap } from 'lucide-react';
import { motion, Variants } from 'motion/react';
import { caseStudies, staticInsights } from '../data';

interface HomeViewProps {
  setCurrentTab: (tab: string) => void;
  openContactModal: () => void;
}

export default function HomeView({ setCurrentTab, openContactModal }: HomeViewProps) {
  // Calculator States
  const [sector, setSector] = useState<'FMCG' | 'Fintech' | 'Edtech' | 'Ecommerce'>('FMCG');
  const [traffic, setTraffic] = useState<number>(10000);
  const [leadSource, setLeadSource] = useState<'SEO' | 'Branding' | 'Product'>('SEO');

  // Calculates estimated returns based on parameters selected
  const getGrowthEstimates = () => {
    let multiplier = 2.4;
    let conversionRate = 0.025;
    
    if (sector === 'Fintech') {
      multiplier = 3.6;
      conversionRate = 0.018;
    } else if (sector === 'Edtech') {
      multiplier = 4.1;
      conversionRate = 0.035;
    } else if (sector === 'Ecommerce') {
      multiplier = 2.9;
      conversionRate = 0.022;
    }

    if (leadSource === 'Branding') {
      conversionRate += 0.012; // brand trust builds higher conversion rate
    } else if (leadSource === 'Product') {
      conversionRate += 0.008; // pristine UX drives actions
    } else {
      multiplier += 0.5; // content clusters drive pure search volume
    }

    const estimatedTraffic = Math.round(traffic * multiplier);
    const estimatedLeads = Math.round(estimatedTraffic * conversionRate);
    const costReduction = sector === 'Fintech' ? '45%' : '35%';

    return {
      estimatedTraffic,
      estimatedLeads,
      costReduction
    };
  };

  const estimates = getGrowthEstimates();

  // Kinetic Typography Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 50, rotateX: -60 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 12,
      },
    },
  };

  return (
    <div className="w-full">
      
      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden bg-zinc-950 py-20 lg:py-32">
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
            
            {/* Left Media: Glitch/Vaporwave Statue */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="lg:w-1/2 relative w-full flex justify-center"
            >
              <div className="relative w-full max-w-md aspect-[4/5] perspective-1000">
                 {/* Pseudo glitch layer behind */}
                 <motion.div
                   animate={{ 
                     x: [-5, 5, -5], 
                     y: [2, -2, 2],
                     filter: ['hue-rotate(0deg)', 'hue-rotate(90deg)', 'hue-rotate(0deg)']
                   }}
                   transition={{ duration: 0.2, repeat: Infinity, repeatType: 'mirror', ease: 'linear' }}
                   className="absolute inset-0 bg-[#0F62FE] mix-blend-screen opacity-40 blur-sm rounded-full scale-105"
                 />
                 <motion.div
                   animate={{ 
                     x: [5, -5, 5], 
                     y: [-2, 2, -2],
                     filter: ['hue-rotate(180deg)', 'hue-rotate(270deg)', 'hue-rotate(180deg)']
                   }}
                   transition={{ duration: 0.3, repeat: Infinity, repeatType: 'mirror', ease: 'linear' }}
                   className="absolute inset-0 bg-[#a855f7] mix-blend-screen opacity-40 blur-sm rounded-full scale-105"
                 />
                 <img
                  referrerPolicy="no-referrer"
                  src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80"
                  alt="3D Modern Founder Avatar"
                  className="w-full h-full object-cover object-top drop-shadow-2xl z-10 relative"
                  style={{ borderRadius: '2rem' }}
                />
              </div>
            </motion.div>
            
            {/* Right Narrative */}
            <div className="lg:w-1/2 space-y-8 text-left" style={{ perspective: "1000px" }}>
              <motion.h1 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="text-5xl font-black tracking-tighter text-white sm:text-6xl lg:text-[5.5rem] font-display leading-[0.95]"
              >
                <div className="flex flex-wrap gap-x-3 gap-y-2">
                  {"Build Your Brand,".split(" ").map((word, i) => (
                    <motion.span 
                      key={i} 
                      variants={wordVariants} 
                      className="inline-block origin-bottom"
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-2 mt-2">
                  {"Grow Your".split(" ").map((word, i) => (
                    <motion.span 
                      key={i} 
                      variants={wordVariants} 
                      className="inline-block origin-bottom"
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-2 mt-2">
                  {"Business".split(" ").map((word, i) => (
                    <motion.span 
                      key={i} 
                      variants={wordVariants} 
                      className="inline-block origin-bottom"
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="max-w-xl text-xl text-zinc-400 leading-relaxed font-sans font-medium"
              >
                We'll build your website, grow your socials, and streamline your brand - so you can focus on your customers.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-5 pt-4"
              >
                <button
                  id="hero-cta-contact"
                  onClick={openContactModal}
                  className="group flex items-center justify-center gap-1.5 rounded-none bg-[#0F62FE] px-8 py-5 text-base font-extrabold text-black hover:bg-[#074299] transition-all hover:scale-105"
                >
                  Get Started!
                </button>
                <button
                  id="hero-cta-work"
                  onClick={() => {
                    setCurrentTab('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group flex items-center justify-center gap-2 rounded-none border-2 border-white bg-transparent px-8 py-5 text-base font-extrabold text-white hover:bg-white hover:text-black transition-all hover:scale-105"
                >
                  Our Packages
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: GET MORE CUSTOMERS */}
      <section className="bg-zinc-950 py-20 lg:py-32 border-t border-zinc-900 overflow-hidden relative">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
          
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
            
            {/* Left Content */}
            <div className="space-y-12">
              <h2 className="text-4xl font-black tracking-tighter text-white sm:text-5xl lg:text-6xl font-display leading-[1.05]">
                Get More Customers<br/>With Less Work
              </h2>

              <div className="space-y-8">
                {/* Feature 1 */}
                <div className="group flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-[#0F62FE] group-hover:bg-[#0F62FE] group-hover:text-black transition-colors">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-display">Build & Grow Your Brand</h3>
                    <p className="text-zinc-400 font-sans leading-relaxed text-lg">Get a full brand kit, logo, & sales strategy.</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="group flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-[#0F62FE] group-hover:bg-[#0F62FE] group-hover:text-black transition-colors">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-display">Take Your Brand to Market</h3>
                    <p className="text-zinc-400 font-sans leading-relaxed text-lg">Run low-cost ad campaigns on Instagram, Facebook, and Google.</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="group flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-[#0F62FE] group-hover:bg-[#0F62FE] group-hover:text-black transition-colors">
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-display">Rank At The Top of Google</h3>
                    <p className="text-zinc-400 font-sans leading-relaxed text-lg">Your SEO-optimized website will rank at the top of Google & ChatGPT.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  id="explore-packages-btn"
                  onClick={() => {
                    setCurrentTab('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group inline-flex flex-wrap items-center justify-center gap-1.5 rounded-none bg-[#0F62FE] px-8 py-5 text-base font-extrabold text-black hover:bg-[#074299] transition-all hover:scale-105"
                >
                  Explore Packages
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </div>

            </div>

            {/* Right Media Wrapper (Glitchy Layout) */}
            <div className="relative perspective-1000">
              <motion.div 
                animate={{ 
                  rotateY: [0, 5, 0, -5, 0],
                  rotateX: [0, -5, 0, 5, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="relative lg:h-[600px] w-full rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl"
              >
                <img
                  referrerPolicy="no-referrer"
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                  alt="Dashboard Visuals"
                  className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
                />
                {/* Floating elements */}
                <div className="absolute top-10 -left-10 bg-black border border-zinc-800 p-4 shadow-xl z-20">
                   <div className="text-3xl font-black text-[#0F62FE] font-mono">1.1MM+</div>
                   <div className="text-xs text-zinc-400 font-bold uppercase tracking-wider mt-1">Impressions</div>
                </div>
                <div className="absolute bottom-20 -right-5 bg-[#a855f7] p-5 shadow-xl z-20">
                   <div className="text-3xl font-black text-white font-mono flex items-center"><TrendingUp className="mr-2" /> 259.2K</div>
                   <div className="text-sm text-purple-200 font-bold tracking-wider mt-1">Engagements</div>
                </div>
              </motion.div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: IMPACT & CASE STUDIES SNAPSHOT */}
      <section className="bg-zinc-950 py-20 lg:py-24 overflow-hidden relative">
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
        {/* HUGE MARQUEE */}
        <div className="flex whitespace-nowrap mb-16 opacity-90 mix-blend-screen pointer-events-none">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="text-[8rem] md:text-[12rem] font-black font-display tracking-tighter text-zinc-800 uppercase flex items-center gap-10"
          >
            <span>Marketing That Delivers Real Results &bull;</span>
            <span>Marketing That Delivers Real Results &bull;</span>
          </motion.div>
        </div>

        <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col justify-between rounded-xl border border-zinc-800 bg-[#0a0a0a] overflow-hidden transition-transform hover:-translate-y-2"
              >
                <div>
                  <div className="relative aspect-video overflow-hidden bg-zinc-900 border-b border-zinc-800">
                    <img
                      referrerPolicy="no-referrer"
                      src={project.image}
                      alt={project.client}
                      className="h-full w-full object-cover transition-transform duration-700 md:group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-[10px] font-bold text-[#0F62FE] uppercase tracking-widest font-mono mb-2">{project.category}</h3>
                    <h4 className="text-xl font-bold text-white leading-snug font-display transition-colors">
                      {project.title}
                    </h4>
                    <p className="mt-3 text-sm text-zinc-400 line-clamp-3">
                      {project.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex items-center justify-between">
                  <div className="flex gap-6">
                    {project.metrics.slice(0, 2).map((met, i) => (
                      <div key={i}>
                        <div className="text-xl font-black text-white font-mono leading-[1]">{met.value}</div>
                        <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mt-1">{met.label}</div>
                      </div>
                    ))}
                  </div>
                  <button
                    id={`view-study-${project.id}`}
                    onClick={() => {
                      setCurrentTab('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-white transition-colors group-hover:bg-[#0F62FE] group-hover:text-black hover:scale-110"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: INSIGHTS & INTEL */}
      <section className="bg-[#050505] py-20 lg:py-32 border-t border-zinc-900 relative">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          
          <div className="max-w-2xl space-y-4 mb-16">
            <h2 className="text-4xl font-black tracking-tighter text-white sm:text-5xl font-display">
              Read our Client Success Stories
            </h2>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase font-mono">
                <span className="text-white">+2.3B</span> Customer Impressions
              </span>
              <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase font-mono">
                <span className="text-[#0F62FE]">90 Day</span> Average ROI
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {staticInsights.map((article) => (
              <div
                key={article.id}
                className="group flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-950 transition-all hover:bg-zinc-900"
              >
                <div>
                  <div className="aspect-11/8 overflow-hidden relative border-b border-zinc-800">
                    <img
                      referrerPolicy="no-referrer"
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-base font-bold text-white group-hover:text-[#0F62FE] transition-colors leading-snug font-display">
                      {article.title}
                    </h3>
                    
                    <p className="mt-3 text-sm text-zinc-400 leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-white">
                      {article.author.split(' ')[0][0]}
                    </div>
                    <span className="text-[11px] font-semibold text-zinc-400">{article.author}</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-zinc-600 group-hover:text-[#0F62FE] transition-transform group-hover:translate-x-1" />
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
