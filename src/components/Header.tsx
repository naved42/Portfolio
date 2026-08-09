import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  onOpenDemo: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenDemo, 
  activeSection,
  onNavigate,
  isDarkMode,
  onToggleDarkMode
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Skills & Edu', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Insights', id: 'updates' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar at very top of viewport */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-[#D9D7D0]/30 dark:bg-neutral-800/50 pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-[#181818] via-[#24788C] to-[#3BB0C8] dark:from-[#24788C] dark:via-[#3BB0C8] dark:to-[#FAF9F5] transition-all duration-150 ease-out shadow-xs"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 1. Floating Nav (TopAppBar) */}
      <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex items-center justify-center px-3 sm:px-6 w-full pointer-events-none antialiased">
        <div className="pointer-events-auto w-full max-w-[1130px] h-14 sm:h-[72px] flex items-center justify-between bg-[#12161F] border border-white/15 rounded-full px-3 py-1.5 sm:py-2 shadow-2xl transition-all duration-300">
          {/* Brand Logo (Left) */}
          <div className="flex items-center pl-1 sm:pl-2 shrink-0">
            <button 
              onClick={() => handleNavClick('hero')} 
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FAF9F5] flex items-center justify-center shrink-0 border border-white/20 overflow-hidden relative cursor-pointer hover:scale-105 transition-transform shadow-sm"
              title="Muhammad Naveed Home"
            >
              <span className="text-[#111827] font-black text-xs sm:text-sm tracking-tight leading-none">MN</span>
            </button>
          </div>

          {/* Centered Nav Links */}
          <nav className="hidden md:flex items-center justify-center gap-1.5 lg:gap-2 mx-auto bg-white/10 px-2 py-1.5 rounded-full border border-white/10 shadow-inner">
            {navItems.map((item) => {
              const isActive = item.id === activeSection;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`font-label text-xs sm:text-sm px-4 py-2 rounded-full transition-all duration-200 cursor-pointer text-rendering-geometricPrecision ${
                    isActive
                      ? 'bg-white text-[#0B0F17] font-bold shadow-md scale-102'
                      : 'text-slate-200 hover:text-white hover:bg-white/15 font-semibold'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Actions (Right) */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Dark Mode Toggle Button */}
            <button
              onClick={onToggleDarkMode}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 hover:scale-105 shadow-sm"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={18} className="text-amber-300" /> : <Moon size={18} className="text-slate-100" />}
            </button>

            <button
              onClick={onOpenDemo}
              className="hidden sm:flex bg-[#FAF9F5] text-[#0B0F17] font-label text-xs sm:text-xs md:text-sm h-9 sm:h-10 md:h-[46px] px-3.5 sm:px-5 md:px-6 rounded-full hover:bg-white transition-all duration-200 hover:scale-102 shrink-0 items-center justify-center cursor-pointer font-bold shadow-md tracking-tight"
            >
              Book a demo
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/15 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg pt-24 px-6 pb-8 flex flex-col justify-between text-[#FAF9F5] md:hidden overflow-y-auto">
          <div className="flex flex-col gap-6">
            <nav className="flex flex-col gap-2 text-lg font-medium border-b border-white/10 pb-6">
              {navItems.map((item) => {
                const isActive = item.id === activeSection;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-white/20 text-white font-bold border border-white/20'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-white/40 font-mono">→</span>
                  </button>
                );
              })}
            </nav>
            <div className="flex items-center justify-between py-3 border-b border-white/10 text-sm">
              <span className="font-label text-xs uppercase tracking-wider text-white/60">Appearance</span>
              <button
                onClick={onToggleDarkMode}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF9F5] flex items-center gap-2 text-xs font-semibold cursor-pointer border border-white/15"
              >
                {isDarkMode ? (
                  <>
                    <Sun size={16} className="text-amber-400" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon size={16} className="text-slate-200" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDemo();
            }}
            className="w-full bg-[#FAF9F5] text-black py-4 rounded-full font-semibold text-center mt-6 text-sm shadow-lg cursor-pointer active:scale-98 transition-transform"
          >
            Book a Demo
          </button>
        </div>
      )}
    </>
  );
};
