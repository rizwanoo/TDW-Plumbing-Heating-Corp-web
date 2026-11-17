import React, {useState} from 'react';
import {BUSINESS} from '../data/business';

interface BrandLogoProps {
  tone?: 'on-dark' | 'on-light';
  size?: 'nav' | 'footer' | 'hero';
}

export function BrandLogo({tone = 'on-light', size = 'nav'}: BrandLogoProps) {
  const isDark = tone === 'on-dark';
  const [imgFailed, setImgFailed] = useState(false);

  const emblemSize =
    size === 'hero'
      ? 'h-14 w-14'
      : size === 'footer'
        ? 'h-14 w-14 sm:h-16 sm:w-16'
        : 'h-11 w-11 sm:h-12 sm:w-12 md:h-13 md:w-13';

  const titleClass =
    size === 'footer'
      ? 'text-lg font-bold tracking-tight'
      : 'text-[14px] sm:text-[16px] lg:text-[17px] font-extrabold tracking-tight';

  return (
    <span className="inline-flex items-center gap-2.5 sm:gap-3 min-w-0 select-none">
      {!imgFailed ? (
        <span
          className={`${emblemSize} rounded-full overflow-hidden shrink-0 bg-[#FFFDF7] ring-2 ${
            isDark ? 'ring-[#F4B942]/85' : 'ring-[#172B4D]/15'
          } shadow-sm inline-flex items-center justify-center`}
        >
          <img
            src={BUSINESS.officialLogo}
            alt="TDW Plumbing & Heating Corp. official logo"
            onError={() => setImgFailed(true)}
            className="w-full h-full object-cover scale-[1.06]"
          />
        </span>
      ) : (
        <span
          className={`${emblemSize} rounded-full shrink-0 bg-[#174EA6] text-[#FFFDF7] font-extrabold text-sm inline-flex items-center justify-center ring-2 ring-[#F4B942]`}
        >
          TDW
        </span>
      )}

      <span
        className={`font-[family-name:var(--font-display)] whitespace-nowrap shrink-0 ${titleClass} ${
          isDark
            ? 'text-[#FFFDF7] drop-shadow-[0_1px_2px_rgba(0,0,0,0.65)]'
            : 'text-[#172B4D]'
        }`}
      >
        <span className="sm:hidden">
          TDW Plumbing
        </span>
        <span className="hidden sm:inline">
          TDW Plumbing <span className="text-[#F4B942]">&amp;</span> Heating
        </span>
      </span>
    </span>
  );
}
