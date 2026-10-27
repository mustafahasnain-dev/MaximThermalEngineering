// Offerings megamenu. Every href must be a published page; the SEO check fails the build on a broken link.

export interface MenuGroup {
  title: string;
  href: string;
  blurb: string;
  links: { label: string; href: string }[];
}

const s = (id: string) => `/services/${id}/`;

export const offeringsMenu: MenuGroup[] = [
  {
    title: 'Industrial Radiators',
    href: s('industrial-radiators'),
    blurb: 'Generator and engine cooling, designed and built in-house.',
    links: [
      { label: 'Diesel generator radiators', href: s('industrial-radiators/diesel-generator-radiators') },
      { label: 'Gas engine radiators', href: s('industrial-radiators/gas-engine-radiators') },
      { label: 'Remote radiators with fan system', href: s('industrial-radiators/remote-radiators') },
      { label: 'Radiator repair & refurbishment', href: s('radiator-repair-refurbishment') },
    ],
  },
  {
    title: 'Heavy Machinery Radiators & Coolers',
    href: s('heavy-machinery-radiators-coolers'),
    blurb: 'Cooling for machines in demanding sites.',
    links: [
      { label: 'Excavators', href: s('heavy-machinery-radiators-coolers/excavator-radiators') },
      { label: 'Wheel loaders', href: s('heavy-machinery-radiators-coolers/wheel-loader-radiators') },
      { label: 'Dump trucks', href: s('heavy-machinery-radiators-coolers/dump-truck-radiators') },
      { label: 'Cranes', href: s('heavy-machinery-radiators-coolers/crane-radiators') },
    ],
  },
  {
    title: 'Heat Exchangers',
    href: s('heat-exchangers'),
    blurb: 'Process and plant heat transfer equipment.',
    links: [
      { label: 'Shell & tube heat exchangers', href: s('heat-exchangers/shell-and-tube-heat-exchangers') },
      { label: 'Air cooled heat exchangers', href: s('heat-exchangers/air-cooled-heat-exchangers') },
      { label: 'Fin tube heat exchangers', href: s('heat-exchangers/fin-tube-heat-exchangers') },
      { label: 'Waste heat recovery units', href: s('heat-exchangers/waste-heat-recovery-units') },
    ],
  },
  {
    title: 'Oil, Air & Fuel Coolers',
    href: s('oil-air-fuel-coolers'),
    blurb: 'Compressor and generator coolers.',
    links: [
      { label: 'Atlas Copco', href: s('oil-air-fuel-coolers/atlas-copco-compressor-coolers') },
      { label: 'CompAir', href: s('oil-air-fuel-coolers/compair-compressor-coolers') },
      { label: 'Ingersoll Rand', href: s('oil-air-fuel-coolers/ingersoll-rand-compressor-coolers') },
      { label: 'Kaeser', href: s('oil-air-fuel-coolers/kaeser-compressor-coolers') },
      { label: 'BOGE', href: s('oil-air-fuel-coolers/boge-compressor-coolers') },
    ],
  },
  {
    title: 'Coils & HVAC',
    href: s('hvac-solutions'),
    blurb: 'Building and refrigeration cooling.',
    links: [
      { label: 'Condenser & evaporator coils', href: s('condenser-evaporator-coils') },
      { label: 'HVAC solutions', href: s('hvac-solutions') },
      { label: 'Automotive radiators', href: s('automotive-radiators') },
    ],
  },
  {
    title: 'Engineering Services',
    href: '/services/',
    blurb: 'Site works, from design to commissioning.',
    links: [
      { label: 'Generator & air compressor services', href: '/#svc-generator' },
      { label: 'Boiler engineering', href: s('boiler-engineering') },
      { label: 'Industrial fabrication', href: s('industrial-fabrication') },
      { label: 'Solar energy solutions', href: s('solar-energy-solutions') },
      { label: 'Mechanical, electrical & civil', href: s('mechanical-electrical-civil-contracting') },
    ],
  },
];
