// Business facts and shared links, copied from the original WordPress site.
export const site = {
  name: 'Maxim Thermal Engineering',
  url: 'https://www.maximthermalengg.com',
  phone: '+923312448064',
  phoneHref: 'tel:+923312448064',
  // Same pre-filled message the old site's WhatsApp buttons used.
  whatsapp:
    'https://api.whatsapp.com/send?phone=923312448064&text=Hello%20Maxim%20Thermal%20Engineering%2CThis%20inquiry%20has%20been%20submitted%20through%20your%20website.I%27m%20interested%20in%20your%20products%2Fservices%20and%20would%20like%20to%20discuss%20my%20requirements.%20Please%20contact%20me%20at%20your%20earliest%20convenience.Thank%20you.',
  tagline: 'Maxim Thermal Engineering specializes in industrial radiators, heat exchangers, HVAC coils, and cooling systems.',
  social: {
    linkedin: 'https://www.linkedin.com/company/maxim-thermal-engineering/?originalSubdomain=pk',
    facebook: 'https://www.facebook.com/profile.php?id=61592368329497',
    instagram: 'https://www.instagram.com/maxim_radiators/',
  },
  addresses: [
    { label: 'Head Office:', text: 'Plot #257, Sector 5, Korangi Industrial Area, Karachi' },
    { label: 'Workshop (KHI):', text: 'L-68, Sector 48 “C”, near Coast Guard, Korangi' },
    { label: 'Factory', text: '3 km 76 R.B Rasool Pur, Sheikhupura Road Faislabad' },
    { label: 'Workshop (LHR)', text: 'Babu Sabu Band rd. Shera Kot, Lahore' },
  ],
  map: 'https://maps.google.com/maps?q=Plot%20%23257%2C%20Sector%205%2C%20Korangi%20Industrial%20Area%2C%20Karachi&t=&z=15&ie=UTF8&iwloc=&output=embed',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Offerings', href: '#', mega: true },
  { label: 'About us', href: '/about-us/' },
  { label: 'Contact us', href: '/contact-us/' },
];

// Offerings megamenu: three tabs, as on the old site.
export const mega = [
  {
    tab: 'Industrial Radiators',
    img: 'industrial-radiator.jpeg',
    text: 'Design, Manufacturing, Repair & Refurbishment of Remote Radiators, Engine Mounted Radiators, Diesel & Gas Generator Radiators and Special Purpose Radiators.',
    href: '/industrial-radiators/',
    items: ['Diesel & Gas Engine Industrial Radiators', 'Remote Radiators with Fan System', 'Designing of Engine Cooling System & Circuits', 'Complete Turn Key Projects, Commissioning, & Installations all over Pakistan'],
  },
  {
    tab: 'Heavy Machinery Radiators',
    img: 'heavyMachineryRadiators.jpeg',
    text: 'We provide reliable cooling solutions for heavy machinery operating in demanding industrial environments. Our systems help maintain optimal temperatures, improve performance, and extend equipment lifespan.',
    href: '/heavy-machinery/',
    items: ['Excavators Radiators', 'Wheel Loaders Radiators', 'Bulldozers Radiators', 'Dump Trucks Radiators', 'Motor Graders Radiators', 'Cranes Radiators', 'Drilling Rigs Radiators', 'Mining Equipment Radiators'],
  },
  {
    tab: 'Automotive Radiators',
    img: '7c5ed35e-f8e8-45a2-bcbb-374445bc4491-2026-07-20.jpeg',
    text: 'Radiators for passenger cars, three-wheelers, and tractors — everyday fitment cooling, made to the tolerances your cooling system actually needs, not a loose approximation of them.',
    href: '/automotive-radiators/',
    items: ['Passenger Car Radiators', 'Three-Wheeler Radiators', 'Tractor Radiators all Model'],
  },
];

export const footerCols = [
  {
    title: 'INDUSTRIAL RADIATORS',
    links: [
      { label: 'Industrial Radiator Solutions for Demanding Applications', href: '/industrial-radiators/' },
      { label: 'Industrial Radiator Repair & Refurbishment', href: '/industrial-radiators/' },
      { label: 'Engine Cooling System Design & Circuit Engineering', href: '/industrial-radiators/' },
    ],
  },
  {
    title: 'HEAVY MACHINERY RADIATORS',
    links: [
      { label: 'Heavy-Duty Cooling for Demanding Equipment', href: '/heavy-machinery/' },
      { label: 'Heavy Machinery Radiator Solutions', href: '/heavy-machinery/' },
      { label: 'Our Heavy Machinery Cooling Process', href: '/heavy-machinery/' },
    ],
  },
  {
    title: 'AUTOMOTIVE RADIATORS',
    links: [
      { label: 'Reliable Automotive Cooling for Everyday Vehicle Use', href: '/automotive-radiators/' },
      { label: 'Automotive Radiator Solutions', href: '/automotive-radiators/' },
      { label: 'How We Approach an Automotive Radiator Requirement', href: '/automotive-radiators/' },
    ],
  },
];
