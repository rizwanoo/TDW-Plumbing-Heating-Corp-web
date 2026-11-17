import React, {useEffect, useState} from 'react';
import {Menu, Phone, X} from 'lucide-react';
import {BUSINESS, type RoutePath} from '../data/business';
import {BrandLogo} from './BrandLogo';

interface NavbarProps {
  currentPath: RoutePath;
  onNavigate: (path: RoutePath) => void;
  hasDarkHero: boolean;
}

const NAV_ITEMS: {label: string; path: RoutePath}[] = [
  {label: 'Home', path: '/'},
  {label: 'Services', path: '/services'},
  {label: 'About Us', path: '/about'},
  {label: 'Contact', path: '/contact'},
];

export function Navbar({currentPath, onNavigate, hasDarkHero}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [currentPath]);

  const isTransparentOverHero = hasDarkHero && !scrolled && !mobileOpen;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: RoutePath) => {
    e.preventDefault();
    setMobileOpen(false);
    onNavigate(path);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full max-w-full transition-colors duration-200 ${
        isTransparentOverHero
          ? 'bg-transparent border-b border-transparent'
          : 'bg-[#FFFDF7]/98 backdrop-blur-md border-b border-[#172B4D]/10 shadow-xs'
      }`}
    >
      <div className="max-w-[1320px] w-full mx-auto px-3.5 sm:px-6 lg:px-8 h-[72px] sm:h-[78px] flex items-center justify-between gap-2 sm:gap-4 lg:gap-8">
        {/* Zone 1: Brand Wordmark & Official Logo */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          className="min-w-0 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2678E8]"
          aria-label={`${BUSINESS.name} Home`}
        >
          <BrandLogo tone={isTransparentOverHero ? 'on-dark' : 'on-light'} size="nav" />
        </a>

        {/* Zone 2: 4 Clean Single-Line Nav Links (Desktop lg+ to prevent tablet crowding) */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-8"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleLinkClick(e, item.path)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-2 text-[15px] font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 ${
                  isTransparentOverHero
                    ? isActive
                      ? 'text-[#F4B942] drop-shadow-[0_1px_2px_rgba(0,0,0,0.65)]'
                      : 'text-[#FFFDF7] hover:text-[#F4B942] drop-shadow-[0_1px_2px_rgba(0,0,0,0.65)]'
                    : isActive
                      ? 'text-[#174EA6]'
                      : 'text-[#172B4D]/85 hover:text-[#174EA6]'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 right-0 bottom-0 h-[2px] transition-transform duration-200 origin-left ${
                    isActive
                      ? 'scale-x-100 bg-[#F4B942]'
                      : 'scale-x-0 bg-[#2678E8]'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action + Responsive Menu Trigger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={BUSINESS.phoneHref}
            className="hidden sm:inline-flex items-center gap-2 px-4 lg:px-5 py-2.5 text-[14px] font-bold tracking-tight whitespace-nowrap shrink-0 bg-[#F4B942] text-[#172B4D] hover:bg-[#eab035] transition-colors duration-150"
          >
            <Phone className="w-4 h-4 shrink-0" strokeWidth={2.25} />
            <span className="tabular-nums">Call {BUSINESS.phoneDisplay}</span>
          </a>

          <a
            href={BUSINESS.phoneHref}
            aria-label={`Call ${BUSINESS.phoneDisplay}`}
            className="sm:hidden inline-flex items-center justify-center w-10 h-10 bg-[#F4B942] text-[#172B4D] shrink-0"
          >
            <Phone className="w-4 h-4" strokeWidth={2.25} />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className={`lg:hidden inline-flex items-center justify-center w-10 h-10 shrink-0 transition-colors cursor-pointer ${
              isTransparentOverHero
                ? 'text-[#FFFDF7] hover:bg-[#FFFDF7]/15 drop-shadow-[0_1px_2px_rgba(0,0,0,0.65)]'
                : 'text-[#172B4D] hover:bg-[#172B4D]/8'
            }`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-[#FFFDF7] border-t border-[#172B4D]/10 px-5 py-6 shadow-lg"
        >
          <nav aria-label="Mobile and tablet navigation" className="flex flex-col divide-y divide-[#172B4D]/10">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleLinkClick(e, item.path)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`py-3.5 text-base font-semibold flex items-center justify-between ${
                    isActive ? 'text-[#174EA6]' : 'text-[#172B4D]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="text-xs font-semibold text-[#174EA6]">Current</span>
                  )}
                </a>
              );
            })}
          </nav>
          <div className="mt-5 pt-5 border-t border-[#172B4D]/10 flex flex-col gap-3">
            <a
              href={BUSINESS.phoneHref}
              className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 bg-[#F4B942] text-[#172B4D] font-bold text-base tabular-nums"
            >
              <Phone className="w-4 h-4" />
              <span>Call {BUSINESS.phoneDisplay}</span>
            </a>
            <p className="text-xs text-[#172B4D]/70 text-center">
              MA License {BUSINESS.licenseNumber} · {BUSINESS.location}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
