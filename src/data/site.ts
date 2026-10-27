export const site = {
  name: 'Maxim Thermal Engineering',
  tagline: 'Radiators, coils, & heat exchanger solutions',
  url: 'https://www.maximthermalengg.com',
  description:
    'Industrial radiators, heavy machinery radiators, heat exchangers, HVAC coils and cooling systems. Design, manufacture, repair and install, anywhere in Pakistan.',
  phoneDisplay: '+92 331 2448064',
  phoneHref: 'tel:+923312448064',
  phoneE164: '+923312448064',
  waNumber: '923312448064',
  groupCompany: { name: 'Maxim Machines', url: 'https://www.maximmachines.com/' },
  // Placeholder endpoint until Phase 3 wires the Netlify function.
  formAction: '/api/lead-placeholder',
};

export const stats = [
  { value: '1600+', label: 'Projects completed', short: 'Projects completed' },
  { value: '400+', label: 'Corporate industrial clients', short: 'Industrial clients' },
  { value: '20+', label: 'Ongoing projects', short: 'Ongoing projects' },
  { value: '3', label: 'Cities: Karachi, Faisalabad, Lahore', short: 'Cities served' },
];

export const wa = (text: string) => `https://wa.me/${site.waNumber}?text=${encodeURIComponent(text)}`;
export const waDefault = wa('Hello Maxim Thermal, I would like a quote.');

const mapUrl = (q: string) => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);

export const locations = [
  {
    id: 'karachi-head-office',
    kind: 'Head office',
    city: 'Karachi',
    street: 'Plot #257, Sector 5, Korangi Industrial Area',
    addr: 'Plot #257, Sector 5, Korangi Industrial Area, Karachi',
    map: mapUrl('Plot 257 Sector 5 Korangi Industrial Area Karachi'),
  },
  {
    id: 'karachi-workshop',
    kind: 'Workshop',
    city: 'Karachi',
    street: 'L-68, Sector 48 "C", near Coast Guard, Korangi',
    addr: 'L-68, Sector 48 "C", near Coast Guard, Korangi, Karachi',
    map: mapUrl('L-68 Sector 48 C near Coast Guard Korangi Karachi'),
  },
  {
    id: 'faisalabad-factory',
    kind: 'Factory',
    city: 'Faisalabad',
    street: '3 km 76 R.B Rasool Pur, Sheikhupura Road',
    addr: '3 km 76 R.B Rasool Pur, Sheikhupura Road, Faisalabad',
    map: mapUrl('3 km 76 R.B Rasool Pur Sheikhupura Road Faisalabad'),
  },
  {
    id: 'lahore-workshop',
    kind: 'Workshop',
    city: 'Lahore',
    street: 'Babu Sabu Band Rd, Shera Kot',
    addr: 'Babu Sabu Band Rd, Shera Kot, Lahore',
    map: mapUrl('Babu Sabu Band Road Shera Kot Lahore'),
  },
];

export const brands = ['CAT', 'Perkins', 'Cummins', 'Atlas Copco', 'CompAir', 'Ingersoll Rand', 'Kaeser', 'BOGE'];

export const needOptions = [
  'Industrial radiator',
  'Heavy machinery radiator',
  'Heat exchanger',
  'HVAC solution',
  'Oil, air or fuel cooler',
  'Condenser or evaporator coil',
  'Repair or refurbishment',
  'Something else',
];

export const cityOptions = ['Karachi', 'Lahore', 'Faisalabad', 'Other'];
