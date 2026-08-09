import React, { useState } from 'react';
import { Linkedin, Github, ArrowUpRight, Mail, Calendar, Sparkles, Check, Send } from 'lucide-react';
import { DEVELOPER_INFO } from '../data/mockData';

interface FooterProps {
  onOpenDemo: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemo, onNavigate }) => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmailInput('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#141414] text-[#FAF9F5] font-body-md w-full pt-16 md:pt-20 pb-10 px-margin rounded-t-[40px] mt-[100px] border-t border-white/10 relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

      <div className="max-w-[1400px] mx-auto w-full">
        {/* Main Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand & Bio (4 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-[52px] h-[52px] rounded-full border border-white/20 bg-white/10 text-white font-bold text-base flex items-center justify-center shrink-0 shadow-md">
                  {DEVELOPER_INFO.initials}
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-[#FAF9F5] leading-snug">
                    {DEVELOPER_INFO.name}
                  </h3>
                  <p className="font-label text-xs text-[#8C8880] uppercase tracking-wider font-semibold">
                    {DEVELOPER_INFO.title}
                  </p>
                </div>
              </div>

              <p className="font-body-md text-xs sm:text-sm text-[#8C8880] leading-relaxed mb-6 max-w-sm">
                Architecting stateful multi-agent systems, deterministic guardrails, and context-grounded RAG memory engines for enterprise applications.
              </p>

              <div className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-label font-semibold">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                <span>Open for Engineering & Advisory</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-8">
              <a
                href={DEVELOPER_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 text-[#FAF9F5] border border-white/10 flex items-center justify-center transition-all hover:scale-105"
                title="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={DEVELOPER_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 text-[#FAF9F5] border border-white/10 flex items-center justify-center transition-all hover:scale-105"
                title="GitHub Portfolio"
              >
                <Github size={18} />
              </a>
              <a
                href={`mailto:${DEVELOPER_INFO.email}`}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 text-[#FAF9F5] border border-white/10 flex items-center justify-center transition-all hover:scale-105"
                title="Send Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="font-label text-xs uppercase tracking-widest text-[#8C8880] font-bold mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 font-label text-xs sm:text-sm text-white/70">
              <li>
                <button 
                  onClick={() => onNavigate('hero')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('skills')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Skills & Education
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('projects')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Featured Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('updates')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Insights & Changelog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact Hub
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Capabilities & Specs (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h4 className="font-label text-xs uppercase tracking-widest text-[#8C8880] font-bold mb-5">
              Core Capabilities
            </h4>
            <ul className="space-y-3 font-label text-xs sm:text-sm text-white/70">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/80"></span>
                <span>Multi-Agent LangGraph Graphs</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/80"></span>
                <span>Hybrid Dense/Sparse RAG</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/80"></span>
                <span>Deterministic Guardrail Pipelines</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/80"></span>
                <span>Google Gemini 2.5 Function Calling</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/80"></span>
                <span>Self-Healing Agent Tool Execution</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Consultation & Newsletter CTA (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h4 className="font-label text-xs uppercase tracking-widest text-[#8C8880] font-bold mb-5">
              Connect & Subscribe
            </h4>
            
            <p className="font-body-md text-xs text-[#8C8880] mb-4 leading-relaxed">
              Stay updated on breakthroughs in Agentic AI architecture & production system designs.
            </p>

            {subscribed ? (
              <div className="bg-white/10 border border-white/20 p-3 rounded-xl text-white text-xs font-label flex items-center gap-2 animate-in fade-in">
                <Check size={16} />
                <span>Thank you! You are subscribed to updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2 mb-6">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email..."
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors pr-9"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-[#FAF9F5] text-[#181818] hover:bg-white transition-colors cursor-pointer"
                    title="Subscribe"
                  >
                    <Send size={12} />
                  </button>
                </div>
              </form>
            )}

            <button
              onClick={onOpenDemo}
              className="w-full bg-[#FAF9F5] text-[#181818] hover:bg-white py-3 px-4 rounded-xl font-label text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Calendar size={14} />
              <span>Schedule Strategy Call</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Tech Specs, Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {DEVELOPER_INFO.name}.</span>
            <span className="hidden sm:inline">•</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 font-mono text-[11px]">
            <a 
              href={DEVELOPER_INFO.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white/80 transition-colors flex items-center gap-1"
            >
              <span>GitHub</span>
              <ArrowUpRight size={12} />
            </a>
            <a 
              href={DEVELOPER_INFO.linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white/80 transition-colors flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRight size={12} />
            </a>
            <span className="text-white/80 font-bold">Agentic Core v2.5</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

