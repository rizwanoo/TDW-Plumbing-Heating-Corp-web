import React from 'react';
import {ArrowUpRight, Mail, MapPin, Phone} from 'lucide-react';
import {BUSINESS, SERVICE_TOWNS, type RoutePath} from '../data/business';
import {BrandLogo} from './BrandLogo';

interface FooterProps {
  onNavigate: (path: RoutePath) => void;
}

export function Footer({onNavigate}: FooterProps) {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: RoutePath) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="bg-[#172B4D] text-[#FFFDF7] border-t border-[#FFFDF7]/10">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-10">
          {/* Brand & Credentials */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-5 min-w-0">
            <a
              href="/"
              onClick={(e) => handleNav(e, '/')}
              className="inline-block max-w-full"
            >
              <BrandLogo tone="on-dark" size="footer" />
            </a>
            <p className="text-[15px] leading-relaxed text-[#FFFDF7]/80 max-w-md">
              Full-service residential and commercial plumbing and heating contractor serving Athol,
              the North Quabbin region, and Western &amp; Central Massachusetts.
            </p>
            <div className="pt-2 space-y-1.5 text-sm text-[#FFFDF7]/75">
              <p>
                Massachusetts Master Plumber License{' '}
                <span className="font-semibold text-[#F4B942] tabular-nums">
                  {BUSINESS.licenseNumber}
                </span>
              </p>
              <p>
                Fully Licensed &amp; Insured · {BUSINESS.bbbStatus} · {BUSINESS.thumbtackStatus}
              </p>
            </div>
          </div>

          {/* Navigation Mirror */}
          <div className="lg:col-span-2 space-y-4 min-w-0">
            <h2 className="text-sm font-bold tracking-wide text-[#F4B942]">Navigation</h2>
            <ul className="space-y-2.5 text-[15px]">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleNav(e, '/')}
                  className="text-[#FFFDF7]/85 hover:text-[#F4B942] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  onClick={(e) => handleNav(e, '/services')}
                  className="text-[#FFFDF7]/85 hover:text-[#F4B942] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleNav(e, '/about')}
                  className="text-[#FFFDF7]/85 hover:text-[#F4B942] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => handleNav(e, '/contact')}
                  className="text-[#FFFDF7]/85 hover:text-[#F4B942] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Service Corridor */}
          <div className="lg:col-span-2 space-y-4 min-w-0">
            <h2 className="text-sm font-bold tracking-wide text-[#F4B942]">Service Areas</h2>
            <p className="text-[14px] leading-relaxed text-[#FFFDF7]/80">
              {SERVICE_TOWNS.map((t) => t.name).join(' · ')}, MA
            </p>
          </div>

          {/* Direct Contact & Social */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-4 min-w-0">
            <h2 className="text-sm font-bold tracking-wide text-[#F4B942]">Direct Contact</h2>
            <div className="space-y-3 text-[15px]">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-2.5 text-[#FFFDF7] font-semibold hover:text-[#F4B942] transition-colors tabular-nums"
              >
                <Phone className="w-4 h-4 text-[#F4B942] shrink-0" />
                <span>{BUSINESS.phoneInternational}</span>
              </a>
              <a
                href={BUSINESS.emailHref}
                className="flex items-center gap-2.5 text-[#FFFDF7]/85 hover:text-[#F4B942] transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-[#F4B942] shrink-0" />
                <span>{BUSINESS.email}</span>
              </a>
              <div className="flex items-center gap-2.5 text-[#FFFDF7]/80">
                <MapPin className="w-4 h-4 text-[#F4B942] shrink-0" />
                <span>{BUSINESS.location}</span>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-5 text-sm font-medium">
              <a
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#FFFDF7]/85 hover:text-[#F4B942] transition-colors"
              >
                <span>Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={BUSINESS.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#FFFDF7]/85 hover:text-[#F4B942] transition-colors"
              >
                <span>Facebook</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-7 border-t border-[#FFFDF7]/12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#FFFDF7]/65">
          <p>&copy; {new Date().getFullYear()} {BUSINESS.name} All rights reserved.</p>
          <p>Athol, Massachusetts · Master Plumber License {BUSINESS.licenseNumber}</p>
        </div>
      </div>
    </footer>
  );
}
