export type RoutePath = '/' | '/services' | '/about' | '/contact';

export const BUSINESS = {
  name: 'TDW Plumbing & Heating Corp.',
  shortName: 'TDW Plumbing & Heating',
  owner: 'Abe White',
  ownerTitle: 'Owner & Master Plumber',
  licenseNumber: '33822-PL-J',
  licensingBody: 'Massachusetts Division of Occupational Licensure',
  bbbStatus: 'BBB Accredited · A+ Rating',
  thumbtackStatus: 'Thumbtack Top Pro · 5.0 Rated',
  established: 'Serving Central & Western MA since 2023',
  officialLogo: '/tdw-official-logo.jpg',
  phoneDisplay: '(978) 709-1487',
  phoneInternational: '+1 978-709-1487',
  phoneHref: 'tel:+19787091487',
  email: 'tdwplumbingheating@gmail.com',
  emailHref: 'mailto:tdwplumbingheating@gmail.com',
  location: 'Athol, Massachusetts 01331',
  regionLabel: 'North Quabbin & Pioneer Valley, MA',
  instagramHandle: '@the_mulleted_plumber',
  instagramUrl: 'https://www.instagram.com/the_mulleted_plumber',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61551379301072',
  description: 'Full-service residential and commercial plumbing and heating contractor. Fully licensed and insured.',
} as const;

export const MEDIA_ASSETS = {
  heroBoiler: '/src/assets/images/hero_boiler_manifold_1794914529769.jpg',
  waterHeater: '/src/assets/images/service_water_heater_1794914529655.jpg',
  kitchenBrass: '/src/assets/images/service_kitchen_brass_1794914530012.jpg',
  workshopTools: '/src/assets/images/workshop_precision_tools_1794914531277.jpg',
} as const;

export interface ServiceTown {
  name: string;
  county: string;
  region: 'North Quabbin' | 'Worcester North' | 'Pioneer Valley';
  zip: string;
  notes: string;
}

export const SERVICE_TOWNS: ServiceTown[] = [
  {
    name: 'Athol',
    county: 'Worcester County',
    region: 'North Quabbin',
    zip: '01331',
    notes: 'Home base for residential and commercial dispatch.',
  },
  {
    name: 'Orange',
    county: 'Franklin County',
    region: 'North Quabbin',
    zip: '01364',
    notes: 'Same-corridor response along Route 2 and Route 2A.',
  },
  {
    name: 'New Salem',
    county: 'Franklin County',
    region: 'North Quabbin',
    zip: '01355',
    notes: 'Hydronic heating, water heaters, and well-side interior plumbing.',
  },
  {
    name: 'Petersham',
    county: 'Worcester County',
    region: 'North Quabbin',
    zip: '01366',
    notes: 'Historic home repiping, boilers, and freeze-damage prevention.',
  },
  {
    name: 'Templeton',
    county: 'Worcester County',
    region: 'Worcester North',
    zip: '01468',
    notes: 'Full plumbing installations, repairs, and boiler servicing.',
  },
  {
    name: 'Gardner',
    county: 'Worcester County',
    region: 'Worcester North',
    zip: '01440',
    notes: 'Residential & multi-family plumbing, drain clearing, and heating.',
  },
  {
    name: 'Hubbardston',
    county: 'Worcester County',
    region: 'Worcester North',
    zip: '01452',
    notes: 'Water heater replacements, leak repairs, and heating tune-ups.',
  },
  {
    name: 'Barre',
    county: 'Worcester County',
    region: 'Worcester North',
    zip: '01005',
    notes: 'Boilers, kitchen & bath rough-ins, and outdoor fixtures.',
  },
  {
    name: 'Amherst',
    county: 'Hampshire County',
    region: 'Pioneer Valley',
    zip: '01002',
    notes: 'Residential and commercial installations across the Valley.',
  },
  {
    name: 'Hadley',
    county: 'Hampshire County',
    region: 'Pioneer Valley',
    zip: '01035',
    notes: 'Commercial fixtures, water heating systems, and leak diagnostics.',
  },
];

export type ServiceCategory =
  | 'all'
  | 'repairs'
  | 'water-heaters'
  | 'heating'
  | 'installations';

export interface ServiceOffering {
  index: string;
  id: string;
  category: Exclude<ServiceCategory, 'all'>;
  categoryLabel: string;
  title: string;
  summary: string;
  details: string;
  scopeItems: string[];
  image: string;
  imageAlt: string;
}

export const SERVICE_OFFERINGS: ServiceOffering[] = [
  {
    index: '01',
    id: 'heating-boilers',
    category: 'heating',
    categoryLabel: 'Heating & Boilers',
    title: 'Hydronic Boilers & Heating Systems',
    summary:
      'Precision boiler installation, diagnostics, and seasonal maintenance built for New England winters.',
    details:
      'Massachusetts heating seasons leave zero margin for sloppy piping. From high-efficiency condensing boilers and circulator pump replacements to zone valve manifolds and baseboard balancing, every joint is soldered, purged, and pressure-tested for dependable heat.',
    scopeItems: [
      'Boiler installation, replacement, and emergency troubleshooting',
      'Circulator pumps, expansion tanks, air purgers, and zone valves',
      'Hydronic copper near-boiler piping and manifold rebuilds',
      'Seasonal heating maintenance and pre-winter readiness checks',
    ],
    image: MEDIA_ASSETS.heroBoiler,
    imageAlt: 'Residential hydronic boiler room with neatly soldered parallel copper manifolds and brass valves',
  },
  {
    index: '02',
    id: 'water-heaters',
    category: 'water-heaters',
    categoryLabel: 'Water Heaters',
    title: 'Water Heater Installation & Repair',
    summary:
      'Code-compliant tank and tankless water heater replacements with clean copper piping and safety valves.',
    details:
      'Whether an aging tank is leaking in the basement or you are upgrading to a higher-recovery system, TDW handles full removal, new gas or electric hookups, thermal expansion tanks, mixing valves, and relief piping cleanly in a single scheduled visit.',
    scopeItems: [
      'Standard tank and high-efficiency tankless water heater installation',
      'Thermostat, burner, and heating element diagnostics & repair',
      'Thermal expansion tank mounting and full-port brass shutoff valves',
      'Venting, drip pans, and relief line code compliance',
    ],
    image: MEDIA_ASSETS.waterHeater,
    imageAlt: 'High-efficiency residential water heater installation with expansion tank and soldered copper piping',
  },
  {
    index: '03',
    id: 'plumbing-repairs',
    category: 'repairs',
    categoryLabel: 'Repairs & Leaks',
    title: 'Pipe & Leak Repairs, Toilets & Outdoor Faucets',
    summary:
      'Fast, permanent repairs for active leaks, burst pipes, running toilets, and exterior hose bibbs.',
    details:
      'Small drips behind a wall or a split exterior sillcock after a hard freeze turn into costly structural damage when patched hastily. We locate the source, replace failing piping or valves properly, and test operating pressure before packing up.',
    scopeItems: [
      'Copper, PEX, and drain leak detection and permanent pipe repair',
      'Freeze-damaged pipe and frost-free outdoor faucet replacement',
      'Toilet repair, wax ring resealing, and full toilet replacement',
      'Main shutoff valve upgrades to quarter-turn brass ball valves',
    ],
    image: MEDIA_ASSETS.workshopTools,
    imageAlt: 'Master plumber forged wrench, copper cutter, brass fittings, and test gauge on a wooden workbench',
  },
  {
    index: '04',
    id: 'kitchen-bath',
    category: 'installations',
    categoryLabel: 'Kitchen & Bath',
    title: 'Kitchen, Bath & Whole-House Installations',
    summary:
      'Clean rough-in and finish plumbing for remodels, new fixtures, garbage disposals, and repiping.',
    details:
      'From setting a soapstone apron sink and solid brass faucet to roughing in an entire bathroom renovation or replacing aging galvanized lines with new copper or PEX distribution, every wall cavity is pressure-checked and built to last decades.',
    scopeItems: [
      'Kitchen sink, faucet, dishwasher line, and garbage disposal installs',
      'Bathroom vanity, tub/shower valve, and fixture upgrades',
      'Whole-house water line repiping and manifold organization',
      'Residential and commercial new-build or remodel rough-ins',
    ],
    image: MEDIA_ASSETS.kitchenBrass,
    imageAlt: 'Craftsman kitchen soapstone sink and solid brass wall-mount faucet installation',
  },
  {
    index: '05',
    id: 'drain-cleaning',
    category: 'repairs',
    categoryLabel: 'Drain Services',
    title: 'Drain Cleaning & Clog Clearing',
    summary:
      'Thorough clearing for sluggish kitchen lines, tub drains, main stacks, and commercial floor drains.',
    details:
      'Chemical drain openers eat away at older traps and rarely clear the blockage. We clear kitchen, bathroom, laundry, and branch drain lines mechanically and inspect trap geometry so water flows freely without recurring backups.',
    scopeItems: [
      'Kitchen, bathroom sink, shower, and tub drain clearing',
      'P-trap, waste arm, and cleanout replacement',
      'Laundry standpipe and utility sink drainage fixes',
      'Commercial and residential recurring blockage diagnostics',
    ],
    image: MEDIA_ASSETS.workshopTools,
    imageAlt: 'Plumbing tools, copper tubing, and brass fittings arranged for diagnostic and repair work',
  },
];

export const TRUST_PILLARS = [
  {
    number: '01',
    title: 'Licensed Master Plumber Craft',
    description:
      'Every project is overseen by owner Abe White under Massachusetts Master Plumber License #33822-PL-J — never handed off to unverified subcontractors.',
  },
  {
    number: '02',
    title: 'Work You Can Inspect with Pride',
    description:
      'Level pipe runs, clean solder joints, labeled isolation valves, and tidy mechanical rooms. Your basement and utility space are left cleaner than we found them.',
  },
  {
    number: '03',
    title: 'Straightforward Scope & Honest Answers',
    description:
      'Clear options before work starts—whether a targeted repair will serve you reliably or a replacement is the smarter long-term investment.',
  },
  {
    number: '04',
    title: 'Rooted in North Quabbin & the Valley',
    description:
      'Based right in Athol, Massachusetts with A+ BBB accreditation, answering calls directly and standing behind every job across ten local towns.',
  },
] as const;
