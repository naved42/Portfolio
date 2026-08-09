import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Github, ExternalLink, Sparkles, Mail, ArrowUpRight, User } from 'lucide-react';
import { Typewriter } from './Typewriter';
import { DEVELOPER_INFO } from '../data/mockData';

interface HeroSectionProps {
  onOpenDemo: () => void;
  onExploreStudio: () => void;
}

const ROTATING_ROLES = [
  'AGENTIC AI ENGINEER',
  'STATEFUL LANGGRAPH ARCHITECT',
  'HYBRID RAG & VECTOR MEMORY SPECIALIST',
  'DETERMINISTIC AGENT SYSTEMS ENGINEER',
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemo, onExploreStudio }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROTATING_ROLES.length);
    }, 3600);
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const filter = useTransform(
    scrollYProgress,
    [0, 1],
    ['blur(0px)', 'blur(10px)']
  );

  return (
    <section
      ref={containerRef}
      id="hero"
      className="pt-[90px] sm:pt-[120px] pb-16 sm:pb-24 px-4 sm:px-margin max-w-[1728px] mx-auto relative overflow-hidden bg-[#FAF9F5] dark:bg-[#121212] text-[#1B1B1B] dark:text-[#FAF9F5] transition-colors duration-300 border-b border-[#D9D7D0]/40 dark:border-neutral-800 snap-start scroll-mt-20"
    >
      <motion.div style={{ filter }} className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center py-6 sm:py-10">

        {/* Left Column: Signature Circle Backdrop with Placeholder */}
        <div className="lg:col-span-6 flex justify-center items-center relative order-2 lg:order-1">
          <div className="relative w-[280px] h-[320px] sm:w-[380px] sm:h-[420px] md:w-[440px] md:h-[480px] flex justify-center items-end">

            {/* Dark/Warm Circle Background matching app palette */}
            <div className="absolute top-4 sm:top-6 w-[260px] h-[260px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] rounded-full bg-[#181818] dark:bg-neutral-800 border border-[#181818]/10 dark:border-neutral-700 shadow-2xl z-0 transition-transform duration-700 hover:scale-102"></div>

            {/* Developer Avatar Placeholder */}
            <div className="relative z-10 w-[240px] sm:w-[320px] md:w-[360px] h-[85%] sm:h-[90%] flex flex-col items-center justify-center bg-[#181818] dark:bg-neutral-900 border-2 border-[#D9D7D0] dark:border-neutral-700 rounded-b-full sm:rounded-b-[180px] shadow-2xl text-center px-4 overflow-hidden group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FAF9F5]/10 dark:bg-neutral-800 border border-white/20 flex items-center justify-center mb-3 text-[#FAF9F5] group-hover:scale-110 transition-transform duration-500">
                <User size={42} className="text-[#FAF9F5] dark:text-[#3BB0C8]" />
              </div>
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#FAF9F5] tracking-wider mb-1">
                MN
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-[#FAF9F5]/70 dark:text-[#3BB0C8] uppercase tracking-widest font-semibold bg-white/10 px-3 py-1 rounded-full border border-white/10">
                AI System Engineer
              </span>
            </div>

            {/* Floating Live Badge Removed */}
          </div>
        </div>

        {/* Right Column: High-Impact Typography & CTAs */}
        <div className="lg:col-span-6 flex flex-col justify-center items-start text-left order-1 lg:order-2">

          {/* Main Title Name */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-bold leading-[0.95] tracking-tight text-[#1B1B1B] dark:text-[#FAF9F5] mb-4">
            Muhammad<br />
            <span>Naveed</span>
            <span className="text-[#181818] dark:text-[#3BB0C8]">.</span>
          </h1>

          {/* Dynamic Typewriter Subtitle Tagline */}
          <div className="font-label text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#181818] dark:text-[#3BB0C8] mb-6 flex items-center gap-2 min-h-[28px]">
            <Typewriter speed={40} deleteSpeed={20}>
              {ROTATING_ROLES[roleIndex]}
            </Typewriter>
          </div>

          {/* Description Paragraph */}
          <p className="font-body-lg text-sm sm:text-base text-[#8C8880] dark:text-neutral-300 max-w-xl leading-relaxed mb-8 font-normal">
            Architecting fault-tolerant, stateful multi-agent systems with LangGraph, hybrid vector memory, and custom deterministic tool calling. Engineered for sub-second execution, non-hallucinatory schema enforcement, and zero-trust safety guardrails.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 w-full sm:w-auto">
            <button
              onClick={onOpenDemo}
              className="px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 bg-[#181818] text-[#FAF9F5] hover:bg-black dark:bg-[#FAF9F5] dark:text-[#181818] dark:hover:bg-white font-label text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 rounded-lg cursor-pointer flex items-center justify-center gap-2 sm:gap-2.5 shadow-md group w-full sm:w-auto"
            >
              <Mail size={16} className="group-hover:translate-x-0.5 transition-transform shrink-0" />
              <span>GET IN TOUCH</span>
            </button>

            <button
              onClick={onExploreStudio}
              className="px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 bg-[#F0EFEB] dark:bg-neutral-800 text-[#1B1B1B] dark:text-[#FAF9F5] hover:bg-[#E9E8E4] dark:hover:bg-neutral-700 border border-[#D9D7D0] dark:border-neutral-700 font-label text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 rounded-lg cursor-pointer flex items-center justify-center gap-2 group w-full sm:w-auto"
            >
              <Sparkles size={16} className="text-[#181818] dark:text-[#3BB0C8] shrink-0" />
              <span>VIEW SYSTEMS</span>
              <ArrowUpRight size={14} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </button>

            <a
              href={DEVELOPER_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 sm:px-5 sm:py-3.5 bg-transparent border border-[#D9D7D0] dark:border-neutral-700 hover:border-[#181818] dark:hover:border-neutral-500 text-[#1B1B1B] dark:text-neutral-300 font-label text-xs font-bold tracking-wider uppercase transition-all duration-300 rounded-lg cursor-pointer flex items-center justify-center gap-2 w-full sm:w-auto"
              title="GitHub Profile"
            >
              <Github size={18} className="shrink-0" />
              <span>GITHUB</span>
              <ExternalLink size={12} className="opacity-60 shrink-0" />
            </a>
          </div>

        </div>

      </motion.div>
    </section>
  );
};



