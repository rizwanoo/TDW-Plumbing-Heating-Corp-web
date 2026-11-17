import React from 'react';
import {ArrowRight, Phone} from 'lucide-react';
import {BUSINESS, type RoutePath} from '../data/business';

interface ConversionBandProps {
  onNavigate: (path: RoutePath) => void;
  heading?: string;
  subcopy?: string;
}

export function ConversionBand({
  onNavigate,
  heading = 'Need a Licensed Plumber or Heating Specialist?',
  subcopy = 'Speak directly with TDW Plumbing & Heating Corp. in Athol for residential or commercial service across North Quabbin and the Pioneer Valley.',
}: ConversionBandProps) {
  return (
    <section className="bg-[#F4B942] text-[#172B4D]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-3">
            <p className="text-sm font-semibold tracking-wide text-[#172B4D]/80">
              Direct Dispatch · Athol &amp; Central Massachusetts
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-[1.1] tracking-tight text-[#172B4D]">
              {heading}
            </h2>
            <p className="text-base sm:text-[17px] leading-relaxed text-[#172B4D]/85 max-w-2xl pt-1">
              {subcopy}
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center lg:items-stretch xl:items-center lg:justify-end gap-3.5 sm:gap-4">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-4 bg-[#172B4D] text-[#FFFDF7] font-bold text-[15px] tracking-tight hover:bg-[#174EA6] transition-colors duration-150 text-center"
            >
              <Phone className="w-4 h-4 text-[#F4B942] shrink-0" strokeWidth={2.25} />
              <span className="tabular-nums">Call {BUSINESS.phoneDisplay}</span>
            </a>
            <button
              type="button"
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-4 border-2 border-[#172B4D] text-[#172B4D] font-bold text-[15px] tracking-tight hover:bg-[#172B4D] hover:text-[#FFFDF7] transition-colors duration-150 cursor-pointer text-center"
            >
              <span>Request Estimate</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
