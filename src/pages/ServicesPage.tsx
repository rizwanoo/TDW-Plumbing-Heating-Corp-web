import React, {useState} from 'react';
import {motion, useReducedMotion} from 'motion/react';
import {ArrowRight, Check, Phone} from 'lucide-react';
import {
  BUSINESS,
  SERVICE_OFFERINGS,
  type RoutePath,
  type ServiceCategory,
} from '../data/business';
import {SafeImage} from '../components/SafeImage';
import {ConversionBand} from '../components/ConversionBand';

interface ServicesPageProps {
  onNavigate: (path: RoutePath) => void;
}

const FILTER_TABS: {id: ServiceCategory; label: string}[] = [
  {id: 'all', label: 'All Services'},
  {id: 'heating', label: 'Heating & Boilers'},
  {id: 'water-heaters', label: 'Water Heaters'},
  {id: 'repairs', label: 'Repairs & Drains'},
  {id: 'installations', label: 'Kitchen & Bath'},
];

const WORK_STANDARDS = [
  {
    step: '01',
    title: 'Thorough On-Site Inspection',
    detail:
      'We trace the symptom to the root mechanical cause—whether pressure, venting, corrosion, or trap pitch—before recommending work.',
  },
  {
    step: '02',
    title: 'Clear Scope Before Starting',
    detail:
      'You get a straightforward explanation of repair versus replacement options and material choices with zero surprise add-ons.',
  },
  {
    step: '03',
    title: 'Code-Compliant Execution',
    detail:
      'All work follows Massachusetts plumbing and fuel gas standards under Master Plumber License #33822-PL-J.',
  },
  {
    step: '04',
    title: 'Tested & Cleaned Workspace',
    detail:
      'Lines are pressure-tested, valves are checked for drip-free shutoff, and your utility room or kitchen is left spotless.',
  },
];

export function ServicesPage({onNavigate}: ServicesPageProps) {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const prefersReducedMotion = useReducedMotion();

  const visibleServices =
    activeCategory === 'all'
      ? SERVICE_OFFERINGS
      : SERVICE_OFFERINGS.filter((item) => item.category === activeCategory);

  return (
    <main>
      {/* Editorial Royal Blue Header */}
      <section className="bg-[#174EA6] text-[#FFFDF7] pt-32 sm:pt-36 pb-14 lg:pb-20">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
            <div className="lg:col-span-8 space-y-5 min-w-0">
              <p className="text-sm font-bold tracking-wide text-[#F4B942]">
                Residential &amp; Commercial Services
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold leading-[1.06] tracking-tight">
                Complete plumbing, water heating, and boiler solutions.
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-[#FFFDF7]/85 max-w-2xl">
                Every service listed below reflects core work performed daily by TDW Plumbing &amp;
                Heating Corp. across Athol, Orange, Gardner, Amherst, and nearby towns.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-4 bg-[#F4B942] text-[#172B4D] font-extrabold text-[15px] hover:bg-[#f7c55f] transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" strokeWidth={2.5} />
                <span className="tabular-nums">Call {BUSINESS.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter plumbing and heating services"
            className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-[#FFFDF7]/20 flex flex-wrap items-center gap-2"
          >
            {FILTER_TABS.map((tab) => {
              const selected = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                    selected
                      ? 'bg-[#FFFDF7] text-[#172B4D]'
                      : 'bg-[#172B4D]/35 text-[#FFFDF7]/90 hover:bg-[#172B4D]/65'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Alternating Editorial Service Sections */}
      <section className="bg-[#FFFDF7] text-[#172B4D] py-12 lg:py-16">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 divide-y divide-[#172B4D]/12">
          {visibleServices.map((service, idx) => {
            const imageOnLeft = idx % 2 === 1;
            return (
              <motion.article
                key={service.id}
                initial={prefersReducedMotion ? false : {opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.15}}
                transition={{duration: 0.5, ease: [0.16, 1, 0.3, 1]}}
                className="py-14 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch"
              >
                <div
                  className={`lg:col-span-6 flex flex-col justify-between space-y-6 ${
                    imageOnLeft ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm font-bold text-[#174EA6]">
                      <span className="tabular-nums">{service.index}</span>
                      <span aria-hidden="true" className="text-[#172B4D]/30">/</span>
                      <span>{service.categoryLabel}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight text-[#172B4D]">
                      {service.title}
                    </h2>
                    <p className="text-[16px] leading-[1.7] text-[#172B4D]/80 max-w-[60ch]">
                      {service.details}
                    </p>

                    <ul className="pt-3 space-y-3">
                      {service.scopeItems.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-[15px] text-[#172B4D]/85">
                          <Check
                            className="w-4 h-4 text-[#174EA6] shrink-0 mt-1"
                            strokeWidth={2.5}
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-[#172B4D]/10 flex flex-wrap items-center gap-5">
                    <button
                      type="button"
                      onClick={() => onNavigate('/contact')}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#172B4D] text-[#FFFDF7] font-bold text-sm hover:bg-[#174EA6] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <span>Schedule This Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <a
                      href={BUSINESS.phoneHref}
                      className="text-sm font-bold text-[#174EA6] hover:underline tabular-nums whitespace-nowrap shrink-0"
                    >
                      Or call {BUSINESS.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div
                  className={`lg:col-span-6 ${
                    imageOnLeft ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <SafeImage
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-[320px] sm:h-[400px] lg:h-full min-h-[380px]"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Work Process Standards — Soft Warm Grey */}
      <section className="bg-[#F1F3F5] text-[#172B4D] py-20 lg:py-24 border-t border-[#172B4D]/10">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="max-w-2xl space-y-3 mb-12">
            <p className="text-sm font-bold tracking-wide text-[#174EA6]">How Every Job Runs</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
              Consistent standards from diagnostic call to final test.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-[#172B4D]/12 pt-10">
            {WORK_STANDARDS.map((item) => (
              <div key={item.step} className="space-y-3">
                <p className="text-sm font-extrabold text-[#174EA6] tabular-nums">{item.step}.</p>
                <h3 className="text-lg font-bold text-[#172B4D]">{item.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#172B4D]/75">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConversionBand
        onNavigate={onNavigate}
        heading="Ready to Book Plumbing or Heating Service?"
        subcopy="Call directly for urgent leaks or no-heat situations, or send project details online for water heaters, remodels, and installations."
      />
    </main>
  );
}
