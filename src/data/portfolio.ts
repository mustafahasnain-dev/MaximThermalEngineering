// Projects shown on /project/, as supplied by the owner (projects page design, 2026-10-27).
// Photos are stand-ins from the old site's uploads until the real project photos arrive.
export type Spec = { icon: string; label: string; value: string };
export type PortfolioItem = {
  slug: string;
  title: string;
  subtitle: string;
  tag: string;
  status: 'Completed Project' | 'Service Project';
  cats: string[];
  img: string;
  client: string;
  summary: string;
  specs: Spec[];
};

export const filters = ['All Projects', 'Heat Exchangers', 'Radiators', 'HVAC Solutions', 'Oil/Air/Fuel Coolers', 'Condenser & Evaporator Coils', 'Industrial Fabrication', 'Mechanical, Electrical & Civil Contracting'];

export const portfolio: PortfolioItem[] = [
  {
    slug: 'remote-radiator-system-jgs420',
    title: 'Remote Radiator System',
    subtitle: 'Engine Cooling Solution – JGS420',
    tag: 'Radiators', status: 'Completed Project', cats: ['Radiators'],
    img: 'CAT-3516-gas-remote-radiator-manufactured-by-Maxim-Thermal-Engineering.png',
    client: 'Memon Medical Institute Hospital',
    summary: 'Remote radiator with an 8-fan arrangement, built to cool a JGS420 engine.',
    specs: [
      { icon: 'gear', label: 'Engine', value: 'JGS420' },
      { icon: 'fan', label: '8 Fans', value: 'Configuration' },
      { icon: 'size', label: 'Size', value: '6096 x 2540 mm' },
    ],
  },
  {
    slug: 'shell-tube-heat-exchanger-process-water-cooling',
    title: 'Shell & Tube Heat Exchanger',
    subtitle: 'Process Water Cooling Application',
    tag: 'Heat Exchangers', status: 'Completed Project', cats: ['Heat Exchangers'],
    img: 'Industrial-Heat-Exchanger-in-Workshop.png',
    client: 'Engro Thar Coal',
    summary: 'Stainless steel 316L shell and tube exchanger for process water cooling.',
    specs: [
      { icon: 'gear', label: 'Duty', value: '928 kW' },
      { icon: 'tube', label: 'Tube Material', value: 'SS 316L' },
      { icon: 'gauge', label: 'Design Pressure', value: '10 bar' },
    ],
  },
  {
    slug: 'industrial-oil-cooler-thermal-oil',
    title: 'Industrial Oil Cooler',
    subtitle: 'Thermal Oil Cooling System',
    tag: 'Oil Coolers', status: 'Completed Project', cats: ['Oil/Air/Fuel Coolers'],
    img: 'Industrial-Copper-Heat-Exchangers.webp',
    client: 'Bersek',
    summary: 'Copper-tube cooler that brings thermal oil down from 250°C to 160°C.',
    specs: [
      { icon: 'temp', label: 'Inlet / Outlet', value: '250°C / 160°C' },
      { icon: 'flow', label: 'Flow Rate', value: '200–240 m³/hr' },
      { icon: 'pipe', label: 'Tube Material', value: 'Copper' },
    ],
  },
  {
    slug: 'steam-condensing-unit-hospital',
    title: 'Steam Condensing Unit',
    subtitle: 'Hospital Steam Condensation',
    tag: 'Steam Systems', status: 'Completed Project', cats: ['Condenser & Evaporator Coils'],
    img: 'Condenser-Coils.webp',
    client: 'Memon Medical Institute Hospital',
    summary: 'Copper finned-coil unit built to condense steam at a hospital.',
    specs: [
      { icon: 'size', label: 'Core Size', value: '180" x 90"' },
      { icon: 'layers', label: 'Tube Material', value: 'Cu Alloy 65/35' },
      { icon: 'layers', label: 'Fin Material', value: '99.9% Copper' },
    ],
  },
  {
    slug: 'air-compressor-cooling-system-aftercooler',
    title: 'Air Compressor Cooling System',
    subtitle: 'Aftercooler with Moisture Separator',
    tag: 'Air Cooling', status: 'Completed Project', cats: ['Oil/Air/Fuel Coolers'],
    img: 'Industrial-Generator-Air-Compressor-Services.webp',
    client: 'Atlas Copco',
    summary: 'Aftercooler with moisture separator for an air compressor system.',
    specs: [
      { icon: 'fan', label: 'Capacity', value: '55–65 m³/min' },
      { icon: 'gauge', label: 'Design Pressure', value: '10 bar' },
      { icon: 'temp', label: 'Outlet Temp', value: '< 38°C' },
    ],
  },
  {
    slug: 'tube-bundle-replacement-shell-tube-overhauling',
    title: 'Tube Bundle Replacement',
    subtitle: 'Shell & Tube Heat Exchanger Overhauling',
    tag: 'Maintenance', status: 'Service Project', cats: ['Heat Exchangers'],
    img: 'Industrial-Heat-Exchanger-Labyrinth.png',
    client: 'Engro Thar Coal',
    summary: 'Overhauling of a shell and tube exchanger, replacing 150 of its 1200 tubes.',
    specs: [
      { icon: 'pipe', label: 'Total Tubes', value: '1200' },
      { icon: 'wrench', label: 'Tubes Replaced', value: '150 (SS316)' },
      { icon: 'pin', label: 'Location', value: 'Engro Thar Coal' },
    ],
  },
  {
    slug: 'industrial-air-heater-pet-drying',
    title: 'Industrial Air Heater',
    subtitle: 'Hot Air Generator for PET Drying',
    tag: 'Process Heating', status: 'Completed Project', cats: ['Heat Exchangers'],
    img: 'AHU-Condenser-Coil-Manufacturing-and-Installation-at-Engro.png',
    client: 'Polyols',
    summary: 'Hot air generator delivering 170–180°C air for PET drying.',
    specs: [
      { icon: 'temp', label: 'Air Outlet', value: '170–180°C' },
      { icon: 'flow', label: 'Air Flow', value: '300 m³/hr' },
      { icon: 'pipe', label: 'Tube Material', value: 'SS 316L / Copper' },
    ],
  },
  {
    slug: 'water-to-water-heat-exchanger-process-cooling',
    title: 'Water-to-Water Heat Exchanger',
    subtitle: 'Process Water Cooling',
    tag: 'Water Cooling', status: 'Completed Project', cats: ['Heat Exchangers'],
    img: 'Stainless-Steel-Heat-Exchanger-Workshop.png',
    client: 'Pepsi',
    summary: 'Water-to-water exchanger that cools process water.',
    specs: [
      { icon: 'temp', label: 'Primary In/Out', value: '10°C / 15.5°C' },
      { icon: 'temp', label: 'Secondary In/Out', value: '50°C / 25°C' },
      { icon: 'flow', label: 'Flow Rate', value: '81.6 GPM' },
    ],
  },
];
