import React from 'react';
import {motion, useReducedMotion} from 'motion/react';
import {ArrowRight, ArrowUpRight, MapPin, Phone, ShieldCheck} from 'lucide-react';
import {
  BUSINESS,
  MEDIA_ASSETS,
  SERVICE_OFFERINGS,
  SERVICE_TOWNS,
  TRUST_PILLARS,
  type RoutePath,
} from '../data/business';
import {SafeImage} from '../components/SafeImage';
import {ConversionBand} from '../components/ConversionBand';

interface HomePageProps {
  onNavigate: (path: RoutePath) => void;
}

export function HomePage({onNavigate}: HomePageProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <main>
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[88vh] lg:min-h-[92vh] flex items-end bg-[#172B4D] text-[#FFFDF7] overflow-hidden pt-28 pb-16 sm:pb-20 lg:pb-24">
        {/* Background photography with subtle slow drift */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-0"
          initial={prefersReducedMotion ? false : {scale: 1.06}}
          animate={prefersReducedMotion ? undefined : {scale: 1}}
          transition={{duration: 1.8, ease: [0.16, 1, 0.3, 1]}}
        >
          <img
            src={MEDIA_ASSETS.heroBoiler}
            alt=""
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Measured neutral scrim preserving natural copper & boiler colors with zero blue top tint */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#172B4D]/95 via-[#172B4D]/45 to-black/25"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#172B4D]/85 via-[#172B4D]/40 to-transparent"
        />

        <div className="relative z-10 max-w-[1320px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
            <motion.div
              className="lg:col-span-8 space-y-5 sm:space-y-6 min-w-0"
              initial={prefersReducedMotion ? false : {opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.65, ease: [0.16, 1, 0.3, 1]}}
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm font-medium text-[#F4B942]">
                <span>Athol, Massachusetts</span>
                <span aria-hidden="true" className="text-[#FFFDF7]/40">·</span>
                <span>Licensed &amp; Insured</span>
                <span aria-hidden="true" className="text-[#FFFDF7]/40">·</span>
                <span className="tabular-nums">MA License {BUSINESS.licenseNumber}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[62px] font-extrabold leading-[1.06] tracking-tight text-[#FFFDF7] max-w-3xl">
                Plumbing &amp; Heating Done Right.
              </h1>

              <p className="text-base sm:text-xl leading-relaxed text-[#FFFDF7]/90 max-w-2xl">
                Reliable plumbing and heating solutions, delivered with professional workmanship and
                service you can trust across North Quabbin and Central Massachusetts.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-4 bg-[#F4B942] text-[#172B4D] font-extrabold text-[14px] sm:text-[15px] tracking-wide hover:bg-[#f7c55f] transition-colors duration-150 text-center"
                >
                  <Phone className="w-4 h-4 shrink-0" strokeWidth={2.5} />
                  <span>CALL NOW · {BUSINESS.phoneDisplay}</span>
                </a>
                <button
                  type="button"
                  onClick={() => onNavigate('/services')}
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 border border-[#FFFDF7]/60 text-[#FFFDF7] font-bold text-[14px] sm:text-[15px] tracking-wide hover:bg-[#FFFDF7] hover:text-[#172B4D] transition-colors duration-150 cursor-pointer text-center"
                >
                  <span>EXPLORE OUR SERVICES</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
              </div>
            </motion.div>

            {/* Editorial Credential Column */}
            <motion.div
              className="lg:col-span-4 lg:border-l lg:border-[#FFFDF7]/20 lg:pl-8 space-y-4 text-sm"
              initial={prefersReducedMotion ? false : {opacity: 0, y: 16}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1]}}
            >
              <div className="space-y-1">
                <p className="text-xs font-semibold tracking-wide text-[#F4B942]">
                  Master Plumber Led
                </p>
                <p className="text-base font-bold text-[#FFFDF7]">
                  {BUSINESS.owner}, {BUSINESS.ownerTitle}
                </p>
                <p className="text-[#FFFDF7]/75">
                  Residential &amp; Commercial Plumbing and Heating
                </p>
              </div>
              <div className="pt-3 border-t border-[#FFFDF7]/15 flex items-center justify-between text-[#FFFDF7]/85">
                <span>{BUSINESS.bbbStatus}</span>
                <a
                  href={BUSINESS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#F4B942] hover:underline font-medium"
                >
                  <span>{BUSINESS.instagramHandle}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. BUSINESS INTRODUCTION — CLEAN IVORY EDITORIAL SPLIT */}
      <section className="bg-[#FFFDF7] text-[#172B4D] py-20 lg:py-28">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            <motion.div
              className="lg:col-span-6 flex flex-col justify-between space-y-8"
              initial={prefersReducedMotion ? false : {opacity: 0, y: 24}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.2}}
              transition={{duration: 0.55, ease: [0.16, 1, 0.3, 1]}}
            >
              <div className="space-y-6">
                <p className="text-sm font-bold tracking-wide text-[#174EA6]">
                  Full-Service Plumbing &amp; Heating · Athol, MA
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.1] tracking-tight text-[#172B4D]">
                  Clean pipework, honest diagnostics, and lasting mechanical systems.
                </h2>
                <p className="text-[17px] leading-[1.7] text-[#172B4D]/80 max-w-[62ch]">
                  TDW Plumbing &amp; Heating Corp. serves homeowners, landlords, and local
                  businesses throughout Athol and Central Massachusetts with dependable residential
                  and commercial plumbing and heating work.
                </p>
                <p className="text-[17px] leading-[1.7] text-[#172B4D]/80 max-w-[62ch]">
                  Led by licensed Master Plumber {BUSINESS.owner}, every boiler hookup, water
                  heater replacement, and leak repair is executed cleanly to Massachusetts code—no
                  shortcuts, no rushed patches, and clear communication from the first call.
                </p>
              </div>

              <div className="pt-8 border-t border-[#172B4D]/12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[#174EA6] font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span>Licensed &amp; Insured</span>
                  </div>
                  <p className="text-[15px] font-semibold text-[#172B4D] tabular-nums">
                    MA License #{BUSINESS.licenseNumber}
                  </p>
                  <p className="text-sm text-[#172B4D]/70">{BUSINESS.licensingBody}</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[#174EA6] font-bold text-sm">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span>Better Business Bureau</span>
                  </div>
                  <p className="text-[15px] font-semibold text-[#172B4D]">
                    {BUSINESS.bbbStatus}
                  </p>
                  <p className="text-sm text-[#172B4D]/70">
                    Serving 10 Massachusetts towns from Athol
                  </p>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => onNavigate('/about')}
                  className="inline-flex items-center gap-2 text-[15px] font-bold text-[#174EA6] hover:text-[#2678E8] transition-colors cursor-pointer group"
                >
                  <span>Meet Abe White &amp; TDW Plumbing</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-6"
              initial={prefersReducedMotion ? false : {opacity: 0, y: 24}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.2}}
              transition={{duration: 0.65, ease: [0.16, 1, 0.3, 1]}}
            >
              <SafeImage
                src={MEDIA_ASSETS.waterHeater}
                alt="High-efficiency residential water heater and expansion tank installation with copper piping"
                className="w-full h-[380px] sm:h-[460px] lg:h-full min-h-[460px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES — SOFT WARM GREY EDITORIAL INDEX */}
      <section className="bg-[#F1F3F5] text-[#172B4D] py-20 lg:py-28 border-y border-[#172B4D]/8">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end mb-14 lg:mb-16">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-sm font-bold tracking-wide text-[#174EA6]">
                Plumbing &amp; Heating Capabilities
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.1] tracking-tight">
                Residential &amp; commercial work built for New England homes.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <button
                type="button"
                onClick={() => onNavigate('/services')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#174EA6] text-[#FFFDF7] font-bold text-sm hover:bg-[#2678E8] transition-colors cursor-pointer"
              >
                <span>View All Plumbing &amp; Heating Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Editorial numbered list — borderless hairline-separated */}
            <div className="lg:col-span-7 divide-y divide-[#172B4D]/12 border-y border-[#172B4D]/12">
              {SERVICE_OFFERINGS.slice(0, 4).map((service) => (
                <div
                  key={service.id}
                  className="py-7 sm:py-8 group flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8"
                >
                  <span className="text-sm font-extrabold text-[#174EA6] tabular-nums pt-1 shrink-0">
                    {service.index}.
                  </span>
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#172B4D] group-hover:text-[#174EA6] transition-colors">
                        {service.title}
                      </h3>
                      <button
                        type="button"
                        onClick={() => onNavigate('/services')}
                        aria-label={`Learn more about ${service.title}`}
                        className="text-[#174EA6] hover:text-[#2678E8] p-1 shrink-0 cursor-pointer"
                      >
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                    <p className="text-[15px] leading-relaxed text-[#172B4D]/75 max-w-[60ch]">
                      {service.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Secondary craft showcase photo */}
            <div className="lg:col-span-5 space-y-5">
              <SafeImage
                src={MEDIA_ASSETS.kitchenBrass}
                alt="Remodeled kitchen soapstone sink and solid brass wall faucet installation"
                className="w-full aspect-[4/3]"
              />
              <div className="pt-2 space-y-2">
                <p className="text-xs font-bold tracking-wide text-[#174EA6]">
                  Finish Fixtures &amp; Rough-Ins
                </p>
                <p className="text-[15px] leading-relaxed text-[#172B4D]/80">
                  From emergency pipe leaks and drain clearing to kitchen remodels, water heaters,
                  and whole-house plumbing installations, TDW handles every phase cleanly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE TDW — RICH ROYAL BLUE ARCHITECTURAL BAND */}
      <section className="bg-[#174EA6] text-[#FFFDF7] py-20 lg:py-28">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 lg:mb-16">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-sm font-bold tracking-wide text-[#F4B942]">
                Why Homeowners Choose TDW
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.1] tracking-tight text-[#FFFDF7]">
                Craftsmanship that holds up long after the truck pulls away.
              </h2>
            </div>
            <div className="lg:col-span-5 flex items-end">
              <p className="text-[16px] leading-relaxed text-[#FFFDF7]/85">
                When water or heat fails in your home, you need a licensed tradesperson who shows up
                prepared, explains the real issue plainly, and builds it to last.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 border-t border-[#FFFDF7]/20 pt-12">
            {TRUST_PILLARS.map((pillar) => (
              <div key={pillar.number} className="space-y-3 pb-6 border-b border-[#FFFDF7]/15">
                <p className="text-sm font-extrabold text-[#F4B942] tabular-nums">
                  {pillar.number}.
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-[#FFFDF7]">{pillar.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#FFFDF7]/85 max-w-[54ch]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVICE AREA INTRODUCTION — CLEAN IVORY */}
      <section className="bg-[#FFFDF7] text-[#172B4D] py-20 lg:py-28">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <p className="text-sm font-bold tracking-wide text-[#174EA6]">
                Local Service Footprint
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-[1.12] tracking-tight">
                Serving Athol and nine surrounding Massachusetts communities.
              </h2>
              <p className="text-[16px] leading-relaxed text-[#172B4D]/80">
                Dispatched directly from Athol, MA, TDW Plumbing &amp; Heating Corp. serves homes
                and commercial properties across Worcester, Franklin, and Hampshire counties.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('/contact')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#172B4D] text-[#FFFDF7] font-bold text-sm hover:bg-[#174EA6] transition-colors cursor-pointer"
                >
                  <span>Check Availability in Your Town</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-[#172B4D]/12">
                {SERVICE_TOWNS.map((town, idx) => (
                  <div
                    key={town.name}
                    className="py-5 sm:pr-6 border-b border-[#172B4D]/12 flex items-baseline justify-between gap-4"
                  >
                    <div>
                      <span className="text-xs font-bold text-[#174EA6] tabular-nums mr-2.5">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-lg font-bold text-[#172B4D]">{town.name}, MA</span>
                      <p className="text-xs text-[#172B4D]/65 mt-0.5 pl-7">{town.county}</p>
                    </div>
                    <span className="text-xs font-medium text-[#172B4D]/60 tabular-nums shrink-0">
                      {town.zip}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONVERSION BAND */}
      <ConversionBand onNavigate={onNavigate} />
    </main>
  );
}
