import React from 'react';
import {motion, useReducedMotion} from 'motion/react';
import {ArrowRight, ArrowUpRight, Award, Phone, ShieldCheck, Wrench} from 'lucide-react';
import {BUSINESS, MEDIA_ASSETS, TRUST_PILLARS, type RoutePath} from '../data/business';
import {SafeImage} from '../components/SafeImage';
import {ConversionBand} from '../components/ConversionBand';

interface AboutPageProps {
  onNavigate: (path: RoutePath) => void;
}

export function AboutPage({onNavigate}: AboutPageProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <main>
      {/* Clean Ivory + Royal Accent Editorial Header */}
      <section className="bg-[#FFFDF7] text-[#172B4D] pt-36 pb-16 lg:pb-24 border-b border-[#172B4D]/10">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            <motion.div
              className="lg:col-span-7 flex flex-col justify-between space-y-8"
              initial={prefersReducedMotion ? false : {opacity: 0, y: 18}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, ease: [0.16, 1, 0.3, 1]}}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <img
                    src={BUSINESS.officialLogo}
                    alt="TDW Plumbing & Heating official crest"
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-[#172B4D]/15 shrink-0"
                  />
                  <div>
                    <p className="text-sm font-bold tracking-wide text-[#174EA6]">
                      About TDW Plumbing &amp; Heating Corp.
                    </p>
                    <p className="text-xs font-semibold text-[#172B4D]/70">
                      {BUSINESS.instagramHandle} · {BUSINESS.thumbtackStatus}
                    </p>
                  </div>
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold leading-[1.06] tracking-tight text-[#172B4D]">
                  Built on accountability, clean workmanship, and local trust.
                </h1>
                <p className="text-base sm:text-lg leading-[1.7] text-[#172B4D]/80 max-w-[60ch]">
                  TDW Plumbing &amp; Heating Corp. was founded in Athol, Massachusetts by Master
                  Plumber <strong>{BUSINESS.owner}</strong> with a straightforward goal: deliver
                  residential and commercial plumbing and heating work that homeowners and business
                  owners never have to second-guess.
                </p>
                <p className="text-base sm:text-[17px] leading-[1.7] text-[#172B4D]/80 max-w-[60ch]">
                  In an industry where rushed repairs and hard-to-reach contractors are all too
                  common, TDW operates differently. Featured on regional broadcasts like{' '}
                  <em>Radio Worcester</em> alongside the BBB of Central New England and recognized
                  as a 5.0-star Thumbtack Top Pro, Abe brings clear communication and precision
                  craftsmanship to every call.
                </p>
              </div>

              {/* Verified Credentials Grid — hairline ruled, zero pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#172B4D]/12">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[#174EA6] text-xs font-bold tracking-wide">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span>State License</span>
                  </div>
                  <p className="text-lg font-extrabold text-[#172B4D] tabular-nums">
                    {BUSINESS.licenseNumber}
                  </p>
                  <p className="text-xs text-[#172B4D]/70">Master Plumber · Massachusetts</p>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[#174EA6] text-xs font-bold tracking-wide">
                    <Award className="w-4 h-4 shrink-0" />
                    <span>Accreditation</span>
                  </div>
                  <p className="text-lg font-extrabold text-[#172B4D]">BBB A+ Rated</p>
                  <p className="text-xs text-[#172B4D]/70">Central New England Accredited</p>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[#174EA6] text-xs font-bold tracking-wide">
                    <Wrench className="w-4 h-4 shrink-0" />
                    <span>Coverage</span>
                  </div>
                  <p className="text-lg font-extrabold text-[#172B4D]">Fully Insured</p>
                  <p className="text-xs text-[#172B4D]/70">Residential &amp; Commercial</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-5"
              initial={prefersReducedMotion ? false : {opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1]}}
            >
              <SafeImage
                src={MEDIA_ASSETS.workshopTools}
                alt="Precision plumbing tools, copper tubing, brass fittings, and test gauge on workbench"
                className="w-full h-[380px] sm:h-[460px] lg:h-full min-h-[460px]"
                loading="eager"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Authentic Field Documentation & Social Channels — Soft Warm Grey */}
      <section className="bg-[#F1F3F5] text-[#172B4D] py-20 lg:py-24">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <SafeImage
                src={MEDIA_ASSETS.heroBoiler}
                alt="Hydronic heating system copper piping and circulator pumps installed cleanly"
                className="w-full aspect-[16/10]"
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <p className="text-sm font-bold tracking-wide text-[#174EA6]">
                Follow Real Jobs in the Field
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-[1.12] tracking-tight">
                See Abe White&apos;s day-to-day installations on Instagram and Facebook.
              </h2>
              <p className="text-[16px] leading-[1.7] text-[#172B4D]/80">
                Rather than staging stock imagery, TDW shares real behind-the-scenes pipe runs,
                boiler rebuilds, water heater swaps, and day-to-day life on the road directly on
                Instagram as <strong>{BUSINESS.instagramHandle}</strong> and on our official
                Facebook business page.
              </p>

              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={BUSINESS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#174EA6] text-[#FFFDF7] font-bold text-sm hover:bg-[#2678E8] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Instagram · {BUSINESS.instagramHandle}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href={BUSINESS.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#172B4D]/25 text-[#172B4D] font-bold text-sm hover:border-[#174EA6] hover:text-[#174EA6] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Facebook Business Page</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Standards — Rich Royal Blue */}
      <section className="bg-[#174EA6] text-[#FFFDF7] py-20 lg:py-24">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-6 space-y-3">
              <p className="text-sm font-bold tracking-wide text-[#F4B942]">Our Code of Work</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                What you can expect on every single call.
              </h2>
            </div>
            <div className="lg:col-span-6 flex items-end lg:justify-end">
              <div className="flex flex-wrap gap-4">
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#F4B942] text-[#172B4D] font-bold text-sm hover:bg-[#f7c55f] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="tabular-nums">{BUSINESS.phoneDisplay}</span>
                </a>
                <button
                  type="button"
                  onClick={() => onNavigate('/services')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#FFFDF7]/50 text-[#FFFDF7] font-bold text-sm hover:bg-[#FFFDF7] hover:text-[#172B4D] transition-colors cursor-pointer"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 border-t border-[#FFFDF7]/20 pt-10">
            {TRUST_PILLARS.map((pillar) => (
              <div key={pillar.number} className="space-y-2 pb-6 border-b border-[#FFFDF7]/15">
                <p className="text-sm font-extrabold text-[#F4B942] tabular-nums">
                  {pillar.number}.
                </p>
                <h3 className="text-xl font-bold">{pillar.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#FFFDF7]/85">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConversionBand onNavigate={onNavigate} />
    </main>
  );
}
