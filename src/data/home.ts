import type { ImageMetadata } from 'astro';
import industrialRadiators from '../assets/placeholders/industrial-radiators.jpg';
import heavyMachinery from '../assets/placeholders/heavy-machinery.jpg';
import heatExchangers from '../assets/placeholders/heat-exchangers.jpg';
import hvac from '../assets/placeholders/hvac.jpg';
import coolers from '../assets/placeholders/coolers.jpg';
import coils from '../assets/placeholders/coils.jpg';
import generator from '../assets/placeholders/generator.jpg';
import fabrication from '../assets/placeholders/fabrication.jpg';
import boiler from '../assets/placeholders/boiler.jpg';
import solar from '../assets/placeholders/solar.jpg';
import contracting from '../assets/placeholders/contracting.jpg';
import automotive from '../assets/placeholders/automotive.jpg';
import projectAhu from '../assets/placeholders/project-ahu-coil.jpg';
import projectCat from '../assets/placeholders/project-cat-3516.jpg';

export interface Feature {
  id: string;
  page: string;
  title: string;
  body: string;
  bullets: string[];
  cta: string;
  need: string;
  waText: string;
  image: ImageMetadata;
  alt: string;
}

export const features: Feature[] = [
  {
    id: 'industrial-radiators',
    page: '/services/industrial-radiators/',
    title: 'Industrial Radiators',
    body: 'Design, manufacturing, repair and refurbishment of remote radiators, engine mounted radiators, diesel and gas generator radiators and special purpose radiators.',
    bullets: [
      'Diesel & gas engine industrial radiators',
      'Remote radiators with fan system',
      'Engine cooling system and circuit design',
      'Turnkey projects, commissioning and installation all over Pakistan',
    ],
    cta: 'Get a radiator quote',
    need: 'Industrial radiator',
    waText: 'Hello Maxim Thermal, I need an industrial radiator.',
    image: industrialRadiators,
    alt: '[placeholder] CAT, Perkins and Cummins engine radiators',
  },
  {
    id: 'heavy-machinery',
    page: '/services/heavy-machinery-radiators-coolers/',
    title: 'Heavy Machinery Radiators & Coolers',
    body: 'Reliable cooling for heavy machinery operating in demanding industrial environments. Our systems help maintain optimal temperatures, improve performance and extend equipment life.',
    bullets: ['Excavators', 'Wheel loaders', 'Bulldozers', 'Dump trucks', 'Motor graders', 'Cranes', 'Drilling rigs', 'Mining equipment'],
    cta: 'Get a quote for your fleet',
    need: 'Heavy machinery radiator',
    waText: 'Hello Maxim Thermal, I need a heavy machinery radiator.',
    image: heavyMachinery,
    alt: '[placeholder] Crane, motor grader and excavator',
  },
  {
    id: 'heat-exchangers',
    page: '/services/heat-exchangers/',
    title: 'Heat Exchangers',
    body: 'Design and fabrication of shell and tube heat exchangers, air cooled heat exchangers, fin tube heat exchangers, waste heat recovery units and custom thermal systems.',
    bullets: [
      'Shell & tube heat exchangers',
      'Air cooled heat exchangers',
      'Fin tube heat exchangers',
      'Waste heat recovery units',
      'Custom thermal solutions',
    ],
    cta: 'Get a heat exchanger quote',
    need: 'Heat exchanger',
    waText: 'Hello Maxim Thermal, I need a heat exchanger.',
    image: heatExchangers,
    alt: '[placeholder] Black and white air cooled heat exchangers',
  },
];

export const moreServices = [
  { id: 'svc-hvac', page: '/services/hvac-solutions/', title: 'HVAC Solutions', need: 'HVAC solution', image: hvac, photo: 'HVAC installation', blurb: 'Industrial ventilation, ducting, AHU installation, chillers and chilled water piping.' },
  { id: 'svc-coolers', page: '/services/oil-air-fuel-coolers/', title: 'Oil, Air & Fuel Coolers', need: 'Oil, air or fuel cooler', image: coolers, photo: 'Compressor oil cooler', blurb: 'Compressor coolers for Atlas Copco, CompAir, Ingersoll Rand, Kaeser and BOGE, and fuel coolers for generators.' },
  { id: 'svc-coils', page: '/services/condenser-evaporator-coils/', title: 'Condenser & Evaporator Coils', need: 'Condenser or evaporator coil', image: coils, photo: 'Condenser coil', blurb: 'Efficient heat exchange for refrigeration and air conditioning, industrial and commercial.' },
  { id: 'svc-generator', page: '', title: 'Generator & Air Compressor Services', need: 'Repair or refurbishment', image: generator, photo: 'Generator overhaul', blurb: 'Installation, overhauling, preventive maintenance and breakdown support.' },
  { id: 'svc-fabrication', page: '/services/industrial-fabrication/', title: 'Industrial Fabrication', need: 'Something else', image: fabrication, photo: 'Fabricated skid', blurb: 'Structural steel, equipment skids, platforms, piping, tanks and ducting.' },
  { id: 'svc-boiler', page: '/services/boiler-engineering/', title: 'Boiler Engineering Services', need: 'Something else', image: boiler, photo: 'Steam boiler', blurb: 'Installation, repair, retubing, overhauling and burner services for steam boilers.' },
  { id: 'svc-solar', page: '/services/solar-energy-solutions/', title: 'Solar Energy Solutions', need: 'Something else', image: solar, photo: 'Solar installation', blurb: 'On-grid, off-grid and hybrid solar PV systems, from design to commissioning.' },
  { id: 'svc-contracting', page: '/services/mechanical-electrical-civil-contracting/', title: 'Mechanical, Electrical & Civil Contracting', need: 'Something else', image: contracting, photo: 'Site works', blurb: 'Turnkey engineering, installation, piping, electrical and civil works.' },
  { id: 'svc-automotive', page: '/services/automotive-radiators/', title: 'Automotive Radiators', need: 'Something else', image: automotive, photo: 'Automotive radiator', blurb: 'Radiators for passenger cars, three-wheelers and tractors.' },
];

export const steps = [
  { n: '1', title: 'Send your requirement', body: 'Use the form, WhatsApp or a call. Photos of the nameplate or existing unit help.' },
  { n: '2', title: 'Technical review & quote', body: 'Our engineers confirm the specification and send a clear quotation.' },
  { n: '3', title: 'Build or repair', body: 'We manufacture, repair or refurbish in our own workshops and factory.' },
  { n: '4', title: 'Install & commission', body: 'Our team installs, tests and commissions at your site.' },
];

export const projects = [
  {
    image: projectAhu,
    alt: '[placeholder] AHU condenser coil installed on site',
    tag: 'HVAC · Process industry',
    title: 'AHU Condenser Coil Manufacturing and Installation at Engro',
    scope: 'Manufacturing and on-site installation of condenser coils for air handling units.',
    result: '[Add a measurable outcome, such as downtime saved or efficiency gained]',
  },
  {
    image: projectCat,
    alt: '[placeholder] CAT 3516 remote radiator',
    tag: 'Industrial radiators · Oil & gas',
    title: 'CAT 3516 Gas Remote Radiator for Oil & Gas Industry',
    scope: 'Remote radiator with fan system for a CAT 3516 gas engine.',
    result: '[Add a measurable outcome, such as operating temperature held at rated load]',
  },
];

export const reasons = [
  { title: 'Design to commissioning', body: 'One team designs, manufactures, repairs and installs, so nothing is lost between suppliers.' },
  { title: 'Nationwide delivery', body: 'Turnkey projects, commissioning and installation all over Pakistan.' },
  { title: 'Close to your site', body: 'Workshops in Karachi and Lahore and a factory in Faisalabad.' },
  { title: 'Breakdown support', body: 'Emergency works and overhauling for diesel and gas generators and industrial air compressors.' },
];

export const clients = Array.from({ length: 6 }, () => '[Client logo]');

export const testimonials = [
  { text: '"[Client quote about quality, delivery or support, with their permission]"', who: '[Name] · [Job title] · [Company]' },
  { text: '"[Client quote about quality, delivery or support, with their permission]"', who: '[Name] · [Job title] · [Company]' },
];
