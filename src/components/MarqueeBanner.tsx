import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, Cpu, ShieldCheck, Zap, Bot, Database, Workflow, CheckCircle2, ArrowRight, Layers, Terminal, Code2 } from 'lucide-react';

export const MarqueeBanner: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Bind useScroll to track window vertical scroll position
  const { scrollY } = useScroll();

  // Passing scrollY to useTransform and multiplying by -1 moves text in opposite direction to page scroll
  const xReverse = useTransform(scrollY, (value) => value * -0.55);
  const xForward = useTransform(scrollY, (value) => value * 0.55 - 400);

  const row1Items = [
    { text: 'STATEFUL MULTI-AGENT GRAPH ORCHESTRATION', icon: Workflow },
    { text: 'ENTERPRISE HYBRID RAG & VECTOR MEMORY', icon: Database },
    { text: 'DETERMINISTIC GUARDRAILS & SCHEMA ENFORCEMENT', icon: ShieldCheck },
    { text: 'HIGH-THROUGHPUT GEMINI 1.5 PRO & FLASH INTEGRATIONS', icon: Zap },
    { text: 'NON-HALLUCINATORY TOOL & FUNCTION CALLING', icon: Bot },
    { text: 'MODEL CONTEXT PROTOCOL (MCP) IMPLEMENTATION', icon: Cpu },
    { text: 'AUTONOMOUS REASONING & REFLECTION LOOPS', icon: Sparkles },
    { text: 'SUB-SECOND LATENCY STREAM PARSING', icon: CheckCircle2 },
  ];

  const row2Items = [
    { text: 'FULL-STACK REACT & NEXT.JS SYSTEM ARCHITECTURE', icon: Code2 },
    { text: 'DISTRIBUTED SYSTEMS & MICROSERVICES ORCHESTRATION', icon: Layers },
    { text: 'REAL-TIME WEBSOCKET & SSE DATA STREAMS', icon: Terminal },
    { text: 'HIGH-PERFORMANCE CANVAS & VECTOR ANIMATION ENGINES', icon: Sparkles },
    { text: 'LLM EVALUATION PIPELINES & AGENT MEMORY BENCHMARKS', icon: ArrowRight },
    { text: 'SECURE AUTHENTICATION & OAUTH2 INTEGRATIONS', icon: ShieldCheck },
    { text: 'PRODUCTION CLOUD RUN & KUBERNETES DEPLOYMENTS', icon: Cpu },
  ];

  const marquee1 = [...row1Items, ...row1Items, ...row1Items];
  const marquee2 = [...row2Items, ...row2Items, ...row2Items];

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#181818] dark:bg-neutral-900/90 text-[#FAF9F5] py-4 sm:py-5 border-y border-white/10 dark:border-neutral-800 overflow-hidden relative shadow-xl my-4 select-none"
    >
      {/* Top Row: Horizontal Ticker moving left as page scrolls down (-1 multiplier on scrollY) */}
      <motion.div
        style={{ x: xReverse }}
        className="flex items-center gap-5 whitespace-nowrap mb-3 will-change-transform"
      >
        {marquee1.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={`row1-${item.text}-${idx}`}
              className="flex items-center gap-2 shrink-0 font-label text-xs sm:text-sm font-bold tracking-wider text-[#FAF9F5]/90 dark:text-neutral-200 uppercase px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xs shadow-sm"
            >
              <Icon size={14} className="text-emerald-400 shrink-0" />
              <span>{item.text}</span>
              <span className="text-emerald-400/40 ml-3">•</span>
            </div>
          );
        })}
      </motion.div>

      {/* Bottom Row: Horizontal Ticker moving right as page scrolls down */}
      <motion.div
        style={{ x: xForward }}
        className="flex items-center gap-5 whitespace-nowrap will-change-transform"
      >
        {marquee2.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={`row2-${item.text}-${idx}`}
              className="flex items-center gap-2 shrink-0 font-label text-xs sm:text-sm font-bold tracking-wider text-[#FAF9F5]/80 dark:text-neutral-300 uppercase px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-xs shadow-sm"
            >
              <Icon size={14} className="text-cyan-400 shrink-0" />
              <span>{item.text}</span>
              <span className="text-cyan-400/40 ml-3">•</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

